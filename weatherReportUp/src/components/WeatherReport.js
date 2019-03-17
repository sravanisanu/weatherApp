import React from "react";
import {connect} from "react-redux";
import * as actions from "../store/actions";
import Card from "@material-ui/core/Card";
import CardHeaderRaw from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import {withStyles} from "@material-ui/core/styles";

const cardStyles = theme => ({
  root: {
    background: theme.palette.primary.main
  },
  title: {
    color: "white"
  }
});
const CardHeader = withStyles(cardStyles)(CardHeaderRaw);

const styles = {
  displayCard: {
    margin: "5% 25%",
    borderRadius: "12px",
    boxShadow: "1px 1px 4px steelblue"
  },
  weatherInfo: {
    margin: "20px 0"
  },
  weatherInfoItem: {
    width: "250px",
    display: "flex",
    margin: "auto"
  },
  label: {
    width: "50%",
    fontSize: "18px"
  }
};

class WeatherReport extends React.Component {
  componentDidMount() {
    setInterval(() => this.props.onLoad(), 4000);
  }
  render() {
    const {classes, metrics} = this.props;
    const weatherData = metrics.length ? metrics.find((o, i)=>i===metrics.length-1) : false;
    return (
      <Card className={classes.displayCard}>
        <CardHeader title="WeatherReport Visualization"/>
        <CardContent>
          {weatherData ? <div className={classes.weatherInfo}>
            <div className={classes.weatherInfoItem}>
              <span className={classes.label}>Temperature</span>
              <span>{weatherData.metric}</span>
            </div>
            <div className={classes.weatherInfoItem}>
              <span className={classes.label}>Latitude</span>
              <span>{weatherData.latitude}</span>
            </div>
            <div className={classes.weatherInfoItem}>
              <span className={classes.label}>Longitude</span>
              <span>{weatherData.longitude}</span>
            </div>
            <div className={classes.weatherInfoItem}>
              <span className={classes.label}>Last Received</span>
              <span>{Math.round((new Date().getTime()-weatherData.timestamp)/1000) + " seconds ago"}</span>
            </div>
          </div> : <h2>loading Details...</h2>}
        </CardContent>
      </Card>
    );
  }
};

const mapState = (state, ownProps) => {
  const {loading, metrics} = state.weather;
  return {loading, metrics};
};

const mapDispatch = dispatch => ({
  onLoad: () => dispatch({type: actions.GET_WEATHER, longitude: -95.3698, latitude: 29.7604})
});

export default connect(mapState, mapDispatch)(withStyles(styles)(WeatherReport));
