import { useLocation, useNavigate } from 'react-router';

export default function Nav() {
  const location = useLocation();
  const navigate = useNavigate();

  const pathMatchRoute = route => (route === location.pathname ? true : false);

  return (
    <ul className='flex space-x-10'>
      <li
        className={`
        cursor-pointer text-lg font-semibold pb-4 text-gray-500 border-b-[3px] border-b-transparent
        ${pathMatchRoute('/') && 'text-black border-b-red-400'}
        `}
        onClick={() => navigate('/')}>
        Home
      </li>

      <li
        className={`
        cursor-pointer text-lg font-semibold pb-4 text-gray-500 border-b-[3px] border-b-transparent
      ${pathMatchRoute('/offers') && 'text-black border-b-red-400'}
      `}
        onClick={() => navigate('/offers')}>
        Offers
      </li>

      <li
        className={`
        cursor-pointer text-lg font-semibold pb-4 text-gray-500 border-b-[3px] border-b-transparent
      ${pathMatchRoute('/sign-in') && 'text-black border-b-red-400'}
      `}
        onClick={() => navigate('/sign-in')}>
        Sign In
      </li>
    </ul>
  );
}
