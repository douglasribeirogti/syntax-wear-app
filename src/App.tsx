// Importa as funções necessárias para criar e prover o roteamento na aplicação
import { RouterProvider, createRouter } from "@tanstack/react-router";
// Importa a árvore de rotas gerada automaticamente pelo TanStack Router
import { routeTree } from "./routeTree.gen";

// Cria a instância do roteador configurada com a árvore de rotas
const router = createRouter({ routeTree });

// Registro do roteador no TypeScript para habilitar a verificação de tipos (Type Safety) em toda a aplicação
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

function App() {
  return <RouterProvider router={router} />;
}

export default App;

