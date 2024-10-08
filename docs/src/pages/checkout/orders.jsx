import { useState, useEffect } from 'react';
import { Typography, Container, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';
import Link from 'next/link';

export default function Orders() {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        // 這裡應該從後端 API 獲取訂單數據
        const fetchOrders = async () => {
            // 模擬從 API 獲取數據
            const mockOrders = [
                { id: 1, date: '2024-05-01', total: 59.98, status: '已發貨' },
                { id: 2, date: '2023-05-15', total: 29.99, status: '處理中' },
            ];
            setOrders(mockOrders);
        };
        fetchOrders();
    }, []);

    return (
        <Container maxWidth="md" className="my-8">
            <Typography variant="h4" component="h1" gutterBottom>
                我的訂單
            </Typography>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>訂單編號</TableCell>
                            <TableCell>日期</TableCell>
                            <TableCell>總額</TableCell>
                            <TableCell>狀態</TableCell>
                            <TableCell>操作</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {orders.map((order) => (
                            <TableRow key={order.id}>
                                <TableCell>{order.id}</TableCell>
                                <TableCell>{order.date}</TableCell>
                                <TableCell>${order.total.toFixed(2)}</TableCell>
                                <TableCell>{order.status}</TableCell>
                                <TableCell>
                                    <Link href={`/orders/${order.id}`} passHref legacyBehavior>
                                        <Button variant="outlined" size="small">
                                            查看詳情
                                        </Button>
                                    </Link>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    );
}