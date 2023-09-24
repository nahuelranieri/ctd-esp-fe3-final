import React, {ReactNode} from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { useRouter } from 'next/router';
import { Comic } from "dh-marvel/interfaces/types";

interface ComicCard {
  children?: ReactNode
}

type ComicCardProps = ComicCard & Comic;

const ComicCard: React.FC<ComicCardProps> = ({ children, id, thumbnail, title, description }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/comics/${id}`);
  };

  return (
    <Card sx={{ width: 345, height: 1, display: 'flex', flexDirection: 'column' }}>
      <CardMedia
        component="img"
        alt={`${title} thumbnail photo`}
        height="300"
        image={`${thumbnail.path}.${thumbnail.extension}`}
        sx={{ objectFit: 'contain', flex: 1 }}
      />
      {children}
    </Card>
  );
};

export default ComicCard;