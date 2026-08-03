import { useEffect, useState } from "react";
import axios from "axios";
import type { Frame, Story, ThemeName } from "../types/story";
import STORY_HALLOWEEN from "../component/directory/themes/halloween.data";
import STORY_CHRISTMAS from "../component/directory/themes/christmas.data";
import STORY_EASTER from "../component/directory/themes/easter.data";

const THEME_STORIES: Record<ThemeName, Story> = {
  halloween: STORY_HALLOWEEN,
  christmas: STORY_CHRISTMAS,
  easter: STORY_EASTER,
};

function isThemeName(value: string): value is ThemeName {
  return value in THEME_STORIES;
}

type StoryStatus = "loading" | "loaded" | "empty" | "error";

interface UseStoryResult {
  status: StoryStatus;
  frames: Frame[];
  error: string | null;
}

function initialState(theme?: string): UseStoryResult {
  if (theme === undefined) {
    return { status: "loading", frames: [], error: null };
  }
  return isThemeName(theme)
    ? { status: "loaded", frames: THEME_STORIES[theme].frames, error: null }
    : { status: "error", frames: [], error: `Unknown theme: ${theme}` };
}

export function useStory(theme?: string): UseStoryResult {
  const [state, setState] = useState<UseStoryResult>(() => initialState(theme));

  useEffect(() => {
    if (theme !== undefined) {
      setState(initialState(theme));
      return;
    }

    let cancelled = false;
    setState({ status: "loading", frames: [], error: null });

    axios
      .get<Story>(`${import.meta.env.BASE_URL}data/story.json`)
      .then((response) => {
        if (cancelled) return;
        const frames = response.data?.frames ?? [];
        setState(
          frames.length === 0
            ? { status: "empty", frames: [], error: null }
            : { status: "loaded", frames, error: null },
        );
      })
      .catch((error: unknown) => {
        if (cancelled) return;
        const message = error instanceof Error ? error.message : "Failed to load story";
        setState({ status: "error", frames: [], error: message });
      });

    return () => {
      cancelled = true;
    };
  }, [theme]);

  return state;
}
