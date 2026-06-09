// Importa as funções necessárias para criar e prover o roteamento na aplicação
import { RouterProvider, createRouter } from "@tanstack/react-router";
// Importa a árvore de rotas gerada automaticamente pelo TanStack Router
import { routeTree } from "./routeTree.gen";
import { CartProvider } from "./components/contexts/CartProvider";


// Cria a instância do roteador configurada com a árvore de rotas
const router = createRouter({ routeTree });

// Registro do roteador no TypeScript para habilitar a verificação de tipos (Type Safety) em toda a aplicação
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

function App() {
  return (
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider> 
  );
}

export default App;

