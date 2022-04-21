import React from 'react'
import { Box } from "@mui/system"
import { Button, Typography } from '@mui/material'
import { useSelector } from '@mui/base'
import { useDispatch } from 'react-redux'
import { handleAmountChange, handleScoreChange } from '../Redux/Actions'
import { useHistory } from 'react-router-dom'

const Results = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { score } = useSelector(state => state);

  const handleBackToSettings = () => {
    dispatch(handleScoreChange(0))
    dispatch(handleAmountChange(10))
    history.push("/")
  }

  return (
    <Box mt={30}>
      <Typography variant="h3" fontWeight="bold" mb={3}>Final Score {score}</Typography>
      <Button variant="outlined" onclick={handleBackToSettings}>back to settings!</Button>
    </Box>
  )
}

export default Results