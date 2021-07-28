import styled from "@emotion/styled"
import { StaticImage } from "gatsby-plugin-image"
import { InnerContainer } from "../base.element"
import { STYLE_COLOR } from "../variables"

export const SiteTitle = styled.h1({
  color: STYLE_COLOR.__ACCENT,
  fontSize: '2.3rem',
  marginBottom: '0rem',
  textDecoration: 'underline',
  textDecorationThickness: '1px',
  textUnderlineOffset: '.6rem',
})

export const HeroInnerContainer = styled(InnerContainer)({
  backgroundColor: STYLE_COLOR.__MAIN,
  alignItems: 'center',
  display: 'flex',
  justifyContent: 'center',
  padding: '5rem 0',
})

export const HeroMessageWrap = styled.div({
  marginRight: '7rem',
})

export const HeroMessageTitle = styled.p({
  color: STYLE_COLOR.__BASE,
  textTransform: 'uppercase',
  fontSize: '2.5rem',
  letterSpacing: '1.9px',
  marginBottom: '1rem',
})

export const HeroMessageBody = styled.p({
  color: STYLE_COLOR.__WHITE,
  lineHeight: 1.5,
})

export const AuthorIcon = styled(StaticImage, {})({
  height: '75px',
  width: '75px',
  overflow: 'hidden',
  marginRight: '1.2rem',
  borderRadius: '50%',
})