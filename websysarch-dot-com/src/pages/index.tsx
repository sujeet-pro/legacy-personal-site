
import * as React from 'react'
import { Helmet } from 'react-helmet'
import {Box } from 'theme-ui'
// styles
const pageStyles = {
  color: '#232129',
  padding: 96,
  fontFamily: 'body'
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}

// markup
const IndexPage = () => {
  return (
    <Box as="main" color="#232129" sx={pageStyles}>
      <title>Web Sys Arch</title>
      <h1 style={headingStyles}>Web Sys Arch is coming soon!</h1>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap"
          rel="stylesheet"
        />
      </Helmet>
    </Box>
  )
}

export default IndexPage
