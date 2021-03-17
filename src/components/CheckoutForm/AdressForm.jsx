import React, {useState, useEffect} from 'react';
import { InputLabel, Select, MenuItem, Button, Grid, Typography} from '@material-ui/core';
import {useForm, FormProvider} from 'react-hook-form';

import {commerce} from '../../lib/commerce';

import FormInput from './CustomTextField';

const AdressForm = ( {checkoutToken}) => {
    const [shippingCounteries, setshippingCounteries] = useState([]);
    const [shippingCountry, setshippingCountry] = useState('');
    const [shippingSubdivisions, setshippingSubdivisions] = useState([]);
    const [shippingSubdivision, setshippingSubdivision] = useState('');
    const [shippingOptions, setshippingOptions] = useState([]);
    const [shippingOption, setshippingOption] = useState('');
    const methods = useForm();

    const fetchShippingCounteries = async (checkoutTokenId) => {
        const {counteries} = await commerce.services.localeListShippingCounteries(checkoutTokenId);

        setshippingCounteries(counteries);
        setshippingCountry(Object.keys(countries)[0]);
    }

    useEffect(() => {
        fetchShippingCounteries(checkoutToken.id)
    }, []);

    return (
        <>
            <Typography variant="h6" gutterBottom>Shipping Adress</Typography>
            <FormProvider {...methods}>
                <form onSubmit=''>
                    <Grid container spacing={3}>
                        <FormInput required name='firstname' label='First name'/>
                        <FormInput required name='lastname' label='Last name'/>
                        <FormInput required name='adress1' label='Adress'/>
                        <FormInput required name='email' label='Email'/>
                        <FormInput required name='city' label='City'/>
                        <FormInput required name='zip' label='FZIP / Postal code'/>
                        {/* <Grid item xs={12} sm={6}>
                            <InputLabel>Shipping Country</InputLabel>
                            <Select value={} fullWidth onChange={}>
                                <MenuItem key={} value={}>
                                    Select Me
                                </MenuItem>
                            </Select>
                        </Grid>
                        <FormInput required name='zip' label='FZIP / Postal code'/>
                        <Grid item xs={12} sm={6}>
                            <InputLabel>Shipping Subdivision</InputLabel>
                            <Select value={} fullWidth onChange={}>
                                <MenuItem key={} value={}>
                                    Select Me
                                </MenuItem>
                            </Select>
                        </Grid>
                        <FormInput required name='zip' label='FZIP / Postal code'/>
                        <Grid item xs={12} sm={6}>
                            <InputLabel>Shipping Options</InputLabel>
                            <Select value={} fullWidth onChange={}>
                                <MenuItem key={} value={}>
                                    Select Me
                                </MenuItem>
                            </Select>
                        </Grid> */}
                    </Grid>
                </form>
            </FormProvider>
        </>
    )
}

export default AdressForm

