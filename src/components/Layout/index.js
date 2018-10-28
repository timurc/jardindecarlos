import React from 'react';
import { Link } from 'gatsby';
import Helmet from 'react-helmet';

import './base.css';
import 'typeface-alegreya';

class Template extends React.Component {
  render() {
    const { location, children } = this.props;
    const rootPath = `${__PATH_PREFIX__}/`;
    let header;

    if (location.pathname === rootPath) {
      header = (
        <h1>
          <Link to={'/'}>Jardin de Carlos</Link>
        </h1>
      );
    } else {
      header = (
        <h3>
          <Link to={'/'}>Jardin de Carlos</Link>
        </h3>
      );
    }
    return (
      <>
        <Helmet htmlAttributes={{ lang: 'de' }} />
        {header}
        {children}
      </>
    );
  }
}

export default Template;
