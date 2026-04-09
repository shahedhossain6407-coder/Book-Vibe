import { use } from "react";

import BookCard from "../../Components/shared/navbar/BookCard";
const booksPromise = fetch(`/jsonData.json`).then(res=>(res.json()))
// console.log(booksPromise)
const AllBook = () => {
    const books = use(booksPromise);  
    // console.log(`json data` ,books)
    return (     
        <div className="container mx-auto my-10">
            <h1 className="font-bold text-4xl mt-10 text-gray-500 text-center">Books</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {           
          <BookCard books={books}></BookCard>
           }
          </div>
        </div>
    );
};

export default AllBook;