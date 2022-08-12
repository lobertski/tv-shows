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
import { Context } from "./SectionHomeProvider";
import IShows from "./types";

const SectionHomeView = () => {
  const { shows = [] } = useContext(Context);
  console.log(shows, "ASD");
  return (
    <section>
      <h1>Popular shows airing tonight</h1>
      <Grid container spacing={2} direction="row" alignItems="flex-start">
        {shows.map((value: IShows) => (
          <Grid item xs={2}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="255"
                width="200"
                image={value.image.medium}
                alt="picture"
              />
              <CardContent style={{ backgroundColor: "#1F4B47" }}>
                <Typography
                  gutterBottom
                  variant="h6"
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
    </section>
  );
};

export default SectionHomeView;
