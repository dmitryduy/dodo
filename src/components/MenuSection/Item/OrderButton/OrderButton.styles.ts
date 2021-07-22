import styled from "styled-components";

export const Button = styled.button`
background-color: #e8cd98;
  color: rgb(209, 87, 0);
  padding: 7px 20px;
  border-radius: 20px;
  font-weight: 400;
  font-size: 18px;
  transition: .3s;
  &:hover {
    background-color: rgb(255, 210, 179);
  }
  &:disabled {
    background-color: rgb(226, 226, 233);
    color: rgb(171, 173, 186);
  }
  @media (max-width: 1200px) {
    padding: 7px 10px;
  }
`;