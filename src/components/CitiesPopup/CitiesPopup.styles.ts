import styled from "styled-components";

export const Title = styled.div`
display: flex;
  align-items: center;
  margin-bottom: 30px;
`;

export const TitleText = styled.h2`
font-weight: 400;
  margin-left: 20px;
  font-size: 36px;
  @media (max-width: 600px) {
    font-size: 30px;
  }
  @media (max-width: 500px) {
    font-size: 20px;
    margin-left: 5px;
  }
  @media (max-width: 380px) {
    font-size: 17px;
  }
`;

export const Search = styled.input`
  border: 1px solid rgba(92, 99, 112, 0.32);
  padding: 10px;
  outline: none;
  border-radius: 5px;
  width: 350px;
  font-size: 16px;
  transition: .2s;
  margin-bottom: 20px;
  &:focus {
    border: 1px solid #ff6900 ;
  }
  @media (max-width: 420px) {
    width: 280px;
  } 
`;

export const MainCities = styled.ul`
display: flex;
  margin-left: -10px;
  font-size: 25px;
  margin-bottom: 30px;
  li {
    margin: 0 10px;
    cursor: pointer;
    &:hover {
      color: #ff6900;
    }
  }
  @media (max-width: 500px) {
    font-size: 20px;
  }
`;