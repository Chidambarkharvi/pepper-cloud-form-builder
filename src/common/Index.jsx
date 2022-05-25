import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Head from "./Header.jsx";
import FormBuilder from "../components/modules/form-builder";

const Index = () => {
  return (
    <>
      <main>
        <Routes>
          <Route path="/home" element={<Head />} />
          <Route path="/form" element={<FormBuilder />} />
          <Route path="" element={<Navigate to="/home" />} />
        </Routes>
      </main>
    </>
  );
};

export default Index;
