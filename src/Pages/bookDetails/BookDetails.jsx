
import { useLoaderData, useParams } from 'react-router';

const BookDetails = () => {
const allbook = useLoaderData();
const {bookId} = useParams();
console.log(bookId)
 const specipicBook = allbook.find(book=>book.bookId === parseInt(bookId) )
 console.log(specipicBook)
 const {yearOfPublishing, review,rating,publisher,image,category,bookName,author,tags,totalPages} = specipicBook;
    return (
        <div className='container mx-auto mt-10 '>
         <div className="card lg:card-side bg-base-100 shadow-sm">
  <figure className='bg-gray-100 rounded-2xl' >
    <img
      src={image}
      alt="Album"
      className=' w-[400px] h-[500px] p-10 flex-1'
       />
  </figure>
  
  <div className='ml-3 space-y-2 pl-5 flex-1'>
    <h2 className='font-bold text-2xl '>{bookName}</h2>
    <p className='font-semibold'> by : <small>{author}</small></p>
    <div className=' border-solid border-gray-200 border-1'></div>
    <p>{category}</p>
    <div className=' border-solid border-gray-200 border-1'></div>
    <p className='text-xl'>Review : <small>{review}</small></p>
    <div className='flex gap-10'>
        <h3>tag</h3>
        {tags.map((tag,index)=>{
            return  <div key={index} className="badge badge-outline text-green-500 bg-green-50">#{tag}</div>
            
           })}
    </div>
    <div className=' border-solid border-gray-200 border-1'></div>

    <div className='space-y-3'>
    <div className='flex gap-30 '>
        <h5 className='text-gray-500'>Number of Pages:</h5>
        <p>{totalPages}</p>
     </div>
     <div className='flex gap-30'>
        <h5 className='text-gray-500'>Publisher:</h5>
        <p>{publisher}</p>
     </div>
     <div className='flex gap-30'>
        <h5 className='text-gray-500'>Year of Publishing::</h5>
        <p>{yearOfPublishing}</p>
     </div>
     <div className='flex gap-30'>
        <h5 className='text-gray-500'>Rating:</h5>
        <p>{rating}</p>
     </div>
    </div>
   <div className='flex gap-4 mt-10'>
    <button className='btn '>Read</button>
    <button className='btn btn-info'>Wishlist</button>
   </div>
  </div>
</div>
</div>
    );
};

export default BookDetails;