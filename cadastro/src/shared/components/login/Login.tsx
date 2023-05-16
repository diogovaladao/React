import { Box, Button, Card, CardActions, CardContent, TextField, Typography } from "@mui/material"
import { useState } from "react";
import { useAuthContext } from "../../contexts"
import * as yup from "yup";


const loginSchema = yup.object().shape({
    email: yup.string().required().email(),
    password: yup.string().required().min(5),
});

interface ILoginProps {
    children: React.ReactNode
};

export const Login: React.FC<ILoginProps> = ({ children }) => {
    const { isAuthenticated, login } = useAuthContext();

    const [passowrdError, setPassowrdError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passowrd, setPassowrd] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = () => {
        loginSchema.validate({ email, passowrd }, { abortEarly: false })
            .then(dadosValidados => {
                login(dadosValidados.email, dadosValidados.password);
            })
            .catch((erros: yup.ValidationError) => {
                erros.inner.forEach(error => {
                    if (error.path === 'email') {
                        setEmailError(error.message)
                    } else if (error.path === 'password') {
                        setPassowrdError(error.message)
                        console.log(passowrd)
                    }
                })
            });
    }

    if (isAuthenticated) {
        return (
            <>{children}</>
        );
    };

    return (
        <Box width='100vw' height='100vh' display='flex' alignItems='center' justifyContent='center'>
            <Card>
                <CardContent>
                    <Box display='flex' flexDirection='column' gap={2} width={250}>
                        <Typography variant="h6" align="center">Identifique-se</Typography>

                        <TextField
                            fullWidth
                            type='email'
                            label='Email'
                            value={email}
                            error={!!emailError}
                            helperText={emailError}
                            onChange={e => setEmail(e.target.value)}
                        />

                        <TextField
                            fullWidth
                            label='Senha'
                            type='password'
                            value={passowrd}
                            error={!!passowrdError}
                            helperText={passowrdError}
                            onChange={e => setPassowrd(e.target.value)}
                        />
                    </Box>
                </CardContent>
                <CardActions>
                    <Box width='100%' display='flex' justifyContent='center'>
                        <Button variant="contained" onClick={handleSubmit}>
                            Entrar
                        </Button>
                    </Box>
                </CardActions>
            </Card>
        </Box>
    );
};
