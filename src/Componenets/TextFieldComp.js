import React from 'react'
import { Box, FormControl, TextField } from '@mui/material'
import { handleAmountChange } from '../Redux/Actions';
import { useDispatch } from 'react-redux';

const TextFieldComp = () => {
    const dispatch = useDispatch(); 

    const handleChange = (e) => {
        dispatch(handleAmountChange(e.target.value));
    }; 

    return (
        <Box mt={3} width="100%">
            <FormControl fullWidth size="small">
                <TextField
                    onChange={handleChange}
                    variant="outlined"
                    color="secondary"
                    label="Number of questions"
                    type="number"
                    size="small"
                />
            </FormControl>
        </Box>
    )
}

export default TextFieldComp