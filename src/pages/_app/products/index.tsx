import {createFileRoute} from "@tanstack/react-router";
import { ProductList } from "../../../components/ProductList";
import { products } from "../../../mocks/products";

export const Route = createFileRoute("/_app/products/")({
    component: RouteComponent,
    });

function RouteComponent() {
    return (
      <div className="container pt-44 md:pt-54 pb-10 md:px-10 text-black mb-10">
        <h1 className="text-center text-3xl mb-3">Lista de produtos</h1>

        <h2 className="text-center mb-10 p-4">
          Conforto especial para suas aventuras do did-a-dia
        </h2>

        <ProductList products={products} />
      </div>
    );
}