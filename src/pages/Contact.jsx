import * as React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

// Define custom theme with "Oswald" font family
const theme = createTheme({
  typography: {
    fontFamily: [
      'Oswald',
      'sans-serif',
    ].join(','),
  },
});

export default function Contact() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  // Configuration for each text field
  const fields = [
    { name: 'firstName', label: 'First Name', autoComplete: 'given-name', autoFocus: true },
    { name: 'lastName', label: 'Last Name', autoComplete: 'family-name' },
    { name: 'email', label: 'Email Address', autoComplete: 'email' },
    { name: 'message', label: 'Message', multiline: true },
  ];

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <div>
            <h1 style={{ textAlign: 'center' }} className="pb-2 mx-5">Contact</h1>
            <p>Have a question, want to collaborate, or just chat about all things web development? I'd love to hear from you!</p>
            <p>Feel free to drop me a message using the form below or connect through my email and LinkedIn which can be found on my resume.</p>
            <p>Your thoughts and inquiries are always welcome, and I'll do my best to respond promptly. Let's start a conversation and explore the exciting possibilities together!</p>
          </div>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              {fields.map(field => (
                <Grid item xs={12} sm={(field.name === 'message' || field.name === 'email') ? 12 : 6} key={field.name} sx={{
                  '&:focus-within': {
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': { borderColor: '#800000' }
                    },
                    '& .MuiInputLabel-root': {
                      color: '#800000'
                    }
                  }
                }}>
                  <TextField
                    className="form-field"
                    required
                    fullWidth
                    id={field.name}
                    label={field.label}
                    name={field.name}
                    autoComplete={field.autoComplete}
                    autoFocus={field.autoFocus}
                    multiline={field.multiline || false} // Setting multiline to true for the message field
                    rows={4} // Setting initial number of rows
                  />
                </Grid>
              ))}
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                mt: 3,
                mb: 2,
                bgcolor: '#800000',
                color: '#D3D3D3',
                '&:hover': {
                  bgcolor: "rgb(219, 180, 51)",
                  color: 'BLACK'
                }
              }}
            >
              Send Inquiry
            </Button>
          </Box>
        </Box>
      </Container >
    </ThemeProvider>
  );
}
