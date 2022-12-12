const BASE_URL = "http://localhost:3001/users";

export default {
  async add(user) {
    const response = await fetch(BASE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    return response.json();
  },
  // use email and password to get user
  async getUser(email, pass) {
    const response = await fetch(BASE_URL);

    const usersData = await response.json();

    // TODO: Resolve or reject a promise

    // look for email and password match.
    return usersData.find((u) => u.email === email && u.password === pass);
  },
};
