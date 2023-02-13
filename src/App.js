import { ThemeProvider } from "styled-components";
import "./App.css";
import { Router } from "./router";
import { theme } from "./styles";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  );
}

export default App;
