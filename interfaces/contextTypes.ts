import {Order} from "./checkoutTypes"
import { Dispatch, SetStateAction } from "react";

export type OrderContextType = {
    order: Order;
    setOrder: Dispatch<SetStateAction<Order>>;
    resetOrder: () => void,
  };
  