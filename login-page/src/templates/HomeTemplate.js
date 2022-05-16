import { Box, Container } from "@mui/material";
import React from "react";
import { Outlet } from "react-router";
import Header from "../components/Header/Header";

export default function HomeTemplate() {
  return (
    <>
      <Header />
      <Container>
        <Box pt={3}>
          <Outlet />
        </Box>
      </Container>
    </>
  );
}
