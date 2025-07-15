import "./App.css";
import NavMenu from "./components";
import menu from "./components/menu";

function App() {
  return (
    <>
      <NavMenu menus={menu} />
    </>
  );
}

export default App;
