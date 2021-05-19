import { Grid } from "@material-ui/core";
import { Link } from "react-router-dom";

export const BrandList = ({ items = [], isLoading }) => {
  return (
    <Grid container spacing={3}>
      {items.map(({ displayImageUrl, displayName, id }) => (
        <Link to={`phones/${id}`}>
          <Grid item key={id} xs={4} justify="center">
            <img src={displayImageUrl} alt={displayName} />
            <p>{displayName}</p>
          </Grid>
        </Link>
      ))}
    </Grid>
  );
};
