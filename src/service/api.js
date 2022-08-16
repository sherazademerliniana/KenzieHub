export function Api() {
  const api = {};
  const BASE_URL = "https://kenziehub.herokuapp.com";

  async function PostCreateUser(user) {
    const response = await fetch(`${BASE_URL}/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: user,
    });

    const data = await response.json();

    return data;
  }

  async function PostLogin(user) {
    const response = await fetch(`${BASE_URL}/sessions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: user,
    });

    const data = await response.json();

    localStorage.setItem("@kenzieHub:token", data.token);

    return data;
  }

  async function GetUser() {
    const ID = localStorage.getItem("@kenziehub:id");

    const response = await fetch(`${BASE_URL}/users/${ID}`);

    const data = await response.json();

    return data;
  }

  async function PostTech(post) {
    const TOKEN = localStorage.getItem("@kenzieHub:token");

    const response = await fetch(`${BASE_URL}/users/techs`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${TOKEN}`,
      },
      body: post,
    });

    const data = await response.json();

    return data;
  }

  async function PutTech(post, id) {
    const TOKEN = localStorage.getItem("@kenzieHub:token");

    const response = await fetch(`${BASE_URL}/users/techs/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${TOKEN}`,
      },
      body: post,
    });

    const data = await response.json();

    return data;
  }

  async function DeleteTech(id) {
    const TOKEN = localStorage.getItem("@kenzieHub:token");

    const response = await fetch(`${BASE_URL}/users/techs/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${TOKEN}`,
      },
    });

    return response;
  }

  api.getUser = GetUser;
  api.postLogin = PostLogin;
  api.postCreateUser = PostCreateUser;
  api.postTech = PostTech;
  api.putTech = PutTech;
  api.deleteTech = DeleteTech;

  return api;
}
