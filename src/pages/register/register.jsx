import { useState } from 'react';
import { Typography, Container, TextField, Button } from '@mui/material';
import { useRouter } from 'next/router';
import axios from 'axios';

export default function Register() {
    const router = useRouter();
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        let JedData = JSON.stringify(formData)
        const response = await fetch('http://localhost:8000/users', {
            method: "POST",
            body: JedData
        })
        const resData = await response.json()
        return resData
        // 模擬註冊過程
        // await new Promise(resolve => setTimeout(resolve, 1000));
        // 註冊成功後導航到登錄頁面
        // router.push('/login');
    };


    return (
        <Container maxWidth="sm" className="my-8">
            <Typography variant="h4" component="h1" gutterBottom>
                用戶註冊
            </Typography>
            <form onSubmit={handleSubmit}>
                <TextField
                    fullWidth
                    margin="normal"
                    name="username"
                    label="用戶名"
                    value={formData.username}
                    onChange={handleChange}
                    required
                />
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
                <TextField
                    fullWidth
                    margin="normal"
                    name="confirmPassword"
                    label="確認密碼"
                    type="password"
                    value={formData.confirmPassword}
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
                    註冊
                </Button>
            </form>
        </Container>
    );
}
