import { css, cx } from 'linaria';
import { container } from '@/styles/common/container.style';

export const layout = css`
  position: relative;
  margin: auto;
`

export const header = cx(css`
  z-index: 100;
  position: relative;
`, container)

export const main = css`
`
