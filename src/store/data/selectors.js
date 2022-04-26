import {createSelector} from 'reselect';
import { SpacesNames } from 'store/root-reducer';

export const selectQuests = (state) => (
  state[SpacesNames.Data].quests
);
export const selectQuestsLoading = (state) => (
  state[SpacesNames.Data].questsLoading
);
export const selectQuestsLoadingError = (state) => (
  state[SpacesNames.Data].questsLoadingError
);

export const selectQuestById = (state) => (
  state[SpacesNames.Data].questById
);
export const selectQuestByIdLoading = (state) => (
  state[SpacesNames.Data].questByIdLoading
);
export const selectQuestByIdLoadingError = (state) => (
  state[SpacesNames.Data].questByIdLoadingError
);
export const reselectQuestByIdCombo = createSelector(
  [selectQuestById, selectQuestByIdLoading, selectQuestByIdLoadingError],
  (quest, questLoading, questLoadingError) => ({
    quest,
    questLoading,
    questLoadingError,
  }),
);

export const selectOrdersLoading = (state) => (
  state[SpacesNames.Data].ordersLoading
);
