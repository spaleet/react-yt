import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Paper, IconButton, TextField, InputBase } from '@mui/material';
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
                p: '2px 4px', display: { md: 'flex', xs: 'none' }, alignItems: 'center', mr: 5,
                width: 350, borderRadius: "13px", border: '2px solid #872323', height: '46px'
            }}
        >
            <InputBase
                onInput={(e) => {
                    setSearchTerm(e.target.value);
                }}
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search ...."
                value={searchTerm}

            />
            <IconButton type='submit' sx={{ p: '10px', color: 'red' }}>
                <SearchIcon />
            </IconButton>

        </Paper>
    );
};

export default SearchBar;