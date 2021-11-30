import React from 'react';
import BlogIndex from '../components/BlogIndex';
import { graphql } from 'gatsby';

export default function Page ({ location, data }) {
  const posts = data.allWpPost.edges;
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
    allWpPost(sort: { order: DESC, fields: [date] }) {
      edges {
        node {
          id
          slug
          title
          content
          excerpt
          date(formatString: "DD. MMMM YYYY", locale: "de")
          modified
          featuredImage { 
            node {
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
  }
`;
