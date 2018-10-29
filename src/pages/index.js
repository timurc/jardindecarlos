import React from 'react';
import BlogIndex from '../components/BlogIndex';

export default function({ location, data }) {
  const posts = data.allWordpressPost.edges;
  const siteMetadata = data.site.siteMetadata;
  return (
    <BlogIndex siteMetadata={siteMetadata} posts={posts} location={location} />
  );
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    allWordpressPost {
      edges {
        node {
          id
          slug
          title
          content
          excerpt
          date(formatString: "DD MMMM, YYYY")
          modified
          featured_media {
            localFile {
              childImageSharp {
                fluid(maxWidth: 2500) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`;
