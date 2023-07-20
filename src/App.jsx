import ThreeDsTheme from "./ThreeDsTheme";
import EightBitsTheme from "./eightBitsTheme";
import { useState } from "react";
import ThemeButton from "./components/themeButton";

function App() {
  const [theme, setTheme] = useState("8bit");
  return (
    <>
      <ThemeButton setTheme={setTheme} theme={theme} />
      {theme == "8bit" ? <EightBitsTheme /> : <ThreeDsTheme />}
    </>
  );
}
export default App;
