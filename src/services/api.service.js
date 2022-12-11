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
};
