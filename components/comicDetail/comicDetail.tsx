import React from "react";
import { Comic } from "dh-marvel/interfaces/comicTypes";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import styles from "./comicDetail.module.css";
import Link from "next/link";
import useOrderContext from "context/context";

interface Props {
  comic: Comic;
}

const ComicDetails = ({ comic }: Props) => {

  const { setOrder } = useOrderContext();

  const handlePurchase = () => {
    setOrder((prevOrder) => {
      return { ...prevOrder, comic };
    });
  };

  return (
    <>
      <Box className={styles.comicDetailBox}>
        <Typography variant="body2" className={styles.isbnTag}>
          ISBN: {comic.isbn}
        </Typography>
        <Typography variant="h4">{comic.title}</Typography>
        <Typography variant="body1" className={styles.comicDescription}>
          {comic.description || "Sin descripción disponible."}
        </Typography>

        <Box className={styles.price}>
          {comic.oldPrice !== comic.price && (
            <Typography className={styles.oldPrice}>
              $ {comic.oldPrice.toFixed(2)}
            </Typography>
          )}

          <Box className={styles.mainTag}>
            <Typography variant="h5" className={styles.currentPrice}>
              $ {comic.price.toFixed(2)}
            </Typography>

            {comic.oldPrice !== comic.price && (
              <Typography variant="body2" className={styles.discount}>
                {((1 - comic.price / comic.oldPrice) * 100).toFixed(2)} % OFF
              </Typography>
            )}
          </Box>
          <Typography variant="body2">Stock: {comic.stock} un.</Typography>
        </Box>
        {comic.stock > 0 ? (
          <Link href={"/checkout"}>
            <Button variant="contained" onClick={handlePurchase}>
              Comprar
            </Button>
          </Link>
        ) : (
          <Button disabled>Sin stock disponible</Button>
        )}
      </Box>
    </>
  );
};

export default ComicDetails;