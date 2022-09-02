import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes/AppRoutes";
import { MenuLateral } from "./shared/components";
import { AppThemeProvider, AppDrawerProvider } from "./shared/contexts";



function App() {
  return (
    <AppThemeProvider>
    <AppDrawerProvider>
      <BrowserRouter>

        <MenuLateral>
          <AppRoutes />
        </MenuLateral>

      </BrowserRouter>
      </AppDrawerProvider>
    </AppThemeProvider>
  );
};

export default App;
