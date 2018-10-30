import React from 'react';
import Helmet from 'react-helmet';
import { Link, graphql } from 'gatsby';
import get from 'lodash/get';

import Layout from '../components/Layout';

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.wordpressPost;
    const siteTitle = get(this.props, 'data.site.siteMetadata.title');
    const siteDescription = post.excerpt;
    const { previous, next } = this.props.pageContext;

    const featuredImage =
      post.featured_media &&
      post.featured_media.localFile.childImageSharp.fluid;

    return (
      <Layout location={this.props.location}>
        <Helmet
          meta={[{ name: 'description', content: siteDescription }]}
          title={`${post.title} | ${siteTitle}`}
        />
        <article>
          <header>
            <time>{post.date}</time>
            <h1>{post.title}</h1>
          </header>
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </article>
        {previous && (
          <Link to={previous.slug} rel="prev">
            ← {previous.title}
          </Link>
        )}
        {next && (
          <Link to={next.slug} rel="next">
            {next.title} →
          </Link>
        )}
      </Layout>
    );
  }
}

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    wordpressPost(slug: { eq: $slug }) {
      id
      excerpt
      content
      title
      date(formatString: "DD. MMMM YYYY", locale: "de")
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
`;
