import React from "react";
import styled from "@emotion/styled";
import { StaticImage } from "gatsby-plugin-image";

const Component: React.FC = (props) => (
  <div {...props}>
    <StaticImage src="../../assets/images/icon.png" alt="" placeholder="none" objectFit="contain" />
  </div>
)

export const AuthorIcon = styled(Component)`
  overflow: hidden;
  border-radius: 50%;
`