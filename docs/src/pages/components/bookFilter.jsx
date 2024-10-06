import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Button } from '@mui/material';
import Link from 'next/link';
import SearchIcon from '@mui/icons-material/Search';

const BookFilter = ({ books }) => {
  const [filter, setFilter] = useState('');
  const [filteredBooks, setFilteredBooks] = useState([]);

  useEffect(() => {
    // 初始顯示前21本書
    setFilteredBooks(books.slice(0, 21));
  }, [books]);

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const handleSearch = () => {
    const lowerCaseFilter = filter.toLowerCase();
    let filtered = books.filter(book => {
      return (
        (book.title?.toLowerCase().includes(lowerCaseFilter) || '') ||
        (book.author?.toLowerCase().includes(lowerCaseFilter) || '') ||
        (book.publication_year?.toString().includes(lowerCaseFilter) || '')
      );
    });

    if (!isNaN(filter)) {
      const exactMatch = books.filter(book => book.price === parseFloat(filter));
      if (exactMatch.length > 0) {
        filtered = exactMatch;
      } else {
        const lowerPriceMatch = books.filter(book => book.price < parseFloat(filter));
        filtered = lowerPriceMatch.length > 0 ? lowerPriceMatch : [{ title: "沒有找到匹配價格的書藉", author: "", publication_year: "", price: "", cover_image: "/images/nothisbook.png" }];
      }
    }

    setFilteredBooks(filtered);
  };

  const handleReset = () => {
    setFilter('');
    setFilteredBooks(books.slice(0, 21));
  };

  return (
    <>
      <div className="mb-4 flex">
        <input
          type="text"
          placeholder="Filter by title, author, year, or price"
          value={filter}
          onChange={handleFilterChange}
          className="border p-2 mr-2 flex-grow"
          style={{width:'80%'}}
        />
        <Button variant="contained" color="primary" onClick={handleSearch} className="mr-2" style={{width:'10%'}}>
          <SearchIcon></SearchIcon> 查詢
        </Button>
        <Button variant="contained" color="secondary" onClick={handleReset} style={{width:'10%'}}> 
          重設
        </Button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {filteredBooks.map((book, index) => (
          <div key={book.id || index} className="border p-4 flex flex-col items-center">
            <h3 className="text-lg font-bold mb-2">{book.title}</h3>
            <p className="mb-1">Author: {book.author}</p>
            <p className="mb-1">Year: {book.publication_year}</p>
            <p className="mb-1">Price: ${book.price}</p>
            <Image src={book.cover_image} alt={book.title} width={1000} height={1000} 
              className="w-full h-auto hover:scale-110" style={{width:"300px",height:"300px"}} priority/>
            <div className="p-4">
              <Button variant="contained" color="primary" component={Link} href={`/books/${book.id}`}>
                詳細資料
              </Button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default BookFilter;

