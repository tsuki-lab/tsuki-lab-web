import { COLOR } from "@/constants/styles";
import { css } from "@emotion/react";

export const header = css`
  display: flex;
  padding-top: 1.5rem;
  padding-right: 3rem;
  padding-left: 3rem;
  justify-content: space-between;
  align-items: center;

  nav {
    margin-right: -3rem;
  }
`

export const symbol = css`
  color: ${COLOR.__BASE};
  font-size: 3.3rem;
  font-weight: bold;
  margin-bottom: 0rem;
  height: 1.15em;
  text-decoration: underline;
  text-decoration-thickness: 2px;
  text-underline-offset: .3em;
  line-height: 0.9;
  display: inline-block;
`

export const navigation = css`
  ul {
    display: flex;
    height: inherit;
    li {
      height: inherit;
      a {
        color: ${COLOR.__BASE};
        height: inherit;
        text-decoration: none;
        min-width: 8em;
        letter-spacing: .7px;
        font-size: 1.4rem;
        display: flex;
        align-items: center;
        justify-content: center;
        padding-right: 3rem;
        padding-left: 3rem;
      }
    }
  }
`