import { css } from "@emotion/react";

export const contactForm = css`
  .row {
    display: flex;
    label {
      min-width: 12em;
    }
    .field-column {
      width: 100%;
      input {
        width: 100%;
      }
      textarea {
        width: 100%;
        min-height: 5em;
        max-height: 15em;
      }
    }
  }
`