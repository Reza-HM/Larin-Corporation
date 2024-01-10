import { configureStore, combineReducers, Reducer } from "@reduxjs/toolkit";
import articlesReducer, { ArticlesState } from "./store/articles";
import contactsReducer, { ContactsState } from "./store/contacts";
import infosReducer, { InfosState } from "./store/infos";
import projectsReducer, { ProjectsState } from "./store/projects";
import questionsReducer, { QuestionsState } from "./store/questions";
import usersReducer, { AuthState } from "./store/users";
import servicesReducer, { ServicesState } from "./store/services";

interface RootsState {
  articles: ArticlesState;
  contacts: ContactsState;
  infos: InfosState;
  projects: ProjectsState;
  questions: QuestionsState;
  services: ServicesState;
  users: AuthState;
}

const rootReducer: Reducer<RootsState> = combineReducers({
  articles: articlesReducer,
  contacts: contactsReducer,
  infos: infosReducer,
  projects: projectsReducer,
  questions: questionsReducer,
  services: servicesReducer,
  users: usersReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export default store;
