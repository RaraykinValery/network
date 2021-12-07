import "./App.css";
// import Footer from "./Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
// import Technologies from "./Technologies";

const App = () => {
    return (
        <div className="app-wrapper">
            <Header />
            <Navbar />
            <Profile />
        </div>
    );
};

export default App;
