const HOME = "/";
const API = "/api";
const USER = "/users";
const SAVING = "/saving";
const SAVING_DETAIL = "/savings/:id";
const COMSUMPTION_DEATIL = "/comsumptions/:id";
const MYSPACE = "/myspace/:id";
const MYSPAGE_CHANGE = "/myspace/edit/:id";

const routes = {
  home: HOME,
  api: API,
  user: USER,
  saving: SAVING,
  savings: SAVING_DETAIL,
  consumption: COMSUMPTION_DEATIL,
  myspace: MYSPACE,
  editMyspace: MYSPAGE_CHANGE,
};

export default routes;
