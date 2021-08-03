import React from 'react';
import { StaticImage } from "gatsby-plugin-image"
import styled from '@emotion/styled';
import { SerializedStyles } from '@emotion/react';

type Props = {
  css?: SerializedStyles
} & JSX.IntrinsicElements['div']

const Component: React.FC<Props> = (props) => {
  return (
    <div {...props}>
      <StaticImage src="../../images/coffees/coffee_0.png" alt="" placeholder="none" objectFit="contain" />
      <StaticImage src="../../images/coffees/coffee_1.png" alt="" placeholder="none" objectFit="contain" />
      <StaticImage src="../../images/coffees/coffee_2.png" alt="" placeholder="none" objectFit="contain" />
    </div>
  )
}

export const CoffeeSymbol = styled(Component)`
  position: relative;
  [data-gatsby-image-wrapper] {
    position: absolute;
  }
`