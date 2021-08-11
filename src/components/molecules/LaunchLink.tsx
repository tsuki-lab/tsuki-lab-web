import React from 'react';
import LaunchIcon from '@material-ui/icons/Launch';
import styled from '@emotion/styled';

type Element = JSX.IntrinsicElements['a'];
type LaunchLink = {};
type Props = Element & LaunchLink;

export const Component : React.FC<Props> = ({children, ...props}) => {
  const { ...restReact } = props;
  return (
    <a {...restReact}>
      {children}<LaunchIcon />
    </a>
  )
}

export const LaunchLink = styled(Component)`
  text-decoration: none;
  font-size: 1.1rem;
  .MuiSvgIcon-root {
    margin-left: .2rem;
    font-size: inherit;
    vertical-align: bottom;
  }
`