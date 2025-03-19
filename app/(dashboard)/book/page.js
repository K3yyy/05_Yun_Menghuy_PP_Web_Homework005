import { getBooksAndCategories } from "@/service/bookService";
import BookCard from "@/components/Cards/BookCard";

export default async function BookCards() {
  const { books } = await getBooksAndCategories();

  return (
    <div className="flex flex-wrap gap-6 justify-center mt-8">
      {books && books.length > 0 ? (
        books.map((book) => <BookCard key={book.id} {...book} />)
      ) : (
        <p>No books found.</p>
      )}
    </div>
  );
}
