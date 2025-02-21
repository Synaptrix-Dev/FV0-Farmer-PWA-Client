import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import MainLayout from "./pages/MainLayout";
import HomeContainer from "./pages/home/HomeContainer";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<MainLayout />}>
        <Route index element={<HomeContainer />} />
      </Route>
    </Routes>
  );
}
export default App;
