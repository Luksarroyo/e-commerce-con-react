import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

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
          <Card sx={{ Width: 345, height: 350 }} key={item.id}>
            <CardMedia
              sx={{ height: 150 }}
              image={item.img}
              title={item.title}
            />
            <CardContent>
              <Typography gutterBottom size="small" component="div">
                {item.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {item.description}
              </Typography>
              <Typography variant="body2" color="orange">
                {item.price}
              </Typography>
            </CardContent>
            <CardActions style={{ height: 200 }}>
              <Button variant="contained" size="small">
                Comprar
              </Button>
            </CardActions>
          </Card>
        );
      })}
    </div>
  );
};

export default ItemList;
