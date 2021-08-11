import React from "react";
import styled from "@emotion/styled";
import { StaticImage } from "gatsby-plugin-image";

const Component: React.FC = (props) => (
  <StaticImage src="../../images/icon.png" alt="" {...props}/>
)

export const AuthorIcon = styled(Component)`
  overflow: hidden;
  border-radius: 50%;
`