import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  Grid,
} from "@mui/material";
import React, { useContext } from "react";
import { Context } from "./PopularShowsProvider";
import IShows from "./types";

const PopularShowsView = () => {
  const { shows = [] } = useContext(Context);
  return (
    <section>
      <h1>Popular shows airing tonight</h1>
      <Grid container spacing={1} direction="row" alignItems="flex-start">
        {shows.map((value: IShows) => (
          <Grid item xs={1.4}>
            <Card sx={{ maxWidth: 250 }}>
              <CardMedia
                component="img"
                height="255"
                width="200"
                image={value?.image?.medium ?? ""}
                alt="picture"
              />
              <CardContent style={{ backgroundColor: "#1F4B47" }}>
                <Typography
                  gutterBottom
                  // variant="h6"
                  component="div"
                  align="center"
                  style={{ color: "white" }}
                >
                  {value.name}
                  
                </Typography>
                {/* <Typography variant="body2" color="text.secondary">
                  {value.summary}
                </Typography> */}
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
      <div>
        <Button variant="text">More Shows</Button>
      </div>
    </section>
  );
};

export default PopularShowsView;
