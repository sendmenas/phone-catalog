import { Grid } from "@material-ui/core";

export const PhoneList = ({ items = [], isLoading }) => {
  return (
    <Grid container spacing={3}>
      {items.map(({ displayName, imgUrl }, i) => (
        <Grid item key={i + imgUrl} xs={4} justify="center">
          <img src={imgUrl} alt={displayName} />
          <p>{displayName}</p>
        </Grid>
      ))}
    </Grid>
  );
};
