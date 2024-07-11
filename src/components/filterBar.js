import React from 'react';
import { Box, TextField, MenuItem, Button } from '@mui/material';
const categories = ['Electronics', 'Clothing', 'Books'];
const companies = ['Amazon', 'eBay', 'Walmart'];
const FilterBar = ({ filters, setFilters, fetchProducts }) => {
    const handleChange = (event) => {
        setFilters({ ...filters, [event.target.name]: event.target.value });
    };

    return (
        <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
            <TextField
                select
                label="Category"
                name="category"
                value={filters.category}
                onChange={handleChange}
                variant="outlined"
            >
                {categories.map((category) => (
                    <MenuItem key={category} value={category}>
                        {category}
                    </MenuItem>
                ))}
            </TextField>
            <TextField
                select
                label="Company"
                name="company"
                value={filters.company}
                onChange={handleChange}
                variant="outlined"
            >
                {companies.map((company) => (
                    <MenuItem key={company} value={company}>
                        {company}
                    </MenuItem>
                ))}
            </TextField>
            <TextField
                label="Min Rating"
                name="rating"
                type="number"
                value={filters.rating}
                onChange={handleChange}
                variant="outlined"
            />
            <TextField
                label="Price Range"
                name="priceRange"
                type="text"
                placeholder="e.g. 10-100"
                value={filters.priceRange}
                onChange={handleChange}
                variant="outlined"
            />
            <Button variant="contained" onClick={fetchProducts}>
                Apply Filters
            </Button>
        </Box>
    );
};

export default FilterBar;
