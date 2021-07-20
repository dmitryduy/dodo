import React, {FC} from "react";

import styled from "styled-components";

interface FlexProps {
    justify?: string;
    direction?: string;
    padding?: string;
    margin?: string;
}

const Flex = styled.div<FlexProps>`
  display: flex;
  justify-content: ${props => props.justify};
  flex-direction: ${props => props.direction};
  padding: ${props => props.padding || '0'};
  margin: ${props => props.margin || '0'};
`;


const FlexContainer: FC<FlexProps> = ({children, justify, direction, padding, margin}) => {
    return (
        <Flex justify={justify} direction={direction} padding={padding} margin={margin}>
            {children}
        </Flex>
    )
}

export default FlexContainer;