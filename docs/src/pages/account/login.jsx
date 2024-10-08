import { useState } from 'react';
import { Typography, Container, TextField, Button } from '@mui/material';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function Login() {
    const router = useRouter();
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // 這裡應該有處理用戶登錄的邏輯
        console.log('登錄資訊:', formData);
        // 模擬登錄過程
        await new Promise(resolve => setTimeout(resolve, 1000));
        // 登錄成功後導航到首頁
        router.push('/');
    };

    return (
        <Container maxWidth="sm" className="my-8">
            <Typography variant="h4" component="h1" gutterBottom>
                用戶登錄
            </Typography>
            <form onSubmit={handleSubmit}>
                <TextField
                    fullWidth
                    margin="normal"
                    name="email"
                    label="電子郵件"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <TextField
                    fullWidth
                    margin="normal"
                    name="password"
                    label="密碼"
                    type="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                />
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                    className="mt-4"
                >
                    登錄
                </Button>
            </form>
            <Typography className="mt-4 text-center">
                還沒有帳戶？ <Link href="/register">立即註冊</Link>
            </Typography>
        </Container>
    );
}