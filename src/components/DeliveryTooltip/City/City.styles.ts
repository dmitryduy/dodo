import styled from "styled-components";


interface CityContainerProps{
    letter: string;
}

export const CityContainer = styled.li<CityContainerProps>`
  position: relative;
  &:before {
    position: absolute;
    left: -40px;
    color: #ff6900;
    top: -2px;
    font-size: 20px;
    content: '${props => props.letter}';
  }
`;