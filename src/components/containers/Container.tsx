import React, {FC} from "react";

import styled from "styled-components";

const ContainerDiv = styled.div`
  padding: 0 30px;
  max-width: 1500px;
  margin: 0 auto;
  @media (max-width: 600px) {
   padding: 0 10px;
  }
`;

const Container: FC = ({children}) => {
    return (
        <ContainerDiv>{children}</ContainerDiv>
    )
}

export default Container;