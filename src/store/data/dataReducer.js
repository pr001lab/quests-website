import { createReducer } from '@reduxjs/toolkit';
import {
  loadQuestsRequest,
  loadQuestsSuccess,
  loadQuestsFailure,
  loadQuestByIdRequest,
  loadQuestByIdSuccess,
  loadQuestByIdFailure,
  postOrdersRequest,
  postOrdersdSuccess,
  postOrdersFailure,
  postOrdersIdle,
} from './actions';
import { StatusLoading } from '../../const';

const initialState = {
  quests: [],
  questsLoading: StatusLoading.Idle,
  questsLoadingError: null,
  questById: null,
  questByIdLoading: StatusLoading.Idle,
  questByIdLoadingError: null,
  ordersLoading: StatusLoading.Idle,
  ordersLoadingError: null,
};

const dataReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loadQuestsRequest, (state) => {
      state.questsLoading = StatusLoading.Loading;
    })
    .addCase(loadQuestsSuccess, (state, action) => {
      const { quests } = action.payload;
      state.quests = quests;
      state.questsLoading = StatusLoading.Succeeded;
    })
    .addCase(loadQuestsFailure, (state, action) => {
      const { error } = action.payload;
      state.questsLoading = StatusLoading.Failed;
      state.questsLoadingError = error;
    })
    .addCase(loadQuestByIdRequest, (state) => {
      state.questByIdLoading = StatusLoading.Loading;
    })
    .addCase(loadQuestByIdSuccess, (state, action) => {
      const { quest } = action.payload;
      state.questById = quest;
      state.questByIdLoading = StatusLoading.Succeeded;
    })
    .addCase(loadQuestByIdFailure, (state, action) => {
      const { error } = action.payload;
      state.questByIdLoading = StatusLoading.Failed;
      state.questByIdLoadingError = error;
    })
    .addCase(postOrdersRequest, (state) => {
      state.ordersLoading = StatusLoading.Loading;
    })
    .addCase(postOrdersdSuccess, (state) => {
      state.ordersLoading = StatusLoading.Succeeded;
    })
    .addCase(postOrdersFailure, (state, action) => {
      const { error } = action.payload;
      state.ordersLoading = StatusLoading.Failed;
      state.ordersLoadingError = error;
    })
    .addCase(postOrdersIdle, (state) => {
      state.ordersLoading = StatusLoading.Idle;
    });
});

export {dataReducer};
