import '../../app/globals.css';
import Header from './components/header';
import Footer from './components/footer';
import Importimg from './components/importimg'

export default function Home() {

  return (
    <>

      <Header />
      
      <div className='relative container top-0 mb-20  border-dotted border-orange-500 border-y-2 min-w-full truncate shadow-md shadow-gray-500/50  hover:border-purple-600 hover:border-y-4' style={{top:'10vh',height:'80vh'}}>
      <div className='flex justify-start truncate' style={{ width: '70%', height: '80vh' }}>
        <Importimg className='object-cover'  />
      </div>
      </div>

      <Footer />
      
    </>
  );
}

