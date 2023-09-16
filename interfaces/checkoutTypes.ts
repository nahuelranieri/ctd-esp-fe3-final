import { Comic } from "./comicTypes"

export type DeliveryInfo = {
    address: string;
    address2?: string;
    city: string;
    province: string;
    zip: string;
};

export type PaymentInfo = {
    number: string;
    name: string;
    expiry: string;
    cvc: string;
};

export type PersonalInfo = {
    name: string;
    lastname: string;
    email: string;
};

export type Error = {
    error: string;
    message: string;
};

export type Order = {
    comic?: Comic;
    buyer?: Buyer;
};

export type Buyer = {
    personalInfo?: PersonalInfo;
    deliveryInfo?: DeliveryInfo;
    paymentInfo?: PaymentInfo;
};

export type CheckoutInput = {
    customer: {
      name: string;
      lastname: string;
      email: string;
      address: {
        address1: string;
        address2: string | null;
        city: string;
        state: string;
        zipCode: string;
      };
    };
    card: {
      number: string;
      cvc: string;
      expDate: string;
      nameOnCard: string;
    };
    order: {
      name: string;
      image: string;
      price: number;
    };
  };

// export type OrderContextType = {
//     order: Order;
//     setOrder: Dispatch<SetStateAction<Order>>;
//     resetOrder: () => void;
// };

// export type Order = {
//     comic?: Comic;
//     buyer?: Buyer;
// };

// export type Buyer = {
//     personalInfo?: PersonalInfo;
//     deliveryInfo?: DeliveryInfo;
//     paymentInfo?: PaymentInfo;
//   };
