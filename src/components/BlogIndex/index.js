import React from 'react';
import { Link, graphql } from 'gatsby';
import Helmet from 'react-helmet';
import Img from 'gatsby-image';

import Layout from '../Layout';

class BlogIndex extends React.Component {
  render() {
    const { siteMetadata, posts } = this.props;
    const siteTitle = siteMetadata.title;
    const siteDescription = siteMetadata.description;

    return (
      <Layout location={this.props.location}>
        <Helmet
          meta={[{ name: 'description', content: siteDescription }]}
          title={siteTitle}
        />
        {posts.map(({ node }) => {
          const title = node.title || node.fields.slug;
          console.log(node);
          return (
            <article key={node.slug}>
              <Link to={node.slug}>
                <time>{node.date}</time>
                <h1>{title}</h1>
                {node.featured_media && (
                  <Img
                    fluid={node.featured_media.localFile.childImageSharp.fluid}
                  />
                )}
              </Link>
            </article>
          );
        })}
      </Layout>
    );
  }
}

export default BlogIndex;
