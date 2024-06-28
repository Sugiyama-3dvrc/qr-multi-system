import React from 'react';
import { Box, Button, TextField, Typography, Container } from '@mui/material';
import { useRouter } from 'next/router';

export default function Login() {
  const router = useRouter();

  const onClick = (event: { preventDefault: () => void; }) => {
    event.preventDefault(); // デフォルトのフォーム送信動作を防ぐ
    router.push('/home');
  };

  return (
    <Container maxWidth="xs">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: 8,
        }}
      >
        <Typography component="h1" variant="h5" sx={{ mb: 4 }}>
          ログイン
        </Typography>
        <Box component="form" noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="employeeId"
            label="従業員ID"
            name="employeeId"
            autoComplete="employee-id"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="パスワード"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={onClick}
          >
            ログイン
          </Button>
          <Button
            type="reset"
            fullWidth
            variant="outlined"
            sx={{ mt: 1 }}
          >
            リセット
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
