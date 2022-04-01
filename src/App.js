import { Route, Routes } from "react-router-dom";
import "./App.css";
import { NavBar } from "./components/NavBar/NavBar";
import { useTheme } from "./context/theme-context";
import { Home } from "./pages/Home/Home";
import { TaskPage } from "./pages/TaskPage/TaskPage";

function App() {
  const { isDark } = useTheme();
  return (
    <div className="App" data-theme={isDark && "dark"}>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tasks/:taskId" element={<TaskPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
