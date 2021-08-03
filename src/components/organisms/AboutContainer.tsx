import React from 'react';

type Element = JSX.IntrinsicElements['div'];
type AboutContainer = {};
type Props = Element & AboutContainer;

export const AboutContainer: React.FC<Props> = ({children, ...props}) => {
  const { ...restReact } = props;
  return (
    <div {...restReact}>
      {children}
    </div>
  )
}