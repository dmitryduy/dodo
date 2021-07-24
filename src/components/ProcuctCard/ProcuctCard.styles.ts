import styled from "styled-components";

export const ProductContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;  
  position: absolute;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, .5);
  z-index: 10;
`;

export const ProductContent = styled.div`
  display: flex;
  background-color: #fff;
  max-height: 700px;
  border-radius: 20px;
  max-width: 1200px;
  width: 90%;
  position: relative;
`;

export const CloseButton = styled.svg`
  position: absolute;
  right: 0;
  transform: translateX(calc(100% + 10px));
  top: 10px;
  cursor: pointer;
`;

export const Image = styled.div<{size: 'small' | 'medium' | 'big' | null}>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 100px 50px;
  flex-basis: 60%;
img {
  transition: .2s;
  transform: scale(${props=> props.size === 'small' || null ? '1': props.size === 'medium'? '1.2': '1.4'});
 max-width: 450px;
  max-height: 450px;
}
`;

export const LeftSidebarContainer = styled.div`
  background-color: #fcfcfc;
  padding: 30px 5px 30px 30px;
  border-radius: 0 20px 20px 0;
  display: flex;
  flex-basis: 40%;
  flex-direction: column;
`;

export const ProductInfo = styled.div`
  flex: 1 0 auto;
  height: 90%;
  overflow-y: auto;
  overflow-x: hidden;
  margin-bottom: 20px;
  padding-right: 20px;
  &::-webkit-scrollbar {
    background-color: transparent;
    width: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: red;
    min-height: 50px;
    background-color: rgba(57, 57, 57, 0.3);
    border-radius: 4px;
  }
`;

export const ProductName = styled.h3`
  margin-bottom: 10px;
font-weight: 400;
  font-size: 25px;
`;

export const ProductDescription = styled.p`
margin-bottom: 10px;
  color: #737375;
`;

export const AddToCartButton = styled.button`
    background-color: rgba(255,105,0, .9);
  color: #fff;
  border-radius: 20px;
  padding: 10px 0;
  font-size: 20px;
  transition: .3s;
  cursor: pointer;
  &:hover {
    background-color: rgba(255,105,0, 1);
  }
`;