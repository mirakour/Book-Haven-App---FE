export async function fetchReviewsByBook(bookId) {
  const token = localStorage.getItem("token");
  const res = await fetch(`https://book-haven-app-be.onrender.com/books/${bookId}/reviews`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  if (!res.ok) throw new Error("Failed to fetch reviews");
  return await res.json();
}