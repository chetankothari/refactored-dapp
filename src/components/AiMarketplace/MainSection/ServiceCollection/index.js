import React from "react";

import ToolBar from "./ToolBar/index.js";
import CardGroup from "./CardGroup/index.js";
import StyledPagination from "./StyledPagination/index.js";

// Material UI imports
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
  serviceCollection: {
    paddingLeft: 25
  }
}));

function ServiceCollection({ data }) {
  const classes = useStyles();
  return (
    <div className={classes.serviceCollection}>
      <ToolBar />
      <CardGroup data={data} />
      <StyledPagination />
    </div>
  );
}

export default ServiceCollection;