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
import { Context } from "./UpcomingSeriesProvider";
import IShows from "./types";

const UpcomingSeriesView = () => {
  const { shows = [] } = useContext(Context);
  return (
    <section>
      <h1>Upcoming Season Premieres</h1>
      <Grid container spacing={1} direction="row" alignItems="flex-start">
        {shows.map((value: IShows) => (
          <Grid item xs={1.4}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="255"
                width="200"
                image={value.show?.image?.medium ?? ""}
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
                  {value?.show?.name ?? ""}
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
        <Button variant="text">Countdown</Button>
      </div>
    </section>
  );
};

export default UpcomingSeriesView;
