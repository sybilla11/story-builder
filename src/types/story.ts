export interface StoryButton {
  text: string;
  linkindex: number;
}

export interface FrameColors {
  bg: string;
  text: string;
}

export interface Frame {
  title: string;
  body: string;
  img?: string;
  colors: FrameColors;
  buttons: StoryButton[];
}

export interface Story {
  frames: Frame[];
}

export type ThemeName = "halloween" | "christmas" | "easter";
