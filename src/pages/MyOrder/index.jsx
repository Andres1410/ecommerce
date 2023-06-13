import { useContext } from "react";

import { Link } from "react-router-dom";

import { ChevronLeftIcon } from "@heroicons/react/24/solid";

import { ShoppingCartContext } from "../../Context";

import Layout from "../../components/Layout";

import OrderCard from "../../components/OrderCard";

import { totalPrice } from "../../utils";

//TrashIcon
import { TrashIcon } from "@heroicons/react/24/solid";

function MyOrder() {
  const context = useContext(ShoppingCartContext);
  const currentPath = window.location.pathname;

  //constante let:
  let index = currentPath.substring(currentPath.lastIndexOf("/") + 1);
  if (index === "last") index = context.order?.length - 1;

  //Revisar codigo
  const handleCheckout = (id) => {
    //Crear variable:
    const orderToAdd = {
      date: "01.02.23",
      products: context.cartProducts,
      // Toma el tamaño:
      totalProducts: context.cartProducts.length,
      totalPrice: totalPrice(context.cartProducts),
    };

    context.setOrder([...context.order, orderToAdd]);
    context.setCartProducts([]);
  };

  return (
    <Layout>
      <div
        className="flex items-center justify-center
       relative w-80 mb-6">
        <Link to="/my-orders" className="absolute  left-0">
          <ChevronLeftIcon className="h-6 w-6 text-black cursor-pointer" />
        </Link>
        <h1>Mi orden</h1>
      </div>
      <div className="flex flex-col w-80">
        {/* necesito ver esos productos con .map */}
        {context.order?.[index]?.products.map((product) => (
          <OrderCard
            key={product.id}
            id={product.id}
            title={product.title}
            imageUrl={product.images}
            price={product.price}
          />
        ))}
      </div>
      <div>
        <p
          className="flex justify-between
        items-center mb-2">
          <span className="font-light">Total:</span>
          <span className="font-medium text-2xl">
            ${totalPrice(context.cartProducts)}
          </span>
        </p>
        <Link to="/my-orders/last">
          {/* Funcion escuche cuando un usuario Haga click */}
          <TrashIcon
            className="py-3 text-red-600 w-
                      rounded-lg"
            onClick={() => handleCheckout()}
          />
        </Link>
        <button>Pagar</button>
      </div>
    </Layout>
  );
}

export default MyOrder;
