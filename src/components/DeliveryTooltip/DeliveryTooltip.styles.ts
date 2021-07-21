import styled from "styled-components";

export const Tooltip = styled.div`
  position: absolute;
  top: calc(100% + 24px);
  background-color: #373535;
  border-radius: 10px;
  padding: 10px;
  max-width: 500px;
  width: 200%;
  left: -50%;
  opacity: 0;
  visibility: hidden;
  transform: translateY(100px);
  transition: .3s;
  pointer-events: none;

  &.visible {
    transform: translateY(0);
    opacity: 1;
    visibility: visible;
  }

  &::after {
    content: '';
    position: absolute;
    width: 20px;
    height: 20px;
    background-color: inherit;
    top: 0;
    left: calc(50%);
    transform: translateX(-50%) rotateZ(45deg) translateY(-14px);

  }

  .note, .info {
    color: #9e9e9e;
    font-weight: 500;
  }

  .info {
    display: inline-block;
    margin-top: 10px;
  }
`;

export const DeliveryTime = styled.div`

  margin-right: 30px;

  span {
    display: block;
    margin-bottom: 5px;
  }

  .time {
    font-size: 25px;
    color: #f3f3f3;
  }

  .approximately-time {
    color: #f3f3f3;
  }
`;

export const Rating = styled.div`
  margin-right: 30px;

  span {
    display: block;
    margin-bottom: 5px;
  }

  .rate {
    font-size: 25px;
    color: #ffcc00;
  }

  .marks {
    color: #f3f3f3;
  }
`;