import { Container } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Route } from "react-router-dom";
import NavComponent from "../components/NavbarComponent/NavComponent";

export default function HomeTemplate(props) {
  let { Component, path, title } = props;

  const renderComponent = (propsRoute) => {
    return <Component {...propsRoute} />;
  };
  return (
    <Route
      exact
      path={path}
      render={(propsRoute) => {
        return (
          <div>
            <NavComponent title={title} />
            <Box pt={10} pr={10}>
              <Container maxWidth="md">{renderComponent(propsRoute)}</Container>
            </Box>
          </div>
        );
      }}
    />
  );
}
