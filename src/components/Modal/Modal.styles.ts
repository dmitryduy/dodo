import styled from "styled-components";

export const ProductContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, .5);
  z-index: 10;
  transition: .4s;
  &.hidden {
    opacity: 0;
    visibility: hidden;
  }
  &.visible {
    opacity: 1;
    visibility: visible;
  }
  overflow-y: auto;
  @media (max-width: 900px) {
    //background-color: transparent;
  }
`;

export const ProductContent = styled.div<{direction: 'column' | 'row', padding: string}>`
  display: flex;
  flex-direction: ${props => props.direction};
  padding: ${props => props.padding};
  background-color: #fff;
  max-height: 700px;
  border-radius: 20px;
  max-width: 1200px;
  width: 90%;
  position: relative;
  transition: .4s;
  &.hidden {
    opacity: 0;
    visibility: hidden;
    transform: scale(.9);
    @media (max-width: 900px) {
     
      transform: translateY(1000px);
      opacity: 1;
    }
  }
  &.visible {
    opacity: 1;
    visibility: visible;
    transform: scale(1);
    @media (max-width: 900px) {
      max-height: 100vh;
      transform: translateY(0);
      opacity: 1;
    }
  }
  @media (max-width: 900px) {
    width: 100%;
    height: 100%;
    border-radius: 0;
    flex-direction: column;
  }
`;

export const CloseButton = styled.svg`
  position: absolute;
  right: 0;
  transform: translateX(calc(100% + 10px));
  top: 10px;
  cursor: pointer;
  @media (max-width: 900px) {
    transform: translateX(-10px);
    path {
      fill: #000;
      opacity: .5;
    }
  }
  
`;