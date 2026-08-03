import { afterEach, describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter, Route, Routes } from "react-router";
import axios from "axios";
import StoryBuilder from "./StoryBuilder";
import type { Story } from "../types/story";

vi.mock("axios");
const mockedAxios = vi.mocked(axios, true);

function renderAt(path: string) {
  return render(
    <MemoryRouter initialEntries={[path]}>
      <Routes>
        <Route path="/story" element={<StoryBuilder />} />
        <Route path="/story/:theme" element={<StoryBuilder />} />
      </Routes>
    </MemoryRouter>,
  );
}

afterEach(() => {
  vi.resetAllMocks();
});

describe("StoryBuilder", () => {
  it("renders a bundled theme's first frame without fetching", async () => {
    renderAt("/story/christmas");

    expect(await screen.findByText("A CHRISTMAS EVE ADVENTURE")).toBeInTheDocument();
    expect(screen.getByText("1")).toBeInTheDocument();
    expect(mockedAxios.get).not.toHaveBeenCalled();
  });

  it("advances to the next frame and updates the link index when a button is clicked", async () => {
    const user = userEvent.setup();
    renderAt("/story/christmas");

    await screen.findByText("A CHRISTMAS EVE ADVENTURE");
    await user.click(screen.getByText("Begin"));

    expect(await screen.findByText("THE MISSING GIFT")).toBeInTheDocument();
    expect(screen.getByText("2")).toBeInTheDocument();
  });

  it("fetches data/story.json for the default route and renders it", async () => {
    const story: Story = {
      frames: [
        {
          title: "Default Story",
          body: "<p>hello</p>",
          colors: { bg: "#fff", text: "#000" },
          buttons: [],
        },
      ],
    };
    mockedAxios.get.mockResolvedValueOnce({ data: story });

    renderAt("/story");

    expect(await screen.findByText("DEFAULT STORY")).toBeInTheDocument();
    expect(mockedAxios.get).toHaveBeenCalledWith(expect.stringContaining("data/story.json"));
  });

  it("shows 'No Content' when the fetched story has no frames", async () => {
    mockedAxios.get.mockResolvedValueOnce({ data: { frames: [] } });

    renderAt("/story");

    expect(await screen.findByText("No Content")).toBeInTheDocument();
  });

  it("shows the underlying error message when the fetch fails", async () => {
    mockedAxios.get.mockRejectedValueOnce(new Error("Network Error"));

    renderAt("/story");

    expect(await screen.findByText("Error: Network Error")).toBeInTheDocument();
  });
});
