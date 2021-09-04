import React from 'react';
import * as styles from './Header.styles'
import { AnchorLink } from "gatsby-plugin-anchor-links";

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
    <header {...restProps} className={styles.header}>
      <Symbol>
        <AnchorLink to="/" className={styles.symbol}>
          tsuki lab
        </AnchorLink>
      </Symbol>

      <nav className={styles.navigation}>
        <ul>
          <li>
            <AnchorLink to="/#about">
              about
            </AnchorLink>
          </li>
          <li>
            <AnchorLink to="/activity/">
              activity
            </AnchorLink>
          </li>
          <li>
            <AnchorLink to="/#contact">
              contact
            </AnchorLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}