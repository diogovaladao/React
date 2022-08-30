import { ThemeProvider } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes/AppRoutes";
import { MenuLateral } from "./shared/components";
import { AppThemeProvider } from "./shared/contexts";
import { LightTheme } from './shared/themes';


function App() {
  return (
    <AppThemeProvider>
      <BrowserRouter>
        
        <AppRoutes />
        
      </BrowserRouter>
    </AppThemeProvider>
  );
}

export default App;

{/*<AppThemeProvider>
    </AppThemeProvider>*/}

    {/*<ThemeProvider theme=()>*/}