import { useState, useEffect } from 'react';
import { Typography, Container, Grid, Button, TextField, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import Link from 'next/link';

export default function Cart() {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        // 從本地存儲或後端 API 獲取購物車數據
        const fetchCartItems = async () => {
            // 這裡應該是從 API 獲取數據的邏輯
            const mockCartItems = [
                { id: 1, title: '範例書籍 1', price: 29.99, quantity: 2 },
                { id: 2, title: '範例書籍 2', price: 19.99, quantity: 1 },
            ];
            setCartItems(mockCartItems);
        };
        fetchCartItems();
    }, []);

    const updateQuantity = (id, newQuantity) => {
        setCartItems(cartItems.map(item =>
            item.id === id ? { ...item, quantity: Math.max(1, newQuantity) } : item
        ));
    };

    const removeItem = (id) => {
        setCartItems(cartItems.filter(item => item.id !== id));
    };

    const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <Container maxWidth="md" className="my-8">
            <Typography variant="h4" component="h1" gutterBottom>
                購物車
            </Typography>
            {cartItems.length === 0 ? (
                <Typography>您的購物車是空的。</Typography>
            ) : (
                <>
                    <Grid container spacing={2} className="mb-4">
                        {cartItems.map((item) => (
                            <Grid item xs={12} key={item.id} className="flex items-center justify-between border-b py-2">
                                <div>
                                    <Typography variant="h6">{item.title}</Typography>
                                    <Typography variant="body2">單價：${item.price}</Typography>
                                </div>
                                <div className="flex items-center gap-2">
                                    <TextField
                                        type="number"
                                        value={item.quantity}
                                        onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                                        inputProps={{ min: 1 }}
                                        className="w-16"
                                    />
                                    <IconButton onClick={() => removeItem(item.id)}>
                                        <DeleteIcon />
                                    </IconButton>
                                </div>
                            </Grid>
                        ))}
                    </Grid>
                    <Typography variant="h5" className="text-right mb-4">
                        總計：${total.toFixed(2)}
                    </Typography>
                    <div className="flex justify-end">
                        <Link href="/checkout" passHref legacyBehavior>
                            <Button variant="contained" color="primary">
                                結帳
                            </Button>
                        </Link>
                    </div>
                </>
            )}
        </Container>
    );
}