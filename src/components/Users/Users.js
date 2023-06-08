import './Users.css';
import { Link } from 'react-router-dom';

export default function Users({ list, handleClick }) {
  return (
    <ul className='listUser'>
      {list.map(item => (
        <li className='listItem' key={item.id}>
          {item.name}
          <Link to={`/albums/${item.id}`}>
            <button
              type='button'
              className='btn'
              onClick={() => handleClick(item.id)}
            >
              Album
            </button>
          </Link>
        </li>
      ))}
    </ul>
  );
}
