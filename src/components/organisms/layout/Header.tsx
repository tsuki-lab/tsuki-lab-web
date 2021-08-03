import React from 'react';
import styled from "@emotion/styled"
import { STYLE_COLOR } from "@/styles/variables.style"
import { SimpleIcon } from '@/components/atoms/SimpleIcon';

const SiteTitle = styled.h1`
  color: ${STYLE_COLOR.__ACCENT};
  font-size: 3.3rem;
  margin-bottom: 0rem;
  height: 1.15em;
  text-decoration: underline;
  text-decoration-thickness: 2px;
  text-underline-offset: .3em;
  line-height: 0.9;
`

const Nav = styled.nav`
  ul {
    display: flex;
    height: inherit;
    li {
      height: inherit;
      a {
        height: inherit;
        text-decoration: none;
        color: ${STYLE_COLOR.__WHITE};
        background-color: ${STYLE_COLOR.__ACCENT};
        min-width: 9em;
        letter-spacing: .7px;
        font-size: 1.4rem;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: .1s;
        &:hover {
          /* background-color: ${STYLE_COLOR.__BASE}; */
          background-color: #353e44;
        }
      }
    }
  }
`

const SnsList = styled.ul`
  li {
    &:not(:last-of-type) {
      margin-bottom: 33px;
    }

    ${SimpleIcon} {
      width: 30px;
      fill: ${STYLE_COLOR.__WHITE};
    }
  }
`

type Element = JSX.IntrinsicElements['header'];
type Header = {};
type Props = Element & Header;

const Component: React.FC<Props> = ({children, ...props}) => {
  const { ...restReact } = props;
  return (
    <header {...restReact}>
      <SiteTitle>tsuki lab</SiteTitle>

      <SnsList>
        <li><a href="https://zenn.dev/rabbit" target="_blank"><SimpleIcon slug="zenn" /></a></li>
        <li><a href="https://github.com/tsuki-lab" target="_blank"><SimpleIcon slug="github" /></a></li>
        <li><a href="https://twitter.com/hanetsuki_dev" target="_blank"><SimpleIcon slug="twitter" /></a></li>
      </SnsList>

      <Nav>
        <ul>
          <li><a href="#about">about</a></li>
          <li><a href="#activity">activity</a></li>
          <li><a href="#contact">contact</a></li>
        </ul>
      </Nav>
    </header>
  )
}

export const Header = styled(Component)`
  padding-top: 1.5rem;
  z-index: 100;

  ${Nav} {
    position: absolute;
    right: 0;
    top: 0;
    height: 5rem;
  }

  ${SnsList} {
    position: fixed;
    right: 1.5rem;
    top: 0;
    bottom: 0;
    background-color: ${STYLE_COLOR.__MAIN};
    padding: calc(5rem + 2.8rem) 1.5rem 0;
  }
`