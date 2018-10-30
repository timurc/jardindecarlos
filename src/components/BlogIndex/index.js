import React from 'react';
import { Link } from 'gatsby';
import Helmet from 'react-helmet';
import Img from 'gatsby-image';
import s from './style.module.less';

import Layout from '../Layout';

class BlogIndex extends React.Component {
  render() {
    const { siteMetadata, posts } = this.props;
    const siteTitle = siteMetadata.title;
    const siteDescription = siteMetadata.description;

    return (
      <Layout className={s.container} location={this.props.location}>
        <Helmet
          meta={[{ name: 'description', content: siteDescription }]}
          title={siteTitle}
        />
        {posts.map(({ node }) => {
          const title = node.title || node.fields.slug;

          const image =
            node.featured_media &&
            node.featured_media.localFile.childImageSharp.fluid;
          return (
            <article className={s.article} key={node.slug}>
              <Link to={node.slug} className={s.link}>
                <time>{node.date}</time>
                <h1 className={s.heading}>{title}</h1>
                {image && (
                  <img
                    className={s.image}
                    src={image.base64}
                    sizes="450px"
                    srcSet={image.srcSet}
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
