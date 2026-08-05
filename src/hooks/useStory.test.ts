import { afterEach, describe, expect, it, vi } from "vitest";
import { renderHook, waitFor } from "@testing-library/react";
import axios from "axios";
import { useStory } from "./useStory";
import STORY_HALLOWEEN from "../component/directory/themes/halloween.data";
import type { Story } from "../types/story";

vi.mock("axios");
const mockedAxios = vi.mocked(axios, true);

afterEach(() => {
  vi.resetAllMocks();
});

describe("useStory", () => {
  it("resolves a known theme synchronously, with no fetch", () => {
    const { result } = renderHook(() => useStory("halloween"));

    expect(result.current).toEqual({
      status: "loaded",
      frames: STORY_HALLOWEEN.frames,
      error: null,
    });
    expect(mockedAxios.get).not.toHaveBeenCalled();
  });

  it("returns an error for an unknown theme", () => {
    const { result } = renderHook(() => useStory("kwanzaa"));

    expect(result.current).toEqual({
      status: "error",
      frames: [],
      error: "Unknown theme: kwanzaa",
    });
  });

  it("fetches data/story.json when no theme is given", async () => {
    const story: Story = {
      frames: [
        {
          title: "Fetched",
          body: "<p>hi</p>",
          colors: { bg: "#fff", text: "#000" },
          buttons: [],
        },
      ],
    };
    mockedAxios.get.mockResolvedValueOnce({ data: story });

    const { result } = renderHook(() => useStory(undefined));

    expect(result.current.status).toBe("loading");

    await waitFor(() => expect(result.current.status).toBe("loaded"));
    expect(result.current.frames).toEqual(story.frames);
    expect(mockedAxios.get).toHaveBeenCalledWith(expect.stringContaining("data/story.json"));
  });

  it("reports empty when the fetched story has no frames", async () => {
    mockedAxios.get.mockResolvedValueOnce({ data: { frames: [] } });

    const { result } = renderHook(() => useStory(undefined));

    await waitFor(() => expect(result.current.status).toBe("empty"));
  });

  it("surfaces the underlying error message when the fetch fails", async () => {
    mockedAxios.get.mockRejectedValueOnce(new Error("Network Error"));

    const { result } = renderHook(() => useStory(undefined));

    await waitFor(() => expect(result.current.status).toBe("error"));
    expect(result.current.error).toBe("Network Error");
  });

  it("re-resolves when the theme argument changes", () => {
    const { result, rerender } = renderHook(({ theme }) => useStory(theme), {
      initialProps: { theme: "halloween" as string | undefined },
    });

    expect(result.current.status).toBe("loaded");
    const halloweenFrames = result.current.frames;

    rerender({ theme: "christmas" });

    expect(result.current.status).toBe("loaded");
    expect(result.current.frames).not.toEqual(halloweenFrames);
  });
});
