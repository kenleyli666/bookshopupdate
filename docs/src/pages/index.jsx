// import { useRouter } from 'next/router';
// import { useEffect, useState } from 'react';
// import axios from 'axios';
// import Link from 'next/link';
// import Image from 'next/image';
// import '../../app/globals.css';
// import { Typography, Container, Grid, Card, CardContent, CardMedia, Button } from '@mui/material';
// import Register from './register/register';
// import BookFilter from './components/bookFilter';


// export default function Home() {
//   const [books, setBooks] = useState([]);
//   // const [filters, setFilters] = useState({
//   //   title: '',
//   //   author: '',
//   //   publication_year: '',
//   //   price: ''
//   // });

//   // Fetching all books on component mount
//   useEffect(() => {
//     const fetchBooks = async () => {
//       try {
//         const response = await axios.get('/api/booksApi'); // Assuming you have an endpoint that returns all books
//         console.log('Response data:', response.data);
//         setBooks(response.data);
//       } catch (error) {
//         console.error('Error fetching the books data:', error);
//       }
//     };

//     fetchBooks();
//   }, []);

//   // const handleFilterChange = (e) => {
//   //   const { name, value } = e.target;
//   //   setFilters({
//   //     ...filters,
//   //     [name]: value
//   //   });
//   // };

//   // const filteredBooks = books.filter(book => {
//   //   return (
//   //     book.title.toLowerCase().includes(filters.title.toLowerCase()) &&
//   //     book.author.toLowerCase().includes(filters.author.toLowerCase()) &&
//   //     (filters.publication_year === '' || book.publication_year.toString() === filters.publication_year) &&
//   //     (filters.price === '' || book.price.toString() === filters.price)
//   //   );
//   // });

//   return (
//     <>
//       <div className="p-4 ">
//         <h1 className="text-2xl font-bold mb-4 text-red-500">Home Page</h1>
//         <nav className="mb-4">
//           <ul className="flex space-x-4">
//             <li><Link href="/aboutus" className="text-blue-500 hover:underline">About Us</Link></li>
//             <li><Link href="/contactus" className="text-blue-500 hover:underline">Contact Us</Link></li>
//             <li><Link href="/detail" className="text-blue-500 hover:underline">Detail</Link></li>
//            <li><Link href="/register/register" className="text-blue-500 hover:underline">Register</Link></li>
//           </ul>
//         </nav>

//         <h2 className="text-xl font-semibold mb-4 text-red-700">Book List</h2>
//         <BookFilter books={books} />
        
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//           {
//           books.map((book) => (
//             <div key={book.id} className="border p-4 flex flex-col items-center">
//               <h3 className="text-lg font-bold mb-2">{book.title}</h3>
//               <p className="mb-1">Author: {book.author}</p>
//               <p className="mb-1">Year: {book.publication_year}</p>
//               <p className="mb-1">Price: ${book.price}</p>
//               <p className="mb-2">Description: {book.description}</p>
//               <Image src={book.cover_image} alt={book.title} width={1000} height={1000} 
//                className="w-full h-auto" style={{width:"300px",height:"300px"}}/>
//               <div className="p-4">
//                 <Button variant="contained" color="primary" component={Link} href={`/books/${book.id}`}>
//                   View Details
//                 </Button>
//               </div>
//             </div>
//           ))
//           }
//         </div>
        
        
//       </div>
//     </>
//   );
// }


import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
import Image from 'next/image';
import '../../app/globals.css';
import { Typography, Container, Grid, Card, CardContent, CardMedia, Button } from '@mui/material';
import Register from './register/register';
import BookFilter from './components/BookFilter';

export default function Home() {
  const [books, setBooks] = useState([0]);

  // Fetching all books on component mount
  useEffect(() => {
        const fetchBooks = async () => {
          try {
            const response = await axios.get('/api/booksApi'); // Assuming you have an endpoint that returns all books
            console.log('Response data:', response.data);
            setBooks(response.data);
          } catch (error) {
            console.error('Error fetching the books data:', error);
          }
        };
    
        fetchBooks();
      }, []);
    

  return (
    <>
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4 text-red-500">Home Page</h1>
        <nav className="mb-4">
          <ul className="flex space-x-4">
            <li><Link href="/aboutus" className="text-blue-500 hover:underline">About Us</Link></li>
            <li><Link href="/contactus" className="text-blue-500 hover:underline">Contact Us</Link></li>
            <li><Link href="/detail" className="text-blue-500 hover:underline">Detail</Link></li>
            <li><Link href="/register/register" className="text-blue-500 hover:underline">Register</Link></li>
          </ul>
        </nav>

        <h2 className="text-xl font-semibold mb-4 text-red-700">Book List</h2>

        <BookFilter books={books} />

        {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"> */}
       
          {/* <div className="border p-4 flex flex-col items-center">
            <h3 className="text-lg font-bold mb-2">{book.title}</h3>
            <p className="mb-1">Author: {book.author}</p>
            <p className="mb-1">Year: {book.publication_year}</p>
            <p className="mb-1">Price: ${book.price}</p>
            <p className="mb-2">Description: {book.description}</p>
            <Image src={book.cover_image} alt={book.title} width={1000} height={1000} 
              className="w-full h-auto" style={{width:"300px",height:"300px"}}/>
            <div className="p-4">
              <Button variant="contained" color="primary" component={Link} href={`/books/${book.id}`}>
                View Details
              </Button>
            </div>
          </div> */}
      
      {/* </div> */}
      </div>
    </>
  );
}

