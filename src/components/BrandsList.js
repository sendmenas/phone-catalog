import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { PHONES } from "../utils/apiUrls";
import { getData } from "../utils/api";
import { ItemsList } from "./ItemsList";
import { Button } from "@material-ui/core";
import styled from "@emotion/styled";

const Title = styled.h1`
  margin-bottom: 40px;
`;

const Grid = styled.section`
  display: grid;
  grid-row-gap: 24px;
  justify-items: center; ;
`;

export const BrandsList = () => {
  const [phones, setPhones] = useState([]);

  useEffect(() => {
    getData(PHONES, setPhones);
  }, []);

  let { brand } = useParams();
  let itemList = phones.filter((item) => item.brand === brand);
  return (
    <Grid>
      <Title>Telephone Models</Title>
      <Link to="/phones">
        <Button variant="contained">Back To Brands</Button>
      </Link>
      <ItemsList items={itemList} />
    </Grid>
  );
};
