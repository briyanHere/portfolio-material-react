import React, { Fragment } from 'react';
import { withStyles } from '@material-ui/core';
import { HeaderBanner, HeaderTabs } from '../components';

const styles = theme => ({
  
});

function HeaderFragment(props) {
  return (
    <Fragment>
      <HeaderBanner />
      <HeaderTabs />
    </Fragment>
  )
}

export default withStyles(styles)(HeaderFragment);
