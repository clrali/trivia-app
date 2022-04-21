import { Button, Select, Box, Typography, CircularProgress } from '@mui/material'
import React from 'react'
import SelectField from '../Componenets/SelectField'
import TextFieldComp from '../Componenets/TextFieldComp'
import useAxios from '../Hooks/useAxios'
import { useHistory } from "react-router-dom";


const Settings = () => {

  const {response, error, loading} = useAxios({ url: "/api_category.php"})
  const history = useHistory()
  
  if(loading) {
    return (
      <Box mt={20}>
        <CircularProgress />
      </Box>
    )
  }

  if(error) {
    return (
      <Typography variant="h6" mt={20} color="red"> 
        Please fill out all fields
      </Typography>
    )
  }

  const difficultyOptions = [
    { id: "easy", name: "Easy" },
    { id: "medium", name: "Medium" },
    { id: "hard", name: "Hard" },
  ]

  const typeOptions = [
    { id: "multiple", name: "Multiple Choice" },
    { id: "boolean", name: "True/False"},
  ]

  const handleSubmit = (e) => {
    e.preventDefault(); 
    history.push("/questions")
  }

  return (
    <form onSubmit={handleSubmit}>
      <SelectField options={response.trivia_categories} label="Category"/>
      <SelectField options={difficultyOptions} label="Difficulty"/>
      <SelectField options={typeOptions} label="Type"/>
      <TextFieldComp />
      <Box mt={3} width="100%">
        <Button fullWidth variant="contained" type="submit">
          Start Quiz!
        </Button>
      </Box>
    </form>
  )
}

export default Settings