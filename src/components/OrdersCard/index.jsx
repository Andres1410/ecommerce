import { ChevronRightIcon } from "@heroicons/react/24/solid";
import { ShoppingBagIcon } from "@heroicons/react/24/solid";
import { CalendarDaysIcon } from "@heroicons/react/24/solid";

const OrdersCard = (props) => {
  const { totalPrice, totalProducts } = props;

  return (
    <div
      className="flex justify-between items-center border border-black p-4 
    rounded-lg w-80 mb-3">
      <div className="flex justify-between w-full">
        <p className="flex flex-col">
          <CalendarDaysIcon className=" h-6 w-6" />
          <span className="font-light">01.02.23</span>

          <br />

          <ShoppingBagIcon className=" h-6 w-6" />
          <span className="flex flex-col font-light">
            {totalProducts}
            Productos
          </span>
        </p>

        <p className="flex items-center gap-2">
          <span className="font-medium text-2xl w-full">
            ${totalPrice}
            <br />
            Cop
          </span>

          <ChevronRightIcon
            className="h-6 w-6 text-black cursor-pointer"
            onClick={() => context.closeCheckoutSideMenu()}></ChevronRightIcon>
        </p>
      </div>
    </div>
  );
};

export default OrdersCard;
