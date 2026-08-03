The app consists of a set of frames that the user navigates through via buttons. Only one frame is visible to the user at a time, and the frame always fills the entire viewport. If the contents of a frame are taller than the height of viewport, the frame's height should increase past the fold to fit all of its content, and the user should be able to scroll the page to see the entire frame. If the frame's contents are shorter than the viewport height, the frame should be exactly as tall as the viewport.

Each frame follows a common template. The actual frames and their contents are populated from a `Story` (`{ frames: Frame[] }`, see `src/types/story.ts`), sourced one of two ways:

- **`/story`** — fetches `public/data/story.json` via AJAX on initialization.
- **`/story/:theme`** — loads a bundled theme (`halloween`, `christmas`, `easter`) from `src/component/directory/themes/`, no network request needed.

The homepage (`/`) lets the user pick a theme via a dropdown, or follow a link straight to the default `/story`.

## Stack

- [Vite](https://vitejs.dev/) + React 19 + TypeScript
- [react-router](https://reactrouter.com/) for client-side routing
- [Vitest](https://vitest.dev/) + React Testing Library for tests

## Commands

```bash
npm install
npm run dev       # dev server
npm run build     # type-check + production build to dist/
npm run preview   # preview the production build
npm test          # run the test suite
npm run deploy    # publish dist/ to the gh-pages branch
```
