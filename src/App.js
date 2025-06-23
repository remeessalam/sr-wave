import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { routes } from "./constant";
import SpinnerContextProvider, {
  LoadingSpinnerContext,
} from "./components/SpinnerContext";
import { lazy, Suspense } from "react";
import { LoadingSpinner } from "./components/LoadingSpinner";
import ScrollToTop from "./components/ScrollToTop";
import WhatsAppIcon from "./components/WhatsAppIcon";
import { Toaster } from "react-hot-toast";
import MVPLandingPage from "./pages/MVPLandingPage";
import ChatBotLandingPage from "./pages/ChatBotLandingPage";
// import TawkMessengerReact from "@tawk.to/tawk-messenger-react";
const LandingPage = lazy(() => import("./pages/LandingPage"));
const ThankYou = lazy(() => import("./pages/ThankYou"));

AOS.init({
  once: true,
  duration: 1000,
  easing: "ease-in-out-quart",
  throttleDelay: 200,
});

function App() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <SpinnerContextProvider>
        <Router>
          {/* <TawkMessengerReact
            propertyId="6822e703470adc190e4b8904"
            widgetId="1ir45cq08"
          /> */}

          <LoadingSpinnerContext />
          <WhatsAppIcon />
          <ScrollToTop />
          <Toaster
            position="top-bottom"
            toastOptions={{
              style: {
                background: "#010C2A",
                color: "#ffffff",
              },
            }}
          />
          <Routes>
            {/* Website pages */}
            {routes.map((route) => (
              <Route path={route.path} element={route.element} />
            ))}

            <Route path="*" element={<Navigate to="/" />} />
            <Route path="/thank-you" element={<ThankYou />} />

            {/* Landing pages */}
            <Route
              path="/web-development"
              element={<LandingPage page={"web-development"} />}
            />
            <Route
              path="/app-development"
              element={<LandingPage page={"app-development"} />}
            />
            <Route path="/mvp-development" element={<MVPLandingPage />} />
            <Route
              path="/chatbot-development"
              element={<ChatBotLandingPage />}
            />
          </Routes>
        </Router>
      </SpinnerContextProvider>
    </Suspense>
  );
}

export default App;
