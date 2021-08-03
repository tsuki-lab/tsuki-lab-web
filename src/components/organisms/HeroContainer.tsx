import { STYLE_COLOR } from '@/styles/variables.style';
import styled from '@emotion/styled';
import React from 'react';
import { Container, Inner, Wrapper } from '../atoms/Container';
import { CoffeeSymbol } from '../molecules/CoffeeSymbol';
import { HeroMessage } from '../molecules/HeroMessage';

type Element = JSX.IntrinsicElements['div'];
type HeroContainer = {};
type Props = Element & HeroContainer;

const Component: React.FC<Props> = ({children, ...props}) => {
  const { ...restReact } = props;
  return (
    <Wrapper {...restReact}>
      <Container>
        <Inner>
          <HeroMessage
            title="Welcome to Tsuki Lab."
            body={`
              This is my portfolio site
              that advocates
              "Do what I like and live".
            `}
          />
          <CoffeeSymbol/>
        </Inner>
      </Container>
    </Wrapper>
  )
}

export const HeroContainer = styled(Component)`
  margin-top: 3.5rem;

  ${Container} {
    padding-bottom: 10rem;

    ${HeroMessage} {
      margin-top: 6.7rem;
      padding-left: 6rem;
    }

    ${CoffeeSymbol} {
      width: 250px;
      height: 244px;
      margin: auto;
    }
  }

  ${Inner} {
    position: relative;
    height: 480px;
    display: flex;
    &::before {
      content: "";
      display: block;
      position: absolute;
      background-color: ${STYLE_COLOR.__MAIN};
      width: 250px;
      top: 0;
      bottom: 0;
      z-index: -1;
    }
  }
`