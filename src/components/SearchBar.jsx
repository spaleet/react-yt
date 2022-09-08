import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Paper, IconButton, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    const onHandleSubmit = (e) => {
        e.preventDefault();

        if (searchTerm) {
            navigate(`/search?q=${searchTerm}`);
            setSearchTerm('');
        }
    };

    return (
        <Paper
            component='form'
            onSubmit={onHandleSubmit}
            sx={{
                borderRadius: 20,
                border: '1px solid #e3e3e3',
                pl: 2,
                boxShadow: 'none',
                mr: { sm: 5 },
                display: { md: 'flex', xs: 'none' }
            }}
        >
            <TextField
                onInput={(e) => {
                    setSearchTerm(e.target.value);
                }}
                variant="outlined"
                placeholder="Search..."
                size="small"
                sx={{ border: 'none', width: { md: '320px' } }}
            />
            <IconButton type='submit' sx={{ p: '10px', color: 'red' }} aria-label='search'>
                <SearchIcon />
            </IconButton>

        </Paper>
    );
};

export default SearchBar;