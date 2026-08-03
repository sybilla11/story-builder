import { BrowserRouter, Routes, Route } from "react-router";
import "./App.css";
import Homepage from "./pages/homepage/homepage.component";
import StoryBuilder from "./container/StoryBuilder";

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <div className="App">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/story" element={<StoryBuilder />} />
          <Route path="/story/:theme" element={<StoryBuilder />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
