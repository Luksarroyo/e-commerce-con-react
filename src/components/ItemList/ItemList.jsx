import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

import { Link } from "react-router-dom";

const ItemList = ({ items }) => {
  return (
    <div
      style={{
        display: "flex",
        border: "2px solid orange",
        justifyContent: "space-around",
        padding: "20px",
      }}
    >
      {items.map((item) => {
        return (
          <Card sx={{ Width: 345, height: 400 }} key={item.id}>
            <CardMedia
              sx={{ height: 100 }}
              image={item.img}
              title={item.title}
            />
            <CardContent>
              <Typography gutterBottom size="small" component="div">
                {item.title}
              </Typography>
              <Typography size="small" color="black">
                {item.description}
              </Typography>
              <Typography variant="body2" color="orange">
                $ {item.price}
              </Typography>
            </CardContent>
            <CardActions style={{ height: 50 }}>
              <Link to={'/ItemDetail/${item.id}'}>
                <Button variant="contained" size="small">
                  Comprar
                </Button>
              </Link>
            </CardActions>
          </Card>
        );
      })}
    </div>
  );
};

export default ItemList;



//dejo en 1:22