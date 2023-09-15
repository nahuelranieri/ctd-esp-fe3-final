export type OrderContextType = {
    order: Order;
    setOrder: Dispatch<SetStateAction<Order>>;
    resetOrder: () => void,
  };
  