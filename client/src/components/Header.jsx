
import {AppBar,Toolbar,styled} from '@mui/material';
import {Menu} from '@mui/icons-material';

const StyledHeader =styled(AppBar)`
background:#fff;
height:70px;
`
const MenuIcon=styled(Menu)`
color:#000;
`
const Image=styled('img')({
    height: 180,
    margin: '0 auto',
    marginTop: '-8 px',
    paddingRight: 70
})

const Header=function(){
    const url = '/applogo.png';
    return(
        <StyledHeader position='static'>
            <Toolbar>
                <MenuIcon />
                <Image src={url} alt='logo' />
            </Toolbar>
        </StyledHeader>
    )
}
export default Header;