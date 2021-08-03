import React from 'react';

type Element = JSX.IntrinsicElements['div'];
type ActivityContainer = {};
type Props = Element & ActivityContainer;

export const ActivityContainer: React.FC<Props> = ({children, ...props}) => {
  const { ...restReact } = props;
  return (
    <div {...restReact}>
      {children}
    </div>
  )
}