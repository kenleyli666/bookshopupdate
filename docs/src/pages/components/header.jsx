import { AppBar, Toolbar, Typography, Button, IconButton, Badge } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Navbar() {
    const router = useRouter();
    // 這裡應該從全局狀態獲取購物車項目數量
    const cartItemsCount = 0;

    return (
        <>

<AppBar className='fixed z-50 top-0 border-orange-500 border-solid border-t-4 max-w-full truncate hover:bg-sky-500' style={{minHeight:'10vh'}}>
            <Toolbar >
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    <Link href="/" className="text-white no-underline">
                        網上書店
                    </Link>
                </Typography>
                
                <Button className='hover:underline' color="inherit" onClick={() => router.push('../books/')}>
                    書藉
                </Button>
                <Button className='hover:underline' color="inherit" onClick={() => router.push('../account/login')}>
                    登錄
                </Button>
                <Button className='hover:underline' color="inherit" onClick={() => router.push('../account/register')}>
                    註冊
                </Button>
                <IconButton color="inherit" onClick={() => router.push('../checkout/cart')}>
                    <Badge badgeContent={cartItemsCount} color="error">
                        <ShoppingCartIcon />
                    </Badge>
                </IconButton>
                <Button className='hover:underline' color="inherit" onClick={() => router.push('../checkout/orders')}>
                    訂單
                </Button>
            </Toolbar>
        </AppBar>

        </>
    );
}


