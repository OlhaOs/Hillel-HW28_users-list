import './Albums.css';
import { Link } from 'react-router-dom';

export default function Albums({ list, handleClick }) {
  return (
    <>
      <Link to={`/`}>
        <button className='goBackBtn'>Go back</button>
      </Link>
      <ul className='listAlbum'>
        {list.map(item => (
          <li className='listItem' key={item.id}>
            {item.title}
            <Link to={`/photos/${item.id}`}>
              <button
                type='button'
                className='btn'
                onClick={() => handleClick(item.id)}
              >
                Photos
              </button>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
