import React from 'react';
import {
  Switch,
  Route,
  BrowserRouter,
} from 'react-router-dom/cjs/react-router-dom';
import { StylesProvider } from '@material-ui/core/styles';

import Landing from './components/Landing';
import Pricing from './components/Pricing';

export default () => {
  return (
    <>
      <StylesProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path="/pricing" component={Pricing} />
            <Route path="/" component={Landing} />
          </Switch>
        </BrowserRouter>
      </StylesProvider>
    </>
  );
};

// - uses: shinyinc/action-aws-cli@v1.2

// This updated action will require an AWS_DEFAULT_REGION key, so, for now, we can just add a placeholder.

//       - uses: shinyinc/action-aws-cli@v1.2
//       - run: aws s3 sync dist s3://${{ secrets.AWS_S3_BUCKET_NAME }}/container/latest
//         env:
//           AWS_ACCESS_KEY_ID: ${{ secrets.AWS_ACCESS_KEY_ID }}
//           AWS_SECRET_ACCESS_KEY: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
//           AWS_DEFAULT_REGION: ""

// Also, make sure to verify that you are using the correct branch name in your workflow. GitHub now prompts you to name this main by default.
