import React from 'react';
import { Link } from 'gatsby';
import Helmet from 'react-helmet';
import s from './style.module.less';

import './base.css';
import 'typeface-alegreya';

class Template extends React.Component {
  render() {
    const { children, className } = this.props;

    return (
      <>
        <Helmet htmlAttributes={{ lang: 'de' }} />
        <h1 className={s.heading}>
          <Link className={s.headingLink} to={'/'}>
            Jardin de Carlos
          </Link>
        </h1>
        <main className={className}>{children}</main>
      </>
    );
  }
}

export default Template;
