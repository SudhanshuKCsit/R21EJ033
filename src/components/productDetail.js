import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../api/productApi';
import { Box, Typography, CardMedia } from '@mui/material';
const ProductDetail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    useEffect(() => {
        const fetchProduct = async () => {
            const response = await getProductById(id);
            setProduct(response.data);
        };
        fetchProduct();
    }, [id]);
    if (!product) return <div>Loading...</div>;
    return (
        <Box sx={{ p: 2 }}>
            <Typography variant="h4" gutterBottom>
                {product.name}
            </Typography>
            <CardMedia
                component="img"
                height="300"
                image={`https://via.placeholder.com/300?text=${product.name}`} 
                alt={product.name}
            />
            <Typography variant="h6">{product.company}</Typography>
            <Typography variant="body1">{product.category}</Typography>
            <Typography variant="body1">${product.price}</Typography>
            <Typography variant="body1">Rating: {product.rating}</Typography>
            <Typography variant="body1">Discount: {product.discount}%</Typography>
            <Typography variant="body1">
                {product.availability ? 'In Stock' : 'Out of Stock'}
            </Typography>
        </Box>
    );
};
export default ProductDetail;
