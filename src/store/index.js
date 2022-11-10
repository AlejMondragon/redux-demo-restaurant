import { configureStore } from "@reduxjs/toolkit"
import mealsReducer from "./slices/meals-slice"
import cartReducer from "./slices/cart-slice"
import storage from "redux-persist/lib/storage"
import { persistStore, persistReducer } from "redux-persist"

const persistConfig = {
  key: "root",
  version: 1,
  storage
}

const persistedCartReducer = persistReducer(persistConfig, cartReducer)

const store = configureStore({
  // reducers (slices)
  reducer: {
    meals: mealsReducer,
    cart: persistedCartReducer
  },
  middleware: getDefaultMiddleware =>
  getDefaultMiddleware({
    serializableCheck: false,
  }),
})

const persistor = persistStore(store)

export default store
export {persistor}