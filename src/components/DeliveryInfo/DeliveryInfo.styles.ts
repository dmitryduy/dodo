import styled from "styled-components";

export const City = styled.div`
  font-weight: 500;
  font-size: 18px;
  margin-bottom: 5px;

  span {
    letter-spacing: 1px;
    margin-right: 10px;
  }

  a {
    opacity: .8;
    color: #ff6900;

    &:hover {
      opacity: 1;
    }
  }
  @media (max-width: 700px) {
    font-size: 15px;
  }
  @media (max-width: 650px) {
    a {
      display: block;
    }
  }
  @media (max-width: 350px) {
    font-size: 12px;
  }
`;

export const Info = styled.div`
  font-size: 14px;
  position: relative;
  .dot {
    display: inline-block;
    position: relative;
    width: 3px;
    height: 3px;
    margin: 0 5px;
    transform: translateY(-4px);
    border-radius: 50%;
    background-color: #000;
  }

  svg {
    margin-left: 5px;
    width: 13px;
    height: 13px;
    fill: #ffcc00;
  }
`;