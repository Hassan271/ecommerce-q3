import { configureStore } from '@reduxjs/toolkit';
import nextReducer from "./nextSlice";

// copy -----------------------------------
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  }from 'redux-persist'
  
import storage from 'redux-persist/lib/storage'

// also copy thin in src\pages\_app.tsx
import { PersistGate } from 'redux-persist/integration/react' 
// Copy ----------------------------------------------
const persistConfig = {
    key: 'root',
    version: 1,
    storage,
  }
  
  const persistedReducer = persistReducer(persistConfig, nextReducer)

//-------------------------------------- 
export const store = configureStore({
  // Copy persistedReducer  and pss next ----------------------------------------------
reducer: {next:persistedReducer},
middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
//   ------------------------------------------------------------
});

// type export and past let persistor = persistStore(store)
export let persistor = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;