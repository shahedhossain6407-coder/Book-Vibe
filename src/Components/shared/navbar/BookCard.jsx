import React from 'react';
import { FaRegStar } from "react-icons/fa";
import { Link } from 'react-router';
const BookCard = ({books}) => {
    return (
        books.map((book ,index)=>{
            const {
                bookName,
                image,
                tags,
                rating,
                author,
                category           
            } = book;
        return <Link to ={`/bookDetails/${book.bookId}`} key={index} className="card bg-base-100 w-96 shadow-sm  rounded-2xl mt-10 ">
        <figure className="p-2">
          <img
            src={image}
            className="h-[250px]"
             />
        
        </figure>
        <div className="card-actions justify-start mt-3 text-green-300 font-bold">
           {tags.map((tag,index)=>{
            return  <div key={index} className="badge badge-outline">{tag}</div>
            
           })}
          </div>
        <div className="card-body">
          <h2 className="card-title">
            {bookName}
          </h2>
          <p className="font-semibold  ">by : {author}</p>
          <div className="border-b-3 border-dotted border-gray-300 mt-3"></div>
          <div className="flex justify-between font-semibold">
            <p>{category}</p>
            <h3 className="flex items-center gap-1">{rating}<FaRegStar /></h3>
          </div>
        </div>
      </Link>
        })
    );
};

export default BookCard;