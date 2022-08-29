import { ThemeProvider } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes/AppRoutes";
import { AppThemeProvider } from "./shared/contexts";
import { DarkTheme, LightTheme } from './shared/themes'

function App() {
  return (
    <ThemeProvider theme={LightTheme}>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

{/*<AppThemeProvider>
    </AppThemeProvider>*/}