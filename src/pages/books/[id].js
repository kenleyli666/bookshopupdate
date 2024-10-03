import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Typography, Container, Box, Button, TextField, Snackbar } from '@mui/material';
import axios from 'axios';

export default function BookDetail() {
    const router = useRouter();
    const { id } = router.query;
    const [book, setBook] = useState(null);
    const [amount, setAmount] = useState(1);
    const [snackbarOpen, setSnackbarOpen] = useState(false);

    useEffect(() => {
        const fetchBook = async () => {
            if (!id) return;
            try {
                const response = await axios.get('https://kenleyli666.github.io/booksApi/books.json');
                const books = response.data;
                const foundBook = books.find(b => b.id == parseInt(id, 10));

                if (foundBook) {
                    setBook(foundBook);
                } else {
                    setBook(null);
                }
            } catch (error) {
                console.error('Error fetching book details:', error);
                setBook(null);
            }
        };

        fetchBook();
    }, [id]);

    const addToCart = () => {
        console.log(`Added ${amount} of book ${id} to cart`);
        setSnackbarOpen(true);
    };

    const handleSnackbarClose = () => {
        setSnackbarOpen(false);
    };

    if (!book) return <div>書籍未找到。</div>;

    return (
        <Container maxWidth="md" sx={{ my: 8 }}>
            <Box display="flex" flexDirection={{ xs: 'column', md: 'row' }} gap={4}>
                <Box flex={1}>
                    <img src={book.cover_image} alt={book.title} style={{ width: '100%', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }} />
                </Box>
                <Box flex={1}>
                    <Typography variant="h4" component="h1" gutterBottom>
                        {book.title}
                    </Typography>
                    <Typography variant="h6" gutterBottom>
                        作者：{book.author}
                    </Typography>
                    <Typography variant="body1" component="p">
                        {book.description}
                    </Typography>
                    <Typography variant="h6" gutterBottom>
                        價格：${book.price}
                    </Typography>
                    <Box display="flex" alignItems="center" gap={2} my={4}>
                        <TextField
                            type="number"
                            label="數量"
                            value={amount}
                            onChange={(e) => setAmount(Math.max(1, parseInt(e.target.value) || 1))}
                            inputComponent={(props) => <InputBase {...props} inputProps={{ min: 1 }} />}
                        />
                        <Button variant="contained" color="primary" onClick={addToCart}>
                            加入購物車
                        </Button>
                    </Box>
                </Box>
            </Box>
            <Snackbar
                open={snackbarOpen}
                autoHideDuration={3000}
                onClose={handleSnackbarClose}
                message={`${amount} 本書已加入購物車`}
            />
        </Container>
    );
}
