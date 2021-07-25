import styled from "styled-components";

export const Filling = styled.div`
  margin-bottom: 15px;
`;

const TabContainer = styled.div<{ size?: 'small' | 'medium' | 'big' | null; doughType?: 'traditional' | 'thin' | null }>`
  display: flex;
  user-select: none;
  justify-content: space-between;
  font-weight: 500;
  font-size: 12px;
  background-color: rgba(211, 196, 193, .2);
  align-items: center;
  border-radius: 20px;
  position: relative;
  height: 32px;

  &:before {
    transition: .4s;
    position: absolute;
    content: '';
    top: 2px;
    box-shadow: 1px 2px 8px 0 rgba(0, 0, 0, 0.2);
    height: calc(100% - 4px);
    background-color: rgba(255, 255, 255, .9);
    z-index: 1;
    border-radius: 20px;
  }

  button {
    background-color: transparent;
    position: relative;
    z-index: 2;
    text-align: center;
    cursor: pointer;
  }
`;


export const PizzaSizes = styled(TabContainer)`
  margin-bottom: 10px;
  &:before {
    width: 33%;
    left: ${props => props.size === 'small' ||  props.size === null ? '2px' : props.size === 'medium' ? '33.333%' : '66.666%'};
  }

  button {
    flex-basis: 33%;
  }
`;


export const PizzaDough = styled(TabContainer)`
  margin-bottom: 20px;
  &:before {
    width: 50%;
    left: ${props => props.doughType === 'traditional' || props.doughType === null ? '2px' : '50%'};
  }

  button {
    flex-basis: 50%;
  }
`;
