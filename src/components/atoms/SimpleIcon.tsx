import { SerializedStyles } from '@emotion/react';
import styled from '@emotion/styled';
import React from 'react';
import { useMemo } from 'react';
import simpleIcons from 'simple-icons';

type Props = {
  slug: string;
  css?: SerializedStyles
} & JSX.IntrinsicElements['svg']

const Component: React.FC<Props> = ({slug, ...restProps}) => {
  const icon = useMemo(() => simpleIcons.get(slug), [slug])
  return (
    <svg role="img" viewBox="0 0 24 24" {...restProps}>
      <title>{icon.title}</title>
      <path d={icon.path} />
    </svg>
  )
}

export const SimpleIcon = styled(Component)`
  vertical-align: middle;
`
