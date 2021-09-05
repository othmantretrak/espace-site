// authProvider.js

import Cookies from "./Cookies";

const authProvider = {
  login: ({ username, password }) => {
    const identifier = username; // strapi expects 'identifier' and not 'username'
    const request = new Request("http://localhost:1337/auth/local", {
      method: "POST",
      body: JSON.stringify({ identifier, password }),
      headers: new Headers({ "Content-Type": "application/json" }),
    });
    return fetch(request)
      .then((response) => {
        if (response.status < 200 || response.status >= 300) {
          throw new Error(response.statusText);
        }
        return response.json();
      })
      .then((response) => {
        localStorage.setItem("auth-espace", JSON.stringify(response.user));
        //Cookies.setCookie("auth-espace", response.user, 1);
        Cookies.setCookie("token", response.jwt, 1);
        Cookies.setCookie("role", response.user.role.name, 1);
      });
  },

  logout: () => {
    Cookies.deleteCookie("token");
    Cookies.deleteCookie("role");
    //Cookies.deleteCookie("auth-espace");
    localStorage.removeItem("auth-espace");
    return Promise.resolve();
  },

  checkAuth: () => {
    return Cookies.getCookie("token") ? Promise.resolve() : Promise.reject();
  },

  checkError: ({ status }) => {
    if (status === 401 || status === 403) {
      Cookies.deleteCookie("token");
      Cookies.deleteCookie("role");
      return Promise.reject();
    }
    return Promise.resolve();
  },
  getIdentity: () => {
    try {
      const { id, fullname, avatar } = JSON.parse(
        localStorage.getItem("auth-espace")
      );
      return Promise.resolve({
        id,
        fullName: fullname,
        avatar: avatar.url,
      });
    } catch (error) {
      return Promise.reject(error);
    }
  },
  getPermissions: () => {
    const role = Cookies.getCookie("role");
    return role ? Promise.resolve(role) : Promise.reject();
  },
};

export default authProvider;
