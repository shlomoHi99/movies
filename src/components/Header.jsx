import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import { Link } from 'react-router-dom';

export default function Header() {
    const listStyle ='link-light text-decoration-none align-self-center mx-5'
        
    
  return (
    <div className='d-flex bg-black justify-content-start'>
        <Link className='col-1' to={''}><img className='col-8' src="https://bingeddata.s3.amazonaws.com/uploads/2022/08/IMDB.jpg" alt="logo" /></Link>
        <Link className={listStyle} to={'topRated'} >Top Rated</Link>
        <Link className={listStyle} to={'upcoming'} >Upcomig Movies</Link>
        <Link className={listStyle} to={'popular'} >Popular</Link>
    </div>
  )
}
