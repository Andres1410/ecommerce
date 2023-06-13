import { useContext } from "react";
import { Link } from "react-router-dom";

import { XMarkIcon } from "@heroicons/react/24/solid";
import { ShoppingCartContext } from "../../Context";
import OrderCard from "../../components/OrderCard";
import { totalPrice } from "../../utils";

import "./styles.css";

const CheckoutSideMenu = (id) => {
  const context = useContext(ShoppingCartContext);

  //Funcion para eliminar producto:
  const handleDelete = (id) => {
    const filteredProducts = context.cartProducts.filter(
      (product) => product.id != id
    );
    context.setCartProducts(filteredProducts);
    context.setCount(context.count - 1);
  };

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
    context.setSearchByTitle(null);
  };

  return (
    <aside
      className={`${
        context.isCheckoutSideMenuOpen ? "flex" : "hidden"
      } checkout-side-menu flex-col fixed right-0 border border-black rounded-lg bg-white`}>
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">My Order</h2>
        <div>
          <XMarkIcon
            className="h-6 w-6 text-black cursor-pointer"
            onClick={() => context.closeCheckoutSideMenu()}></XMarkIcon>
        </div>
      </div>
      {/* Quiero un contenedor completo para todos los productos agregados al 
      carro de compras: */}
      <div className="px-6 overflow-y-scroll flex-1">
        {context.cartProducts.map((product) => (
          // Retonar html con ( parentesis)
          <OrderCard
            key={product.id}
            id={product.id}
            title={product.title}
            imageUrl={product.images}
            price={product.price}
            handleDelete={handleDelete}
          />
        ))}
      </div>
      <div className="px-6 mb-6">
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
          <button
            className="bg-[#6b7280] py-3 text-white w-full
                      rounded-lg"
            onClick={() => handleCheckout()}>
            Checkout
          </button>
        </Link>
      </div>
    </aside>
  );
};

export default CheckoutSideMenu;
