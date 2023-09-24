import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import useOrderContext from "context/context";
import ComicCard from "dh-marvel/components/comicCard/comicCard";
import styles from "./styles.module.css";
import { useRouter } from "next/router";
import { useEffect } from "react";
import CardContent from "@mui/material/CardContent";
import OrderConfirmed from "dh-marvel/components/orderOk/order";
import LayoutCheckout from "dh-marvel/components/layouts/layout-checkout";
import Head from "next/head";

const ConfirmPage = () => {
  const {
    order: { comic, buyer },
  } = useOrderContext();

  const router = useRouter();

  useEffect(() => {
    if (!comic || !buyer) {
      router.push("/");
    }
  }, [comic, buyer, router]);

  if (!comic || !buyer) return null;

  return (
    <LayoutCheckout>
      <Head>
        <title>Compra confirmada</title>
        <meta name="description" content="La orden ha sido creada con éxito" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box display={"flex"} justifyContent={"center"} width={1}>
        <OrderConfirmed comic={comic} buyer={buyer} />
      </Box>
    </LayoutCheckout>
  );
};

export default ConfirmPage;
