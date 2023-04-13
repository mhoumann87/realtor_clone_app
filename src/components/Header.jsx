import { useNavigate } from 'react-router';

import logo from '../images/logo.png';
import Nav from './Nav';

export default function Header() {
  const navigate = useNavigate();

  return (
    <div className='bg-white border-b shadow-sm sticky top-0 z-50'>
      <header className='flex justify-between items-center px-3 max-w-6xl mx-auto'>
        <img
          onClick={() => navigate('/')}
          src={logo}
          alt='A mock up logo'
          className='h-28 cursor-pointer'
        />
        <Nav />
      </header>
    </div>
  );
}
