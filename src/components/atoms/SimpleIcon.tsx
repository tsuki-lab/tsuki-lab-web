import styled from '@emotion/styled';
import React from 'react';
import { useMemo } from 'react';
import simpleIcons from 'simple-icons';

type Props = {
  slug: string;
  hex?: boolean|string;
} & JSX.IntrinsicElements['svg']

const Component: React.FC<Props> = ({slug, hex, ...restProps}) => {
  const icon = useMemo(() => simpleIcons.get(slug), [slug])
  const color = useMemo(() => {
    if (typeof hex === 'string') return hex
    if (hex === true) return icon.hex
  }, [icon, hex])
  return (
    <svg role="img" viewBox="0 0 24 24" style={hex ? {fill: `#${color}`} : undefined} {...restProps}>
      <title>{icon.title}</title>
      <path d={icon.path} />
    </svg>
  )
}

export const SimpleIcon = styled(Component)`
  vertical-align: middle;
`
