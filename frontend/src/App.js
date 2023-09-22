import "./App.css";
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
import LandingPage from "./screens/LandingPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyNotes from "./screens/MyNotes/MyNotes";
import LoginScreen from "./screens/LoginScreens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreens/RegisterScreen";

const App = () => (
  <BrowserRouter>
    <Header />
    <main>
      <Routes>
        <Route path="/" Component={LandingPage} />
        <Route path="/login" Component={LoginScreen} />
        <Route path="/register" Component={RegisterScreen} />
        <Route path="/mynotes" Component={MyNotes} />
      </Routes>
    </main>
    <Footer />
  </BrowserRouter>
);


export default App;
