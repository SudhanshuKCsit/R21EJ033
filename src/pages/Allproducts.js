import React, { useState, useEffect } from 'react';
import { getProducts } from '../api/productApi';
import { Container, Typography } from '@mui/material';
import FilterBar from '..components/FilterBar';
import ProductList from '..components/ProductList';
const AllProducts = () => {
    const [filters, setFilters] = useState({
        category: '',
        company: '',
        rating: '',
        priceRange: '',
        availability: ''
    });
    const [products, setProducts] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    useEffect(() => {
        fetchProducts();
    }, [page]);
    const fetchProducts = async () => {
        const response = await getProducts({ ...filters, page });
        setProducts(response.data.products);
        setTotalPages(response.data.totalPages);
    };
    return (
        <Container>
            <Typography variant="h4" gutterBottom>
                All Products
            </Typography>
            <FilterBar filters={filters} setFilters={setFilters} fetchProducts={fetchProducts} />
            <ProductList products={products} page={page} setPage={setPage} totalPages={totalPages} />
        </Container>
    );
};

export default AllProducts;
