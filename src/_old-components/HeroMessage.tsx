import { STYLE_COLOR } from '@/styles/variables.style';
import styled from '@emotion/styled';
import React from 'react';

const HeroMessageTitle = styled.p`
  color: ${STYLE_COLOR.__ACCENT};
  font-size: 2.8rem;
  font-weight: 600;
  letter-spacing: 1.7px;
  line-height: 1.4em;
  text-transform: uppercase;
`

const HeroMessageBody = styled.p`
  font-size: 1.2rem;
  color: ${STYLE_COLOR.__ACCENT};
  line-height: 1.6;
  letter-spacing: .2px;
`

type Element = JSX.IntrinsicElements['div'];
type HeroMessage = {
  title: string;
  body: string;
};
type Props = Element & HeroMessage;

export const Component: React.FC<Props> = ({children, title, body, ...props}) => {
  const { ...restReact } = props;
  return (
    <div {...restReact}>
      <HeroMessageTitle>{ title }</HeroMessageTitle>
      <HeroMessageBody>{ body }</HeroMessageBody>
    </div>
  )
}

export const HeroMessage = styled(Component)`
  ${HeroMessageTitle} {
    margin-bottom: .6rem;
    margin-left: .25rem;
    width: 5em;
  }
  ${HeroMessageBody} {
    background: -webkit-linear-gradient(0deg, ${STYLE_COLOR.__WHITE} calc(250px - 6rem), #cbd0d2 0);
    background-clip: text;
    -webkit-text-fill-color: transparent;
    white-space: pre-line;
  }
`