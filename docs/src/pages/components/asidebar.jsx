import WidgetsRoundedIcon from '@mui/icons-material/WidgetsRounded';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LockOpenRoundedIcon from '@mui/icons-material/LockOpenRounded';
import HowToRegRoundedIcon from '@mui/icons-material/HowToRegRounded';
import ReceiptIcon from '@mui/icons-material/Receipt';
import { useRouter } from 'next/router';

export default function Toggle({ onClick, isOpen }) {
    const router = useRouter();

    return (
        <>
            <div className={`p-1 border-4 border-solid rounded-full ${isOpen ? 'bg-rose-500' : ''}`} onClick={onClick}>
                <WidgetsRoundedIcon className='text-white' />
            </div>
            <div 
                className={`asidebar fixed z-50 top-0 left-0 h-full bg-sky-500 text-white transition-transform transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} w-full md:w-1/2 lg:w-1/4`}
                style={{ height: '90vh', top: '10vh', border:'3px solid #fff ' }}
            >
                <ul className='tracking-widest text-xl font-semibold ' >
                    <li className='flex items-center justify-center space-x-6 hover:underline cursor-pointer h-[10vh] hover:bg-orange-500' style={{borderBottom:'3px solid #fff'}} onClick={() => router.push('../books/')}>
                        <MenuBookIcon className='text-white' />
                        <span className='ml-2'>書藉</span>
                    </li>
                    <li className='flex items-center justify-center space-x-6 hover:underline cursor-pointer h-[10vh] hover:bg-orange-500' style={{borderBottom:'3px solid #fff'}} onClick={() => router.push('../account/login')}>
                        <LockOpenRoundedIcon className='text-white' />
                        <span className='ml-2'>登錄</span>
                    </li>
                    <li className='flex items-center justify-center space-x-6 hover:underline cursor-pointer h-[10vh] hover:bg-orange-500' style={{borderBottom:'3px solid #fff'}} onClick={() => router.push('../account/register')}>
                        <HowToRegRoundedIcon className='text-white' />
                        <span className='ml-2'>註冊</span>
                    </li>
                    <li className='flex items-center justify-center space-x-6 hover:underline cursor-pointer h-[10vh] hover:bg-orange-500' style={{borderBottom:'3px solid #fff'}} onClick={() => router.push('../checkout/cart')}>
                        <ShoppingCartIcon className='text-white' />
                        <span className='ml-2'>購物車</span>
                    </li>
                    <li className='flex items-center justify-center space-x-6 hover:underline cursor-pointer h-[10vh] hover:bg-orange-500' style={{borderBottom:'3px solid #fff'}} onClick={() => router.push('../checkout/orders')}>
                        <ReceiptIcon className='text-white' />
                        <span className='ml-2'>訂單</span>
                    </li>
                </ul>
            </div>
        </>
    );
}

