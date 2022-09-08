import { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Dashboard, ListagemDePessoas } from "../pages";
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
        icon: 'people',
        label: 'Pessoas',
        path: '/pessoas',
      },
    ]);
  }, [setDrawerOptions /* se der erro tire esse parâmtro */]);

  return (
    <Routes>
      <Route path="/pagina-inicial" element={<Dashboard/>} />

      <Route path="/pessoas" element={<ListagemDePessoas/>} />
      <Route path="/pessoas/detalhe/:id" element={<p>Detalhe</p>} />

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