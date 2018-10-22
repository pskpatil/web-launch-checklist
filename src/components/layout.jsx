import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import {Normalize} from 'styled-normalize';
import 'typeface-rubik';

import Header from './Header';
import GlobalStyles from '../styles/global';

class Layout extends React.PureComponent {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  render() {
    const {children} = this.props;

    return (
      <React.Fragment>
        <Helmet
          title="WebLaunchChecklist"
          meta={[
            {name: 'description', content: 'Sample'},
            {name: 'keywords', content: 'sample, something'},
          ]}>
          <html lang="en" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Helmet>
        <Normalize />
        <GlobalStyles />
        <Header />
        {children}
      </React.Fragment>
    );
  }
}

export default Layout;
