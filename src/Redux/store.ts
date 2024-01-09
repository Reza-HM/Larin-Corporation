import { configureStore, combineReducers, Reducer } from "@reduxjs/toolkit";
import articlesReducer, { ArticlesState } from "./store/articles";
import contactsReducer, { ContactsState } from "./store/contacts";
import infosReducer, { InfosState } from "./store/infos";
import projectsReducer, { ProjectsState } from "./store/projects";
import questionsReducer, { QuestionsState } from "./store/questions";
import usersReducer, { AuthState } from "./store/users";

// Define the root state type
interface RootState {
  articles: ArticlesState;
  contacts: ContactsState;
  infos: InfosState;
  projects: ProjectsState;
  questions: QuestionsState;
  users: AuthState;
}

// Create a map of reducers
const rootReducer: Reducer<RootState> = combineReducers({
  articles: articlesReducer,
  contacts: contactsReducer,
  infos: infosReducer,
  projects: projectsReducer,
  questions: questionsReducer,
  users: usersReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
