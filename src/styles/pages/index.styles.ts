import { css, cx } from "linaria";
import { container } from "../common/container.style";

export const heroContainerWrap = css`
  position: relative;

  .bg-image {
    position: absolute;
    left: 0;
    right: 0;
    height: 100%;
  }
`

export const heroContainer = cx(css`
position: relative;
height: 600px;
margin-top: 20px;

.inner {
  display: flex;
  align-items: center;
  height: 100%;
}

.message-container {
  filter: drop-shadow(0 0 .2em #000);
  color: white;
  margin-bottom: 20px;
  letter-spacing: 1px;

  .title {
    font-size: 5rem;
    font-weight: bold;
    text-transform: uppercase;
  }

  .body {
    font-size: 1.8rem;
    margin-top: 12px;
  }
}
`, container)

export const aboutContainer = cx(css`
  margin-top: 130px;

  .author-container {
    display: flex;
    gap: min(100px, max(calc(100vw - 1200px + 100px), 50px));
    margin-top: 80px;

    .author-image {
      width: min(250px, max(calc(100vw - 1200px + 250px), 200px));
      height: min(250px, max(calc(100vw - 1200px + 250px), 200px));
      flex-shrink: 0;
      flex-grow: 1;
      filter: drop-shadow(11px 9px .2px #77777790);
      border: solid 1px #777;
    }

    .author-info {}

    .author-name-wrap {
      display: flex;
      font-size: 2rem;
      margin-top: 30px;

      & > p {
        display: inline-block;
        line-height: 1em;
        &:not(:last-of-type)::after {
          content: "/";
          padding-left: .2em;
        }
      }
    }

    .author-message {
      font-size: 15px;
      margin-top: 30px;
      font-feature-settings: "palt";
      letter-spacing: .02em;
      white-space: pre-wrap;
    }

    .author-sns {
      display: flex;
      list-style: none;
      margin-top: 10px;
      li {
        &:not(:last-of-type) {
          margin-right: 15px;
        }
      }
    }
  }

  .skill-list {
    display: flex;
    list-style: none;
    li {
      &:not(:last-of-type) {
        &::after {
          content: "/";
        }
      }
    }
  }
`, container)

export const contactContainer = cx(css`

`, container)