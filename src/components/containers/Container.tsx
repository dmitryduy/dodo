import React, {FC} from "react";

import styled from "styled-components";

const ContainerDiv = styled.div`
  padding: 0 30px;
  max-width: 1920px;
  margin: 0 auto;
`;

const Container: FC = ({children}) => {
    return (
        <ContainerDiv>{children}</ContainerDiv>
    )
}

export default Container;