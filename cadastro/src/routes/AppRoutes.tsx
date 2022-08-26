import { Button } from "@mui/material";
import { Navigate, Route, Routes } from "react-router-dom";


export const AppRoutes = () =>{
    return (
        <Routes>
            <Route path="/pagina-inicial" element={<Button>Teste</Button>}/>
            <Route path="*" element={<Navigate to="/pagina-inicial"/>}/>
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