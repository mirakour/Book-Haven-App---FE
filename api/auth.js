export async function registerUser(username, password) {
  const res = await fetch("https://book-haven-app-be.onrender.com/users/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  });

  if (!res.ok) throw new Error("Failed to register");
  return await res.json(); // expects { token }
}

export async function loginUser(username, password) {
  const res = await fetch("https://book-haven-app-be.onrender.com/users/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  });

  if (!res.ok) throw new Error("Failed to login");
  return await res.json(); // expects { token }
}

export async function fetchMe() {
  const token = localStorage.getItem("token");

  const res = await fetch("https://book-haven-app-be.onrender.com/users/me", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) throw new Error("Failed to fetch user info");
  return await res.json(); // expects { username, reviews: [...] }
}

