"use client"
import { combineReducers } from "@reduxjs/toolkit";
import userSlice from "../slices/user.slice";
import companySlice from "../slices/company.slice";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const combine = combineReducers({
  user: userSlice,
  company: companySlice,
});

const persistConfig = {
  key: "ncm",
  storage: storage,
  whitelist: ["user", "company"],
  // debug: true,
};

const rootReducer = persistReducer(persistConfig, combine);

export default rootReducer;
