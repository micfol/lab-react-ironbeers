import header from '../assets/Header.png'
import { Link } from '@mui/material';

export const Header = () => {
    return (
        <div>
        <Link href="/">
            <img src={header} alt="Header Bar" style={{maxWidth: '100%'}}/>
        </Link>    
        </div> 
    )
};