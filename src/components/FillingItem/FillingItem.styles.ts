import styled, { css } from "styled-components";

export const FillingItemContainer = styled.div<{ delete: boolean }>`
  display: inline-block;
  line-height: 25px;
  margin-right: 5px;
  font-family: Dodo, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";

  span {
    position: relative;
    font-weight: 400;
    font-size: 17px;
  }

  img {
    cursor: pointer;
    transform: translate(1px, 3px);
  }

  ${props => !props.delete ? css`
            span:after {
              content: '';
              bottom: -4px;
              left: 0;
              width: 100%;
              height: 1px;
              position: absolute;
              border-bottom: 1px dashed rgb(133, 133, 133);
            }`
          : css`
            span:after {
              content: '';
              top: 60%;
              left: 0;
              width: 100%;
              height: 1px;
              position: absolute;
              border-bottom: 1px solid #000;
            }
          `}

`;
