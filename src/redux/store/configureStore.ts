import { Store, createStore, applyMiddleware } from "redux";
import { ApplicationState, createRootReducer } from "@/redux/store/";
import { websocketMiddleware } from "@/redux/store/middleware";

export default function configureStore(
  initialState: ApplicationState
): Store<ApplicationState> {
  const store = createStore(
    createRootReducer(),
    initialState,
    applyMiddleware(websocketMiddleware)
  );
  return store;
}
