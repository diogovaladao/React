import { BrowserRouter } from "react-router-dom";
import "./shared/forms/TraducoesYup";

import { AppThemeProvider, AppDrawerProvider } from "./shared/contexts";
import { MenuLateral } from "./shared/components";
import { AppRoutes } from "./routes/AppRoutes";



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
