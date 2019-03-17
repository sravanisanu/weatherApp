import * as actions from "../actions";

const initialState = {
  loading: false,
  metrics: []
};


const startLoading = (state, action) => {
  return { ...state, loading: true };
};

const weatherDataReceived = (state, action) => {
  return { ...state, loading: false, metrics: action.metrics.data };
};

const handlers = {
  [actions.GET_WEATHER]: startLoading,
  [actions.GET_METRIC_DATA]: weatherDataReceived,
};

export default (state = initialState, action) => {
  const handler = handlers[action.type];
  if (typeof handler === "undefined") return state;
  return handler(state, action);
};
