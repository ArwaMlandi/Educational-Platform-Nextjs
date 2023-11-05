/*import { configureStore } from '@reduxjs/toolkit';
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
import storage from 'redux-persist/lib/storage';
import educatSlice from './actionSlice';
const persistConfig = {
  key: 'root',
  version: 1,
  storage,
}

const persistedReducer = persistReducer(persistConfig, educatSlice)
export const store = configureStore({
  reducer: {educat:persistedReducer,},
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export let persistor = persistStore(store)*/



import { applyMiddleware, configureStore } from '@reduxjs/toolkit';
import reduxThunk from 'redux-thunk';
import courseSlice from './slices/course.Slice';
import teacherSlice from './slices/teacher.Slice';
import studentSlice from './slices/student.Slice';

const reducers ={
  reducer:{
    course: courseSlice,
    teacher: teacherSlice,
    student: studentSlice,
  },
};
const store = configureStore(reducers,applyMiddleware(reduxThunk));
export default store