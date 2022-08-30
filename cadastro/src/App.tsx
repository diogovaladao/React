import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes/AppRoutes";
import { MenuLateral } from "./shared/components";
import { AppThemeProvider } from "./shared/contexts";


function App() {
  return (
    <AppThemeProvider>
      <BrowserRouter>

        <MenuLateral>
          <AppRoutes />
        </MenuLateral>

      </BrowserRouter>
    </AppThemeProvider>
  );
}

export default App;

{/*<AppThemeProvider>
    </AppThemeProvider>*/}

{/*<ThemeProvider theme=()>*/ }