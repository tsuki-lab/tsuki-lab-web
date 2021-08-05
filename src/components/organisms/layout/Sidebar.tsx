import { SimpleIcon } from '@/components/atoms/SimpleIcon';
import React from 'react';
import styled from '@emotion/styled';
import { STYLE_COLOR } from '@/styles/variables.style';

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

type Element = JSX.IntrinsicElements['div'];
type Sidebar = {};
type Props = Element & Sidebar;

const Component: React.FC<Props> = ({children, ...props}) => {
  const { ...restReact } = props;
  return (
    <div {...restReact}>

      <SnsList>
        <li><a href="https://zenn.dev/rabbit" target="_blank"><SimpleIcon slug="zenn" /></a></li>
        <li><a href="https://github.com/tsuki-lab" target="_blank"><SimpleIcon slug="github" /></a></li>
        <li><a href="https://twitter.com/hanetsuki_dev" target="_blank"><SimpleIcon slug="twitter" /></a></li>
      </SnsList>
    </div>
  )
}

export const Sidebar = styled(Component)`
  background-color: ${STYLE_COLOR.__MAIN};

  ${SnsList} {
    padding: 2.8rem 1.5rem 0;
    position: sticky;
    top: 0
  }
`