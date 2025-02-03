import { Box } from "@mui/material";
import Logout from "./logoutComponent";
import { useTheme } from '@/context/themeContext';
import DarkModeTwoToneIcon from '@mui/icons-material/DarkModeTwoTone';
import LightModeTwoToneIcon from '@mui/icons-material/LightModeTwoTone';
import cs from '@/styles/custom.module.css';

const NavBar = () => {
    const { theme, toggleTheme } = useTheme();

    return <Box className="nav">
        <Logout />
        {/*@ts-ignore */}
        {theme === 'dark' ? <LightModeTwoToneIcon className={`cursor-pointer ${cs.mr}`} onClick={toggleTheme} style={{ '--mr': '15px' }} /> : <DarkModeTwoToneIcon className={`cursor-pointer ${cs.mr}`} onClick={toggleTheme} style={{ '--mr': '15px' }}/>}
    </Box>
}

export default NavBar;