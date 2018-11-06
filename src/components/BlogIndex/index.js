import React from 'react';
import { Link } from 'gatsby';
import Helmet from 'react-helmet';
import s from './style.module.less';
import metaData from '../metaData';
import cN from 'classnames';

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
            node.featured_media.localFile &&
            node.featured_media.localFile.childImageSharp.fluid;

          const postMetaData = metaData[node.slug] ? metaData[node.slug] : {};

          return (
            <article
              className={cN(s.article, {
                [s.brightBackground]: postMetaData.brightBackground,
              })}
              key={node.slug}
            >
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
