import {combineReducers} from 'redux';
import {dataReducer} from './data/dataReducer';

export const SpacesNames = {
  Data: 'DATA',
};

export const rootReducer = combineReducers({
  [SpacesNames.Data]: dataReducer,
});
