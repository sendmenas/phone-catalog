import { PhoneItem } from "./PhoneItem";
import styled from "@emotion/styled";

const StyledGrid = styled.section`
  display: grid;
  grid-gap: 40px 16px;
  grid-template-columns: repeat(3, 1fr);

  @media (max-width: 720px) {
    grid-template-columns: 1fr;
  }
`;

export const ItemsList = ({ items = [], isLoading }) => {
  return (
    <StyledGrid>
      {items.map(({ imgUrl, ...rest }, i) => (
        <PhoneItem key={i + imgUrl} {...rest} displayImageUrl={imgUrl} />
      ))}
    </StyledGrid>
  );
};
