import { css } from '@emotion/react';
import styled from '@emotion/styled';
import React from 'react';
import { SimpleIcon } from '../atoms/SimpleIcon';

type Element = JSX.IntrinsicElements['div'];
type SkillIcon = {
  slug: string;
  size?: string;
  tag?: React.ElementType;
};
type Props = Element & SkillIcon;

const Component: React.FC<Props> = ({children, ...props}) => {
  const { slug, size, tag: Tag = 'div', ...restReact } = props;

  return (
    <Tag {...restReact}>
      <SimpleIcon hex slug={slug} css={css`
        width: ${size || '50px'};
      `}/>
    </Tag>
  )
}

export const SkillIcon = styled(Component)`
`