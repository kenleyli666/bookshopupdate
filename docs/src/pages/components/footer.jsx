import { Typography, Container, Link as MuiLink } from '@mui/material';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="relative bg-gray-200 py-6 mt-auto">
            <Container maxWidth="lg">
                <Typography variant="body2" color="text.secondary" align="center">
                    © {new Date().getFullYear()} 網上書店. 版權所有.
                </Typography>
                <Typography variant="body2" color="text.secondary" align="center">
                    <MuiLink href="/aboutus" color="inherit">
                        關於我們
                    </MuiLink>
                    {' | '}
                    <MuiLink href="/contact" color="inherit">
                        聯繫我們
                    </MuiLink>
                    {' | '}
                    <MuiLink href="/privacy" color="inherit">
                        隱私政策
                    </MuiLink>
                </Typography>
            </Container>
        </footer>
    );
}