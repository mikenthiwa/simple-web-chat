import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { combineReducers } from 'redux';
import { authSlice } from "./authSlice";
import { createWrapper } from "next-redux-wrapper";
import {messageSlice} from "./messageSlice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
}

const rootReducer = combineReducers({
  [authSlice.name]: authSlice.reducer,
  [messageSlice.name]: messageSlice.reducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const Store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: true,
});

export let Persistor = persistStore(Store)


