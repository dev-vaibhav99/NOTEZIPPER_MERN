import "./App.css";
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
import LandingPage from "./screens/LandingPage";
const App = () => (
  <>
    <Header />
    <main>
      <LandingPage />
    </main>
    <Footer />
  </>
);


export default App;
