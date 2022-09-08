import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import SearchBar from './SearchBar';

const Navbar = () => (
  <Stack direction="row" alignItems="center" p={2} sx={{
    position: 'sticky', background: "#212121",
    top: 0, height: '3.5rem',
    justifyContent: "space-between"
  }}>

    <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
      <img src="/images/logo.png" alt="logo" style={{ height: '26px', width: 'auto' }} />
    </Link>

    <SearchBar />

  </Stack>
)

export default Navbar
