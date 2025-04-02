import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import WithoutAutoLayout from "./pages/without-auto-layout";
import ShapeWithGroup1 from "./pages/shape-with-group1";
import ShapeWithGroup from "./pages/shape-with-group";
import WithoutGroup from "./pages/without-group";

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
      case "/shape-with-group":
        title = "";
        metaDescription = "";
        break;
      case "/shape-with-group1":
        title = "";
        metaDescription = "";
        break;
      case "/without-group":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<WithoutAutoLayout />} />
      <Route path="/shape-with-group" element={<ShapeWithGroup1 />} />
      <Route path="/shape-with-group1" element={<ShapeWithGroup />} />
      <Route path="/without-group" element={<WithoutGroup />} />
    </Routes>
  );
}
export default App;
