import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../App";
import Shows from "../pages/Shows";

const AppRoutes: React.FC<{ children: React.ReactNode }> = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="shows" element={<Shows />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
