import { Reducer } from 'redux';
import produce from 'immer';
import { FilterState, ActionTypes } from './types';

const INITIAL_STATE: FilterState = {
  filterShow: false,
  filterClass: { sortBy: 0, orderBy: 0 },
};

const filter: Reducer<FilterState> = (state = INITIAL_STATE, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case ActionTypes.filterOpen: {
        draft.filterShow = true;
        break;
      }
      case ActionTypes.filterCLose: {
        draft.filterShow = false;
        break;
      }
      case ActionTypes.filterStatus: {
        draft.filterClass = {
          sortBy: action.payload.filter.sortBy,
          orderBy: action.payload.filter.orderBy,
        };
        break;
      }
      default: {
        return draft;
      }
    }
  });
};
export default filter;
