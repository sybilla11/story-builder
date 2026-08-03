import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter, Route, Routes, useParams } from "react-router";
import Homepage from "./homepage.component";

function ThemeParamProbe() {
  const { theme } = useParams<{ theme: string }>();
  return <div>THEME_PARAM:{theme}</div>;
}

function renderHomepage() {
  return render(
    <MemoryRouter initialEntries={["/"]}>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/story" element={<div>DEFAULT_STORY_ROUTE</div>} />
        <Route path="/story/:theme" element={<ThemeParamProbe />} />
      </Routes>
    </MemoryRouter>,
  );
}

describe("Homepage", () => {
  it("renders the title, a card for each theme, and a link to the default story", () => {
    renderHomepage();

    expect(screen.getByText("Story Builder")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /halloween/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /christmas/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /easter/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /or view the default story/i })).toBeInTheDocument();
  });

  it("navigates to /story/:theme when a theme card is clicked", async () => {
    const user = userEvent.setup();
    renderHomepage();

    await user.click(screen.getByRole("button", { name: /christmas/i }));

    expect(await screen.findByText("THEME_PARAM:christmas")).toBeInTheDocument();
  });

  it("navigates to /story when the default story link is clicked", async () => {
    const user = userEvent.setup();
    renderHomepage();

    await user.click(screen.getByRole("link", { name: /or view the default story/i }));

    expect(await screen.findByText("DEFAULT_STORY_ROUTE")).toBeInTheDocument();
  });
});
