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
  function createData(
    name: string,
    calories: number,
    fat: number,
    carbs: number,
    protein: number
  ) {
    return { name, calories, fat, carbs, protein };
  }

  const rows = [
    createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
    createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
    createData("Eclair", 262, 16.0, 24, 6.0),
    createData("Cupcake", 305, 3.7, 67, 4.3),
    createData("Gingerbread", 356, 16.0, 49, 3.9),
  ];
  return (
    <aside>
      <h1>Schedule for Aug 16</h1>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
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
          </TableHead>
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
                <TableCell align="right">{123}</TableCell>
                <TableCell align="right">{231}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </aside>
  );
};

export default HomeAsideView;
