import {toast} from 'react-toastify';
import {
  loadQuestsRequest,
  loadQuestsSuccess,
  loadQuestsFailure,
  loadQuestByIdRequest,
  loadQuestByIdSuccess,
  loadQuestByIdFailure,
  postOrdersRequest,
  postOrdersdSuccess,
  postOrdersFailure
} from './actions';
import { APIRoutes, ErrorTexts } from '../../const.js';

export const fetchQuestsAction = () => (
  async (dispatch, _getState, api) => {
    dispatch(loadQuestsRequest());
    try {
      const {data} = await api.get(APIRoutes.Quests);
      dispatch(loadQuestsSuccess(data));
    } catch (error) {
      dispatch(loadQuestsFailure(error.response.status));
      toast.warn(ErrorTexts.FETCH_FAIL_DATA);
    }
  }
);

export const fetchQuestByIdAction = (id) => (
  async (dispatch, _getState, api) => {
    dispatch(loadQuestByIdRequest());
    try {
      const {data} = await api.get(`${APIRoutes.Quests}/${id}`);
      dispatch(loadQuestByIdSuccess(data));
    } catch (error) {
      dispatch(loadQuestByIdFailure(error.response.status));
      if (error.response.status !== 404) {
        toast.warn(ErrorTexts.FETCH_FAIL_DATA);
      }
    }
  }
);

export const postOrdersAction = (data) => (
  async (dispatch, _getState, api) => {
    dispatch(postOrdersRequest());
    try {
      await api.post(APIRoutes.Orders, data);
      dispatch(postOrdersdSuccess());
    } catch (error) {
      dispatch(postOrdersFailure(error.response.status));
      toast.warn(ErrorTexts.POST_FAIL_DATA);
    }
  }
);
