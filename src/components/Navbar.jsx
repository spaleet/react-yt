import styled from "@emotion/styled";
import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import SearchBar from './SearchBar';

const Logo = styled('img')({
  height: '26px', width: 'auto'
})

const Navbar = () => (
  <Stack direction="row" alignItems="center" p={2} sx={{
    position: 'sticky', background: "#212121",
    top: 0, height: '28px',
    justifyContent: "space-between"
  }}>

    <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
      <Logo src="images/logo.png" alt="logo" />
    </Link>

    {/* <SearchBar /> */}

  </Stack>
)

export default Navbar
