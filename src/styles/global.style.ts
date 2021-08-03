import { injectGlobal } from '@emotion/css'
import 'ress';

injectGlobal`
  html {
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    scroll-behavior: smooth;
  }

  body {
    padding: 0 3rem;
    /* max-width: 1300px; */
  }

  ul {
    list-style: none;
  }
`