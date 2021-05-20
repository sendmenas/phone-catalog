import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import styled from "@emotion/styled";

const Grid = styled.section`
  display: grid;
  justify-items: center;
  grid-gap: 24px;
`;

export const ErrorPage = ({ message }) => (
  <Grid>
    <h1>Something went wrong</h1>
    <Link to="/">
      <Button variant="contained">Back to Homepage</Button>
    </Link>
  </Grid>
);
