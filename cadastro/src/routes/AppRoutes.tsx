import { Button } from "@mui/material";
import { Navigate, Route, Routes } from "react-router-dom";
import { useAppThemeContext } from "../shared/contexts";


export const AppRoutes = () => {

  const { toggleTheme } = useAppThemeContext();
  return (
    <Routes>
      <Route path="/pagina-inicial" element={<Button variant="contained" color="primary"   onClick={toggleTheme}>TOOGLE THEME</Button>} />
      <Route path="*" element={<Navigate to="/pagina-inicial" />} />
    </Routes>
  );
}

/*function AppRoutes() {
  return (
    <Routes>
      <Route path="/pagina-inicial" element={<p>Página Inicial</p>} />
      <Route path="*" element={<Navigate to="/pagina-inicial" />} />
    </Routes>
  );
}

export default AppRoutes;*/