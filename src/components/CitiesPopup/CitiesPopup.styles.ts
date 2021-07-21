import styled from "styled-components";

export const Popup = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: rgba(0, 0, 0, .5);
  z-index: 10;
  transition: .2s;
  &.open {
   visibility: visible;
    opacity: 1;
  }
  &.close {
    visibility: hidden;
    opacity: 0;
  }
`;

export const PopupContent = styled.div`
  position: relative;
  background-color: #fff;
  width: 70vw;
  height: 80vh;
  margin: auto;
  border-radius: 30px;
  padding: 20px;
`;

export const CloseButton = styled.svg`
  position: absolute;
  right: -10px;
  transform: translateX(100%);
  top: 10px;
  cursor: pointer;

`;

export const Title = styled.div`
display: flex;
  align-items: center;
  margin-bottom: 30px;
`;

export const TitleText = styled.h2`
font-weight: 400;
  margin-left: 20px;
  font-size: 36px;
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
`;