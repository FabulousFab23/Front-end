export const API_URLS = {
  auth: {
    login: '/login',
    register: '/register',
  },
  search: {
    user: pseudo => `/users/search?pseudo=${pseudo}`,
  },
  users: {
    avatar: `/users/avatar`,
  },
  actions: {
    countries: `/actions/countries`,
  },
  user: {
    account: `/account`,
  },
};
