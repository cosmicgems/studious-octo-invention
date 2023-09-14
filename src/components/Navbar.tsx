import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import theme from '@/styles/theme/lightThemeOptions';
import { grey } from '@mui/material/colors'
import Drawer from '@mui/material/Drawer';
import Hidden from '@mui/material/Hidden';
import { drawerPages } from '@/assets/drawer';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { getSession, signOut } from 'next-auth/react';
import SpaceDashboardRoundedIcon from '@mui/icons-material/SpaceDashboardRounded';

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
const mdDown = theme.breakpoints.down('md');

function Navbar() {
  const router = useRouter();
  const [loggedIn, setLoggedIn] = React.useState(false)
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleNavigate = (route:string) => {
    if (route === "login") {
      router.push(`/auth/${route}`);
    } else if (route === "sign-up") {
      router.push(`/${route}`)
    }
  }    
  
  React.useEffect(() => {
    const checkSession = async () => {
    const session = await getSession();
    if (session) {
        setLoggedIn(true)

    }
    };

    checkSession();
}, [router]);

  return (
    <>
      <AppBar className='grow-0' position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />

            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              LOGO
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
            </Box>

            {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}

            <Typography
              variant="h5"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                textDecoration: 'none',
                color: grey[50]
              }}
            >
              Credit Zen
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {drawerPages.map((page) => (
                <Button
                  key={page.name}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  {page.name}
                </Button>
              ))}
            </Box>

            <Box sx={{ flexGrow: 1 }}>


              {!loggedIn &&
                <div className='gap-3 flex flex-row'>
                    <Button className='' onClick={(e)=>{ handleNavigate("login")}} variant='contained' sx={{bgcolor: theme.palette.secondary.main, color: '#000',}}>
                      Login
                    </Button> 

                    <Button variant='contained' onClick={(e)=>{ handleNavigate("sign-up")}} sx={{bgcolor: theme.palette.secondary.main, color: '#000'}}>
                      Sign up
                    </Button>      
                </div>

              }
              {loggedIn &&
              <div className='flex gap-3'>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                  </IconButton>
                </Tooltip>
                <div className='gap-3 flex flex-row'>
                    <Button variant='contained' onClick={(e)=>{ signOut()}} sx={{bgcolor: theme.palette.secondary.main, color: '#000'}}>
                      Logout
                    </Button>      
                </div>
              </div>
              }



              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
              
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Hidden mdUp>
      <Drawer
        variant="temporary"
        anchor="left"
        open={Boolean(anchorElNav)}
        onClose={handleCloseNavMenu}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
      >
        <div className='flex flex-col gap-12' style={{padding: theme.spacing(3), }}>
          {/* Content of the drawer */}
          {drawerPages.map((page) => {
            if(loggedIn && page.name === "Client Login"){
              return (              
              <Link style={{textDecoration: 'none', color: grey[900]}} href="/dashboard" key="dashboard">
                <div className='flex flex-row items-center'>
                  <SpaceDashboardRoundedIcon sx={{fontSize: '2.5rem'}} />
                  <MenuItem onClick={handleCloseNavMenu}>
                    
                    <Typography textAlign="center">Dashboard</Typography>
                  </MenuItem>               
                </div>
              
              </Link>
              )
            }

            return(
              <Link style={{textDecoration: 'none', color: grey[900]}} href={page.path} key={page.name}>
                <div className='flex flex-row items-center'>
                  <page.icon sx={{fontSize: '2.5rem'}} />
                  <MenuItem onClick={handleCloseNavMenu}>
                    
                    <Typography textAlign="center">{page.name}</Typography>
                  </MenuItem>               
                </div>
              
              </Link>
            )


          })}          
        </div>

      </Drawer>
      </Hidden>    
    </>

  
    
  );
}
export default Navbar;