import { Search } from "@mui/icons-material";
import { InputAdornment, TextField } from "@mui/material";
import { Link } from "react-router-dom";
import React, { useContext } from "react";
import { Context } from "./HeaderProvider";

import "./style.css";

const HeaderView = () => {
  // const { onClick = () => {} } = useContext(Context);

  return (
    <header>
      <div className="container-header">
        <div className="container-logo">
          <Link to="/">
            <img
              className="img-logo"
              src="https://static.tvmaze.com/images/tvm-header-logo.png"
              alt="logo"
            />
          </Link>

          <TextField
            placeholder="Search Shows and People"
            sx={{ marginLeft: 4 }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search />
                </InputAdornment>
              ),
            }}
          />
        </div>
      </div>
    </header>
  );
};

export default HeaderView;
