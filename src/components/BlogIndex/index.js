import React from 'react';
import { Link, graphql } from 'gatsby';
import Helmet from 'react-helmet';

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
          return (
            <div key={node.slug}>
              <h3>
                <Link to={node.slug}>{title}</Link>
              </h3>
              <small>{node.date}</small>
              <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
            </div>
          );
        })}
      </Layout>
    );
  }
}

export default BlogIndex;
