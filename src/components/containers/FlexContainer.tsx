import React, {FC} from "react";

import styled from "styled-components";

interface FlexProps {
    justify?: string;
    direction?: string;
    padding?: string;
    margin?: string;
    overflowX?: boolean;
    overflowY?: boolean;
    width?: string;
    height?: string;
}

const Flex = styled.div<FlexProps>`
  display: flex;
  
  justify-content: ${props => props.justify};
  flex-direction: ${props => props.direction};
  padding: ${props => props.padding || '0'};
  margin: ${props => props.margin || '0'};
  overflow-x: ${props => props.overflowX? 'hidden': 'visible'};
  overflow-y: ${props => props.overflowY? 'hidden': 'visible'};
  width: ${props => props.width || 'auto'};
  height: ${props => props.height|| 'auto'};
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


const FlexContainer: FC<FlexProps> = ({children, ...args}) => {
    return (
        <Flex {...args}>
            {children}
        </Flex>
    )
}

export default FlexContainer;