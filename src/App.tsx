import { HashRouter, Routes, Route } from "react-router";
import "./App.css";
import Homepage from "./pages/homepage/homepage.component";
import StoryBuilder from "./container/StoryBuilder";

function App() {
  return (
    // GitHub Pages is a static host with no server-side rewrites, so a
    // BrowserRouter 404s on any direct/refreshed nested URL. HashRouter
    // keeps routing entirely client-side (the #fragment never reaches
    // the server), which works reliably with no extra hosting config.
    <HashRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/story" element={<StoryBuilder />} />
          <Route path="/story/:theme" element={<StoryBuilder />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
