import React from 'react';
import PropTypes from 'prop-types';
import { createProvider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';

import * as constants from '../constants';
import * as actionCreators from './actionCreators';
import { reducer } from './reducer';

const Provider = createProvider(constants.reduxStoreKey);

const store = createStore(
  reducer,
  applyMiddleware(thunk)
);

export const clearLog = () => store.dispatch(actionCreators.clearLog());
// Store never changes, so we can safely export this bound function.

const VisualizerProvider = ({children}) => (
  <Provider store={store}>{children}</Provider>
);

VisualizerProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default VisualizerProvider;
