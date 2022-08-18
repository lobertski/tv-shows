import React, { useContext } from "react";
import { Context } from "./HomeAsideProvider";
import "./style.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { IShow } from "./types";

const HomeAsideView = () => {
  const { shows = [] } = useContext(Context);
  const current_date = new Date();
  const month = current_date.toLocaleString("default", { month: "long" });
  return (
    <aside>
      <h1>Schedule for {`${month} ${current_date.getDate()}`}</h1>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 500 }} size="small" aria-label="a dense table">
          {/* <TableHead>
            <TableRow>
              <TableCell align="center">20:00</TableCell>
            </TableRow>

            <TableRow>
              <TableCell align="center">21:00</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center">22:00</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center">23:00</TableCell>
            </TableRow>
          </TableHead> */}
          <TableBody>
            <TableRow>
              <TableCell align="center">20:00</TableCell>
            </TableRow>
            {shows[20].map((show: IShow) => (
              <TableRow
                key={show.show?.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {show.show?.name ?? ""}
                </TableCell>
              </TableRow>
            ))}

            <TableRow>
              <TableCell align="center">21:00</TableCell>
            </TableRow>
            {shows[21].map((show: IShow) => (
              <TableRow
                key={show.show?.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {show.show?.name ?? ""}
                </TableCell>
              </TableRow>
            ))}

            <TableRow>
              <TableCell align="center">22:00</TableCell>
            </TableRow>
            {shows[22].map((show: IShow) => (
              <TableRow
                key={show.show?.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {show.show?.name ?? ""}
                </TableCell>
              </TableRow>
            ))}

            <TableRow>
              <TableCell align="center">23:00</TableCell>
            </TableRow>
            {shows[23].map((show: IShow) => (
              <TableRow
                key={show.show?.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {show.show?.name ?? ""}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </aside>
  );
};

export default HomeAsideView;
