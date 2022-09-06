import { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Dashboard, ListagemDeCidade } from "../pages";
import { useDrawerContext } from "../shared/contexts";


export const AppRoutes = () => {

  const { setDrawerOptions } = useDrawerContext();

  useEffect(() => {
    setDrawerOptions([
      {
        icon: 'home',
        label: 'Página Inicial',
        path: '/pagina-inicial',
      },
      {
        icon: 'location_city',
        label: 'Cidades',
        path: '/cidades',
      },
    ]);
  }, [setDrawerOptions /* se der erro tire esse parâmtro */]);

  return (
    <Routes>
      <Route path="/pagina-inicial" element={<Dashboard/>} />

      <Route path="/cidades" element={<ListagemDeCidade/>} />
      {/*<Route path="/cidades/detalhe/:id" element={<Dashboard/>} />*/}

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