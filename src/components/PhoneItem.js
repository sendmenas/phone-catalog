import { Grid } from "@material-ui/core";
import styled from "@emotion/styled";

const Name = styled.p`
  margin: 0;
  text-align: center;
`;

const Price = styled.p`
  margin: 0;
  font-weight: bold;
  text-align: center;
`;

const Image = styled.img`
  width: 100%;
  max-height: 300px;
  object-fit: contain;
`;

export const PhoneItem = ({ displayImageUrl, displayName, price }) => (
  <Grid gap={2}>
    <Image src={displayImageUrl} alt={displayName} />
    {!!price && <Price>{price}</Price>}
    <Name>{displayName}</Name>
  </Grid>
);
