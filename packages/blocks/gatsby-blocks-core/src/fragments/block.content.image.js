import { graphql } from 'gatsby'

export const query = graphql`
  fragment BlockContentImage on BlockContentImage {
    alt
    effects
    radius
    shadow
    border
    position {
      top
      bottom
      left
      right
    }
    width
    maxWidth
    link {
      ...BlockContentButton
    }
    src {
      extension
      publicURL
      childImageSharp {
        gatsbyImageData(
          placeholder: BLURRED
          transformOptions: { cropFocus: NORTH }
          outputPixelDensities: [0.5, 1]
          quality: 90
        )
      }
    }
  }
`
