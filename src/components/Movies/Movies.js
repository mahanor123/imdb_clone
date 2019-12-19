import React from "react";
import faker from "faker";
import "./Movies.css";
import StarRatingComponent from "react-star-rating-component";
import { connect } from "react-redux";

import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Redirect } from "react-router-dom";

const styles = (theme) => ({
  card: {
    display: "flex",
    width: "400px",
    height: "200px"
  },
  details: {
    display: "flex",
    flexDirection: "column",
    alignContent: "flex-end"
  },
  content: {
    flex: "1 0"
  },
  cover: {
    width: "151px"
  }
});

const movies = [];
for (let i = 0; i < 50; i++) {
  movies.push({
    id: i,
    image: faker.image.image(150, 200, true),
    movie: faker.lorem.word(),
    year: faker.random.number({ min: 1990, max: 2020 }),
    price: faker.random.number({ min: 150, max: 300 }),
    description: faker.lorem.sentence(),
    director: faker.name.findName(),
    rate: 0
  });
}


class Movies extends React.Component {
  state = {
    movies: movies,
    redirect: false
  };
  onStarClick = (index, value) => {
    const { user } = this.props;
    if (user) {
      const { movies } = this.state;
      movies[index].rate = value;
      this.setState({ movies });
    } else {
      this.setState({
        redirect: true
      });
    }
  };
  render() {
    const { classes, theme, user } = this.props;
    const { redirect } = this.state;
    if (redirect) {
      return (
        <Redirect to={{ pathname: "/signin", state: { from: "/movies" } }} />
      );
    }
    return (
      <React.Fragment>
        <h2>List of movies</h2>
        <div className="movies">
          {movies.map((c, index) => {
            console.log(this.state);
            return (
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cover}
                  image={c.image}
                  title={c.movie + c.year}
                />
                <div className={classes.details}>
                  <CardContent>
                    <Typography component="h6" variant="h6">
                      {c.movie}({c.year})
                    </Typography>
                    <Typography>Price:Rs.{c.price}/-</Typography>
                    <Typography>Rating:</Typography>
                    <StarRatingComponent
                      name="rate1"
                      starCount={5}
                      value={c.rate}
                      onStarClick={(value) => this.onStarClick(index, value)}
                      style={{ position: "absolute" }}
                    />
                    {c.rate ? <sup> {c.rate}/5</sup> : ""}
                    <Typography
                      variant="subtitle1"
                      color="textSecondary"
                      style={{ fontSize: "12px" }}
                    >
                      {c.description}
                    </Typography>
                    <p style={{ fontSize: "12px" }}>Director: {c.director}</p>
                  </CardContent>
                </div>
              </Card>
            );
          })}
        </div>
      </React.Fragment>
    );
  }
}

Movies.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

const mapStateToProps = (state) => {
  return {
    user: state.user
  };
};

const MovieComp = withStyles(styles, { withTheme: true })(Movies);

export default connect(mapStateToProps)(MovieComp);
