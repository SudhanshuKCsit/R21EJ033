import React from 'react';
import { Grid, Pagination } from '@mui/material';
import ProductCard from 'R21EJ033/product-app/src/components/productCard.js';
const ProductList = ({ products, page, setPage, totalPages }) => {
  return (
    <>
      <Grid container spacing={2}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
      <Pagination
        count={totalPages}
        page={page}
        onChange={(event, value) => setPage(value)}
        sx={{ mt: 2 }}
      />
    </>
  );
};

export default ProductList;
