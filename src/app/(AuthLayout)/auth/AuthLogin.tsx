import React from "react";
import {
  Box,
  Typography,
  FormGroup,
  FormControlLabel,
  Button,
  Stack,
  Checkbox,
  Input,
  Alert,
  AlertTitle,
} from "@mui/material";
import { UserData } from "@/utils/AuthServices";
import theme from "@/utils/theme";

interface loginType {
  title?: string;
  subtitle?: JSX.Element | JSX.Element[];
  subtext?: JSX.Element | JSX.Element[];
  handleLogin: () => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  data: UserData;
  setData: (data: UserData) => void;
  showAlert: boolean;
}

const AuthLogin:React.FC<loginType> = ({ title, subtitle, subtext, handleLogin, data, setData, showAlert, handleChange }) => (
  <>
    {title ? (
      <Typography fontWeight="700" variant="h2" mb={1}>
        {title}
      </Typography>
    ) : null}

    {subtext}

    <Stack>
      <Box>
        <Typography
          variant="subtitle1"
          fontWeight={600}
          component="label"
          htmlFor="username"
          mb="5px"
        >
          Username
        </Typography>
        <Input type="text" name="userName" onChange={handleChange} fullWidth />
      </Box>
      <Box mt="25px">
        <Typography
          variant="subtitle1"
          fontWeight={600}
          component="label"
          htmlFor="password"
          mb="5px"
        >
          Password
        </Typography>
        <Input type="password" name="password" onChange={handleChange} fullWidth />
      </Box>
    </Stack>
    <Box>
      <Button
        color="primary"
        variant="contained"
        size="large"
        sx={{ marginTop: '2rem' }}
        fullWidth
        onClick={handleLogin}
      >
        Sign In
      </Button>
    </Box>
    { showAlert &&
      <Alert severity="error" sx={{ background: '#DC143C', marginTop: '1rem', color: "white" }}>
        <AlertTitle>Error</AlertTitle>
        Login Error— <strong>Username or Password is Wrong!</strong>
      </Alert>
    }
    {subtitle}
  </>
);

export default AuthLogin;
