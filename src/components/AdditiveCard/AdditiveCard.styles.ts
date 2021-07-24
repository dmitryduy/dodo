import styled, { css } from "styled-components";

export const AdditiveCardContainer = styled.div<{ selected: boolean, selectedImg: string, disabled: boolean }>`
  cursor: pointer;
  margin: 4px;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 7px 12px 20px 2px rgba(0, 0, 0, 0.1);
  border: 1px solid transparent;
  flex-basis: calc(33.333% - 8px);
  position: relative;
  transition: .2s;
  &:before {
    transition: .2s;
    right: 20px;
    position: absolute;
    width: 10px;
    height: 10px;
    opacity: ${props => props.selected && !props.disabled ? 1: 0};
    content: url(${props => props.selectedImg});
  }
  ${props =>  !props.disabled && props.selected && css`
    border: 1px solid rgb(255, 105, 0);
  `}
  ${props => props.disabled && css`
    opacity: .4;
    border: 1px solid rgb(226, 226, 233);
  `}
`;

export const Image = styled.img`
  width: 100%;
`;

export const Name = styled.h5`
  font-size: 12px;
  font-weight: 400;
  margin-bottom: 20px;
`;


export const Price = styled.p`
  text-align: center;
  font-size: 16px;
  font-weight: 500;
`;