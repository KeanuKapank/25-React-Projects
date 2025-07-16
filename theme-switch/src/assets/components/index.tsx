import useLocalStorage from "./useLocalStorage";

const ThemeSwitch = () => {
  const [theme, setTheme] = useLocalStorage("theme", "dark");

  function HandleToggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  return (
    <div className="light-dark-mode" data-theme={theme}>
      <div className="container">
        <p>Hello World !</p>
        <button onClick={HandleToggleTheme}>Change Theme</button>
      </div>
    </div>
  );
};

export default ThemeSwitch;
