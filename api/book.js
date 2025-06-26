export async function fetchBookById(id) {
  const res = await fetch(`https://book-haven-app-be.onrender.com/books/${id}`);
  if (!res.ok) throw new Error("Failed to fetch book");
  return await res.json();
}