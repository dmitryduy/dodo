import styled from "styled-components";


export const Title = styled.h2`
    margin-bottom: 20px;
  font-size: 35px;
  font-weight: 300;
`;

export const MenuSectionContainer = styled.div`
display: flex;
  flex-wrap: wrap;
  margin: 0 -20px;
  @media (max-width: 600px) {
    margin: 0;
  }
`