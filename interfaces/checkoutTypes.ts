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
