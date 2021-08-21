import React from 'react';
import styled from "@emotion/styled"

type Element = JSX.IntrinsicElements['footer'];
type Footer = {};
type Props = Element & Footer;

const Component: React.FC<Props> = ({children, ...props}) => {
  const { ...restReact } = props;
  return (
    <footer {...restReact}>
    </footer>
  )
}

export const Footer = styled(Component)``