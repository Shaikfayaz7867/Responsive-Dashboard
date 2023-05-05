import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import IPhone1313Pro1 from "./pages/IPhone1313Pro1";
import Activities from "./pages/Activities";
import Nav from "./pages/Nav";
import IPhone1313Pro2 from "./pages/IPhone1313Pro2";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/activities":
        title = "";
        metaDescription = "";
        break;
      case "/nav":
        title = "";
        metaDescription = "";
        break;
      case "/iphone-13-13-pro-2":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<IPhone1313Pro1 />} />
      <Route path="/activities" element={<Activities />} />
      <Route path="/nav" element={<Nav />} />
      <Route path="/iphone-13-13-pro-2" element={<IPhone1313Pro2 />} />
    </Routes>
  );
}
export default App;
