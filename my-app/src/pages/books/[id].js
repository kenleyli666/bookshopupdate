import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Typography, Container, Grid, Button, TextField, CircularProgress, Snackbar } from '@mui/material';
import axios from 'axios';

export default function BookDetail() {
    const router = useRouter();
    const { id } = router.query;
    const [book, setBook] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [snackbarOpen, setSnackbarOpen] = useState(false);

    useEffect(() => {
        const fetchBook = async () => {
            if (!id) return; // Exit if ID is not available
            setLoading(true);
            setError(null);
            try {
                const response = await axios.get('https://kenleyli666.github.io/booksApi/books.json');
                const books = response.data;
                const foundBook = books.find(b => b.id == parseInt(id, 10));

                if (foundBook) {
                    setBook(foundBook);
                } else {
                    setError('書籍未找到。'); // Set error if book not found
                }
            } catch (error) {
                setError('Error fetching book details. Please try again later.');
            } finally {
                setLoading(false);
            }
        };

        fetchBook();
    }, [id]);

    const addToCart = () => {
        console.log(`Added ${quantity} of book ${id} to cart`);
        setSnackbarOpen(true);
    };

    const handleSnackbarClose = () => {
        setSnackbarOpen(false);
    };

    if (loading) return <CircularProgress />;

    // This will handle the case when the book is not found
    if (error) return <div>{error}</div>;

    // This will handle the case when book data is not available
    if (!book) return <div>書籍未找到。</div>;

    return (
        <Container maxWidth="md" className="my-8">
            <Grid container spacing={4}>
                <Grid item xs={12} md={6}>
                    <img src={book.cover_image} alt={book.title} className="w-full rounded-lg shadow-lg" />
                </Grid>
                <Grid item xs={12} md={6}>
                    <Typography variant="h4" component="h1" gutterBottom>
                        {book.title}
                    </Typography>
                    <Typography variant="h6" gutterBottom>
                        作者：{book.author}
                    </Typography>
                    <Typography variant="body1" paragraph>
                        {book.description}
                    </Typography>
                    <Typography variant="h6" gutterBottom>
                        價格：${book.price}
                    </Typography>
                    <div className="flex items-center gap-4 my-4">
                        <TextField
                            type="number"
                            label="數量"
                            value={quantity}
                            onChange={(e) => {
                                const value = Math.max(1, parseInt(e.target.value) || 1);
                                setQuantity(value);
                            }}
                            inputProps={{ min: 1 }}
                        />
                        <Button variant="contained" color="primary" onClick={addToCart}>
                            加入購物車
                        </Button>
                    </div>
                </Grid>
            </Grid>
            <Snackbar
                open={snackbarOpen}
                autoHideDuration={3000}
                onClose={handleSnackbarClose}
                message={`${quantity} 本書已加入購物車`}
            />
        </Container>
    );
}