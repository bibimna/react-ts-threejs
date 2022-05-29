import { combineReducers, configureStore } from '@reduxjs/toolkit';
// 리덕스 스토어 설정이 복잡해서 쉽게 사용하기 위한 도구모음
// configureStore > 기본 미들웨어로 redux-thunk 추가 후 개발환경에서 리덕스 개발자 도구를 활성화 시킴

import widgetSlice from './widget';

const rootReducer = combineReducers({
  widget: widgetSlice.reducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export const widgetActions = widgetSlice.actions;
export { store }
