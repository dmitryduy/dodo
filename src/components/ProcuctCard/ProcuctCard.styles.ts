import styled from "styled-components";




export const Image = styled.div<{ size: 'small' | 'medium' | 'big' | null }>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 100px 50px;
  background-color: #fff;
  flex-basis: 60%;
  img {
    transition: .2s;
    transform: scale(${props => props.size === 'small' || null ? '1' : props.size === 'medium' ? '1.2' : '1.4'});
    max-width: 450px;
    max-height: 450px;
  }
@media (max-width: 900px) {
  flex-basis: 50%;
}
  @media (max-width: 600px) {
    img {
      width: 300px;
    }
  }
  @media (max-width: 420px) {
    img {
      width: 250px;
    }
  }
  @media (max-width: 350px) {
    img {
      width: 200px;
    }
  }
`;

export const LeftSidebarContainer = styled.div`
  background-color: #fcfcfc;
  padding: 30px 5px 30px 30px;
  border-radius: 0 20px 20px 0;
  display: flex;
  flex-basis: 40%;
  flex-direction: column;
  @media (max-width: 900px) {
    flex-basis: 50%;
    padding-top: 0;
  }
`;

export const ProductInfo = styled.div`
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
  @media (max-width: 900px) {
    height: 75vh;
  }
  @media (max-width: 700px) {
    height: 85vh;
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
  background-color: rgba(255, 105, 0, .9);
  color: #fff;
  border-radius: 20px;
  padding: 15px 0;
  margin-right: 20px;
  font-size: 20px;
  transition: .3s;
  cursor: pointer;

  &:hover {
    background-color: rgba(255, 105, 0, 1);
  }
  @media (max-width: 900px) { 
    width: 50%;
    margin: 0 auto;
  }
  @media (max-width: 700px) {
    width: 70%;
  }
  @media (max-width: 600px) {
    width: 90%;
  }
`;