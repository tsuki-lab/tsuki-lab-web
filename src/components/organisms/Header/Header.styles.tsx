import { COLOR } from "@/styles/variables/color";
import { css } from "linaria";

export const header = css`
  display: flex;
  margin-top: 25px;
  padding-right: 40px;
  padding-left: 40px;
  justify-content: space-between;
  align-items: center;

  nav {
    margin-right: -40px;
  }
`

export const symbol = css`
  color: ${COLOR.__BASE};
  font-size: 5.28rem;
  font-weight: bold;
  margin-bottom: 0;
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
        font-size: 2.24rem;
        display: flex;
        align-items: center;
        justify-content: center;
        padding-right: 40px;
        padding-left: 40px;
      }
    }
  }
`