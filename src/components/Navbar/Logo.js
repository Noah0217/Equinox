/** @jsx jsx */
import { jsx, css } from "@emotion/core";

const Logo = () => (
  <h2 css={styles}>
    EQUINOX <span>TRAINING</span>
  </h2>
);

const styles = css`
  color: #000000;
  font-size: 30px;
  font-weight: 900;
  line-height: 1;
  cursor: pointer;
  span {
    color: #fff;
  }
`;

export default Logo;
