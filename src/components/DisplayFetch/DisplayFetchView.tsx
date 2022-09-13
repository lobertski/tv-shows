import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Grid,
  Pagination,
  Stack,
} from "@mui/material";
import React, { useState } from "react";
import IShows from "../Shows/types";
import { useNavigate } from "react-router-dom";
import "./style.css";

const DisplayFetchView: React.FC<any> = ({ data = [], title = "" }) => {
  const [pagination_value, setPagination] = useState({ start: 0, end: 25 });
  const navigate = useNavigate();
  const handlePagination = (index: number) => {
    return setPagination({
      start: (index - 1) * 25,
      end: 25 * index,
    });
  };
  return (
    <section className="section-container">
      <h1 className="section-title">{title}</h1>
      <Grid container spacing={0} direction="row" alignItems="flex-start">
        {data
          .slice(pagination_value.start, pagination_value.end)
          .map((value: IShows) => (
            <Grid item xs={2.4}>
              <Card sx={{ maxWidth: 250 }}>
                <CardMedia
                  component="img"
                  height="310"
                  width="160"
                  image={value?.image?.medium ?? ""}
                  alt="picture"
                  onClick={() =>
                    navigate("result", { state: { id: value.id } })
                  }
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
                <CardActions></CardActions>
              </Card>
            </Grid>
          ))}
      </Grid>
      <div className="pagination">
        <Stack spacing={2}>
          <Pagination
            count={10}
            variant="outlined"
            color="primary"
            onChange={(e: React.ChangeEvent<unknown>, index: number) =>
              handlePagination(index)
            }
          />
        </Stack>
      </div>
    </section>
  );
};

export default DisplayFetchView;
