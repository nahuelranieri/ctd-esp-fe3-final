import * as yup from "yup";

export const personalDataSchema = yup.object({
  name: yup.string().required("El nombre es requerido"),
  lastname: yup.string().required("El apellido es requerido"),
  email: yup
    .string()
    .email("Debe ser un email válido")
    .required("El campo es requerido"),
});

export const deliveryInfoSchema = yup.object({
  address: yup.string().required("El campo es requerido"),
  address2: yup.string(),
  city: yup.string().required("El campo es requerido"),
  province: yup.string().required("El campo es requerido"),
  zip: yup.string().required("El campo es requerido"),
});

// export const paymentSchema = yup.object({
//   number: yup.string().required("El campo es requerido").min(16, 'La longitud del número debe ser exactamente de 16 caracteres'),
//   name: yup.string().required("El campo es requerido"),
//   expiry: yup.string().required("El campo es requerido").min(4, 'La longitud del número debe ser exactamente de 4 caracteres'),
//   cvc: yup.string().required("El campo es requerido").min(3, 'La longitud del número debe ser exactamente de 3 caracteres'),
// });
export const paymentSchema = yup.object({
  number: yup
    .string()
    .required("El campo es requerido")
    .matches(/^(1234|5678|9012|3456)$/, "Número de tarjeta no válido"),
  name: yup.string().required("El campo es requerido"),
  expiry: yup
    .string()
    .required("El campo es requerido")
    .matches(/^12\/23$/, "Fecha de expiración no válida"),
  cvc: yup
    .string()
    .required("El campo es requerido")
    .matches(/^\d{3}$/, "CVC no válido, debe contener 3 dígitos"),
});
