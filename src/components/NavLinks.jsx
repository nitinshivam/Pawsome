import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const links = [
  { id: 1, url: '/', text: 'home' },
  { id: 2, url: 'about', text: 'About' },
  { id: 3, url: 'products', text: 'Services' },
  { id: 4, url: 'appointments', text: 'Appointments' }
];

const NavLinks = () => {
  const user = useSelector((state) => state.userState.user.info);
  return (
    <>
      {links.map((link) => {
        const { id, url, text } = link;
        if ((url === 'checkout' || url === 'orders') && !user) return null;
        return (
          <li key={id}>
            <NavLink className='capitalize ' to={url}>
              {text}
            </NavLink>
          </li>
        );
      })}
    </>
  );
};
export default NavLinks;