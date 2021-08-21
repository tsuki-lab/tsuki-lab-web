import './src/styles/global.css'
import React from 'react'
import { Layout } from './src/components/organisms/Layout'

export const wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>
}
