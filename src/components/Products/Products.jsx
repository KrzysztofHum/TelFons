import React from 'react';
import {Grid} from '@material-ui/core';

import Product from './Product/Product';
import useStyles from './styles';

import beer from '../../assets/img/beer.jpg';
import beer1 from '../../assets/img/beer1.jpg';

const products = [
    {id: 1, name: 'strong beer', description: 'good.', price: '$5', image: beer},
    {id: 2, name: 'very strong beer', description: 'Good good.', price: '$10', image: beer1},
]

const Products = () => {
    const classes = useStyles();
    
    return (
    <main className={classes.content}>
        <div className={classes.toolbar}/>
        <Grid container justify="center" spacing={4}>
            {products.map((product) => (
                <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                    <Product product={product} />
                </Grid>
            ))}
        </Grid>
    </main>        
    );
}

export default Products;