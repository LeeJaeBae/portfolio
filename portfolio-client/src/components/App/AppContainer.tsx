import React from 'react';
import { graphql } from 'react-apollo';
import { IS_LOGGEN_IN } from './AppQueries';

const AppContainer: any = (props: any) => <div>{JSON.stringify(props.data)}</div>;

export default graphql(IS_LOGGEN_IN)(AppContainer);
