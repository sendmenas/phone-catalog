import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import { PhoneItem } from "./PhoneItem";
import { BRANDS } from "../utils/apiUrls";
import { getData } from "../utils/api";

const Title = styled.h1`
  text-align: center;
  margin-bottom: 64px;
`;

const StyledGrid = styled.section`
  display: grid;
  grid-gap: 40px 16px;
  grid-template-columns: repeat(3, 1fr);

  @media (max-width: 720px) {
    grid-template-columns: 1fr;
  }
`;

export const BrandsPage = () => {
  const [brands, setBrands] = useState({});

  useEffect(() => {
    getData(BRANDS, setBrands);
  }, []);

  return (
    <>
      <Title>Brands</Title>
      <StyledGrid>
        {brands.options &&
          brands.options.map(({ id, ...rest }) => (
            <Link to={`phones/${id}`} key={id}>
              <PhoneItem {...rest} />
            </Link>
          ))}
      </StyledGrid>
    </>
  );
};
