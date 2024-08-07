import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
const ProductCard = ({ product }) => {
    return (
        <Card>
            <CardMedia
                component="img"
                height="140"
                image={`https://via.placeholder.com/150?text=${product.name}`}
                alt={product.name}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    <Link to={`/products/${product.id}`}>{product.name}</Link>
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {product.company}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {product.category}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    ${product.price}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Rating: {product.rating}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Discount: {product.discount}%
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {product.availability ? 'In Stock' : 'Out of Stock'}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default ProductCard;
