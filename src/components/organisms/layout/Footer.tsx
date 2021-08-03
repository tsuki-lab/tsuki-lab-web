import React from 'react';

type Element = JSX.IntrinsicElements['div'];
type Footer = {};
type Props = Element & Footer;

export const Footer: React.FC<Props> = ({children, ...props}) => {
  const { ...restReact } = props;
  return (
    <div {...restReact}>
      {children}
    </div>
  )
}