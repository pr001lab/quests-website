import { createAction } from '@reduxjs/toolkit';

export const ActionType = {
  LoadQuestsRequest: 'data/loadQuestsRequest',
  LoadQuestsSuccess: 'data/loadQuestsSuccess',
  LoadQuestsFailure: 'data/loadQuestsFailure',
  LoadQuestByIdRequest: 'data/loadQuestByIdRequest',
  LoadQuestByIdSuccess: 'data/loadQuestByIdSuccess',
  LoadQuestByIdFailure: 'data/loadQuestByIdFailure',
  PostOrdersRequest: 'data/postOrdersRequest',
  PostOrdersSuccess: 'data/postOrdersSuccess',
  PostOrdersFailure: 'data/postOrdersFailure',
  PostOrdersIdle: 'data/postOrdersIdle',
};

export const loadQuestsRequest = createAction(ActionType.LoadQuestsRequest);

export const loadQuestsSuccess = createAction(
  ActionType.LoadQuestsSuccess, (quests) => ({
    payload: {
      quests,
    },
  }),
);

export const loadQuestsFailure = createAction(
  ActionType.LoadQuestsFailure, (error) => ({
    payload: {
      error,
    },
  }),
);

export const loadQuestByIdRequest = createAction(ActionType.LoadQuestByIdRequest);

export const loadQuestByIdSuccess = createAction(
  ActionType.LoadQuestByIdSuccess, (quest) => ({
    payload: {
      quest,
    },
  }),
);

export const loadQuestByIdFailure = createAction(
  ActionType.LoadQuestByIdFailure, (error) => ({
    payload: {
      error,
    },
  }),
);

export const postOrdersRequest = createAction(ActionType.PostOrdersRequest);

export const postOrdersdSuccess = createAction(
  ActionType.PostOrdersSuccess, (name, peopleCount, phone, isLegal) => ({
    payload: {
      name,
      peopleCount,
      phone,
      isLegal,
    },
  }),
);

export const postOrdersFailure = createAction(
  ActionType.PostOrdersFailure, (error) => ({
    payload: {
      error,
    },
  }),
);

export const postOrdersIdle = createAction(ActionType.PostOrdersIdle);
