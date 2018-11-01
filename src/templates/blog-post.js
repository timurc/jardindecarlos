import React from 'react';
import Helmet from 'react-helmet';
import { Link, graphql } from 'gatsby';
import get from 'lodash/get';
import Parser from 'html-react-parser';
import s from './style.module.less';
import './wp-content-style.less';
import cN from 'classnames';
import metaData from '../components/metaData';

import Layout from '../components/Layout';

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.wordpressPost;
    const siteTitle = get(this.props, 'data.site.siteMetadata.title');
    const siteDescription = post.excerpt;
    const { previous, next } = this.props.pageContext;

    const slug = [this.props.pageContext.slug];
    const postMetaData = metaData[slug] ? metaData[slug] : {};

    const featuredImage =
      post.featured_media &&
      post.featured_media.localFile &&
      post.featured_media.localFile.childImageSharp.fluid;

    const blogPostContent = Parser(post.content);

    // const audio = post.acf.audio3 && post.acf.audio3.url.source_url;
    const audio = postMetaData.audio;

    return (
      <Layout location={this.props.location}>
        <Helmet
          meta={[{ name: 'description', content: siteDescription }]}
          title={`${post.title} | ${siteTitle}`}
        />
        <article
          className={cN({ [s.hasFeaturedImage]: featuredImage }, s.article)}
        >
          {featuredImage && (
            <img
              className={s.featuredImage}
              src={featuredImage.base64}
              srcSet={featuredImage.srcSet}
            />
          )}
          <header className={s.header}>
            <div>
              {postMetaData.location && <span>{postMetaData.location}, </span>}
              <time>{post.date}</time>
            </div>
            <h1 className={s.title}>{post.title}</h1>
          </header>
          {audio && (
            <audio controls>
              <source src={audio} type="audio/mp3" />
            </audio>
          )}
          {blogPostContent}
          <div className={s.prevNext}>
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
          </div>
        </article>
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
      #      acf {
      #        audio3 {
      #          url {
      #            source_url
      #          }
      #        }
      #      }
    }
  }
`;
