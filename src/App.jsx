import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./components/Home";
import ProjectDetail from "./components/ProjectDetail";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

const App = () => (
  <>
    <ScrollToTop />
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects/:slug" element={<ProjectDetail />} />
    </Routes>
    <Footer />
  </>
);

export default App;
