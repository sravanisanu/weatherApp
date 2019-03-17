import React from "react";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  displayHeader: {
    flexGrow: 1,
  }
}; 

const WeatherHeader = props => {
  const { classes } = props;

  const name = "React Weather Report Assessment";
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h4" color="inherit" className={classes.displayHeader}>
          {name} 
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default withStyles(styles)(WeatherHeader);
