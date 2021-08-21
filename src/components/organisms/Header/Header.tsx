import React from 'react';
import * as styles from './Header.styles'

type Element = JSX.IntrinsicElements['header'];
type Header = {
  root: boolean
};
type Props = Element & Header;

export const Header: React.FC<Props> = ({children, ...props}) => {
  const {
    root,
    ...restProps
  } = props;

  const Symbol = root ? 'h1' : 'div'

  return (
    <header {...restProps} css={styles.header}>
      <Symbol css={styles.symbol}>tsuki lab</Symbol>

      <nav css={styles.navigation}>
        <ul>
          <li><a href="#about">about</a></li>
          <li><a href="#activity">activity</a></li>
          <li><a href="#contact">contact</a></li>
        </ul>
      </nav>
    </header>
  )
}