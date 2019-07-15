import React from "react";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/styles";
import StarRatingComponent from "react-star-rating-component";

import { useStyles } from "./styles";

const TitleCard = ({ classes, org_id, display_name, star_rating, api_calls }) => {
  return (
    <Grid item xs={12} sm={12} md={8} lg={8} className={classes.computerVisionContainer}>
      <div>
        <img src="http://placehold.it/229x129" alt="service" />
      </div>
      <div className={classes.computerVisionContent}>
        <span>{org_id}</span>
        <h2>{display_name}</h2>
        <div>
          <StarRatingComponent name="rate1" starCount={0} value={star_rating} className={classes.ratingStars} />
          <span className={classes.ratedCount}>{star_rating}</span>
        </div>
      </div>
    </Grid>
  );
};

export default withStyles(useStyles)(TitleCard);