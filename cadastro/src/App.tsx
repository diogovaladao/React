import { BrowserRouter } from "react-router-dom";
import "./shared/forms/TraducoesYup";

import { AppThemeProvider, AppDrawerProvider, AuthProvider } from "./shared/contexts";
import { Login, MenuLateral } from "./shared/components";
import { AppRoutes } from "./routes/AppRoutes";



function App() {
  return (
    <AuthProvider>
      <AppThemeProvider>

        <Login>

          <AppDrawerProvider>
            <BrowserRouter>

              <MenuLateral>
                <AppRoutes />
              </MenuLateral>

            </BrowserRouter>
          </AppDrawerProvider>

        </Login>

      </AppThemeProvider>
    </AuthProvider >
  );
};

export default App;
