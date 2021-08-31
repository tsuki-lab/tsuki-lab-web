import { css } from "@emotion/react";

export const wrap = css`
`

export const container = css`
  max-width: 1200px;
  margin-right: auto;
  margin-left: auto;

  & > .inner {
    max-width: 980px;
    margin-left: auto;
    margin-right: auto;
    padding-left: 40px;
    padding-right: 40px;

    & > .container-title {
      font-size: 3.8rem;
      font-weight: normal;
      text-align: center;
    }
  }

`