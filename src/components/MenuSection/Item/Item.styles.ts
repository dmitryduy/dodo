import styled from "styled-components";

export const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0 0 calc(25% - 40px);
  margin: 20px;
  @media (max-width: 1000px) {
    flex-basis: calc(33.333% - 40px);
  }

  @media (max-width: 800px) {
    flex-basis: calc(50% - 40px);
  }

  @media (max-width: 600px) {
    flex-basis: 100%;
    margin: 0;
  }
 
`;

export const Image = styled.img`
  width: 100%; 
  transition: .3s;
  margin-bottom: 10px;
  &:hover{
    transform: translateY(-5px);
  }
`;

export const Content = styled.div`
flex: 1 0 auto;
`;

export const Title = styled.h4`
font-size: 25px;
  line-height: 35px;
  font-weight: 500;
  margin-bottom: 20px;
  @media (max-width: 1200px) {
    font-size: 22px;
  }
`;

export const Description = styled.p`
opacity: .7;
  font-size: 19px;
  font-weight: 300;
  margin-bottom: 20px;
  @media (max-width: 1200px) {
    font-size: 17px;
  }
`;

export const Footer = styled.div`
  display: flex;
  height: 50px;
  justify-content: space-between;
  align-items: center;
`;

export const Price = styled.span`
font-weight: 500;
  font-size: 25px;
  @media (max-width: 1200px) {
    font-size: 22px;
  }
`;