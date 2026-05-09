import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import FeaturedWorks from "./components/FeaturedWorks";
import Testimonials from "./components/Testimonials";
import About from "./components/About";
import ReadySection from "./components/ReadySection";

function App() {

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Hero />
              <Services />
              <FeaturedWorks />
              <Testimonials />
              <About />
              <ReadySection />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
