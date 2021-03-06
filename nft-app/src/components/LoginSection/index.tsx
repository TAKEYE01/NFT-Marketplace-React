import { useForm } from 'react-hook-form';
import {
    LoginContainer,
    LoginBg,
    LoginContent
} from './LoginElements';
import {
    makeStyles,
    Typography,
    TextField,
    Button,
} from "@material-ui/core";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from 'react-router-dom';

interface IFormInput {
    username: string;
    password: string;
}

const schema = yup.object().shape({
    username: yup.string().required().max(25),
    password: yup.string().required().max(120),
});

const useStyles = makeStyles((theme) => ({
    heading: {
        textAlign: "center",
        margin: theme.spacing(1, 0, 4),
        paddingBottom: '20px',
        fontWeight: 600,
        borderBottom: '1px solid black',
    },
    submitButton: {
        marginTop: theme.spacing(4),
        backgroundColor: 'rgb(24,188,206)',
        '&:hover': {
            transition: 'all 300ms',
            backgroundColor: '#DDE4E6',
            border: '2px solid rgb(24, 188, 206)',
            color: '#000',
         },
    },
}));

const Login = ({setProfile} : {setProfile: React.Dispatch<React.SetStateAction<string>>}) => {

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<IFormInput>({
        resolver: yupResolver(schema),
        defaultValues: {
            username: "",
            password: "",
        }
    });

    const { heading, submitButton } = useStyles();

    const nav = useNavigate();


    const onSubmit = async (data: IFormInput) => {

        const res = await fetch("http://localhost:5000/auth/login", {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        }).then((res) => res.json());
        alert(JSON.stringify(`${res.status.message}`));
        {(`${res.status.message}` === 'User Logged in.' ? setProfile(JSON.stringify(data.username).replace(/\"/g, "")) : setProfile(""));} //setProfile to set profile name
        {if(`${res.accessToken}`) { localStorage.setItem("user", `${res.accessToken}`); }}
        reset();
        nav('/');
    };

    return(
        <LoginContainer>
            <LoginBg>
                <img style={{ objectFit: 'contain', maxHeight: '100%' }} src={require("../../images/nftmarket.png")} alt="Hero Background" />
            </LoginBg>
            <LoginContent>
                <Typography className={heading} variant='h3'>
                    Login Form 
                </Typography>
                <form onSubmit={handleSubmit(onSubmit)} noValidate>
                    <TextField
                        {...register("username")}
                        variant="outlined"
                        margin="normal"
                        label="Username"
                        helperText={errors.username?.message}
                        error={!!errors.username?.message}
                        fullWidth
                        required
                    />
                    <TextField
                        {...register("password")}
                        variant="outlined"
                        margin="normal"
                        label="Password"
                        helperText={errors.password?.message}
                        error={!!errors.password?.message}
                        type="password"
                        fullWidth
                        required
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={submitButton}
                    >
                        Login
                    </Button>
                </form>
            </LoginContent>
        </LoginContainer>
    )
}

export default Login;