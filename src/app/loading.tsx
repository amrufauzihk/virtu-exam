"use client"
import { Grid, Box, Typography, Container } from '@mui/material';

const Loading:React.FC = () => {
  return (
    <Container>
      <Box>
        <Grid container spacing={3}>
          <Typography>
            Page is Not Found
          </Typography>
        </Grid>
      </Box>
    </Container>
  )
}

export default Loading;
