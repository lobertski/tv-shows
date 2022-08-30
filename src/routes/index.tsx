import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../App";
import { People, ShowResult, Shows } from "../pages/index";

const AppRoutes: React.FC<{ children: React.ReactNode }> = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="shows" element={<Shows />} />
        <Route path="people" element={<People />} />
        <Route path="shows/result" element={<ShowResult />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
