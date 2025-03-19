export const getBooksAndCategories = async () => {
  const [booksRes, categoriesRes] = await Promise.all([
    fetch("https://nextjs-homework005.vercel.app/api/book"),
    fetch("https://nextjs-homework005.vercel.app/api/book_category"),
  ]);

  const booksData = await booksRes.json();
  const categoriesData = await categoriesRes.json();

  return {
    books: booksData.payload,
    categories: categoriesData.payload,
  };
};

export const getBookById = async (bookId) => {
  const res = await fetch(
    `https://nextjs-homework005.vercel.app/api/book/${bookId}`
  );
  const book = await res.json();
  return book;
};

export const getCartoonId = async () => {
  const res = await fetch("https://nextjs-homework005.vercel.app/api/cartoon");
  const data = await res.json();
  return data;
};
