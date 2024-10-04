import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
import Image from 'next/image';
import '../../app/globals.css';
import { Typography, Container, Grid, Card, CardContent, CardMedia, Button } from '@mui/material';
import Header from './components/header';
import Footer from './components/footer';
import Register from './account/register';
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

        <Header />
        <div className='p-4'>
        <BookFilter books={books} />
        </div>
        <Footer />

      </div>
    </>
  );
}

