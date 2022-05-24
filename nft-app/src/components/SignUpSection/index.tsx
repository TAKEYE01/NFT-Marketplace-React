import React from 'react';
import { useState } from "react";
import { useForm } from "react-hook-form";
import {
    SignupContainer,
    SignupBg,
    SignupContent
  
  } from './SignUpElements';
import {
  makeStyles,
  Typography,
  TextField,
  Button,
} from "@material-ui/core";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

interface IFormInput {
    Email: string;
    Username: string;
    Password: string;
}

const schema = yup.object().shape({
    Email: yup.string().required().email(),
    Username: yup.string().required().min(2).max(25),
    Password: yup.string().required().min(8).max(120),
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

const Signup = () => {

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<IFormInput>({
        resolver: yupResolver(schema),
        defaultValues: {
            Email: "",
            Username: "",
            Password: "",
        }
    });

    const { heading, submitButton } = useStyles();

    const [json, setJson] = useState<string>();

    const onSubmit = (data: IFormInput) => {
        setJson(JSON.stringify(data));
        reset();
    };

    return (
        <SignupContainer>
        <SignupBg>
            <img style={{ objectFit: 'contain', maxHeight: '100%' }} src={require("../../images/nftmarket.png")} alt="Hero Background" />
        </SignupBg>
        <SignupContent>
            <Typography className={heading} variant="h3">
                Sign Up Form
            </Typography>
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
                <TextField
                    {...register("Email")}
                    variant="outlined"
                    margin="normal"
                    label="Email"
                    helperText={errors.Email?.message}
                    error={!!errors.Email?.message}
                    fullWidth
                    required
                />
                <TextField
                    {...register("Username")}
                    variant="outlined"
                    margin="normal"
                    label="Username"
                    helperText={errors.Username?.message}
                    error={!!errors.Username?.message}
                    fullWidth
                    required
                />
                <TextField
                    {...register("Password")}
                    variant="outlined"
                    margin="normal"
                    label="Password"
                    helperText={errors.Password?.message}
                    error={!!errors.Password?.message}
                    type="Password"
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
                    Sign Up
                </Button>
                {json && (
                    <>
                        <Typography variant="body1">
                            Below is the JSON that would pass to backend server.
                        </Typography>
                        <Typography variant="body2">{json}</Typography>
                    </>
                )}
            </form>
        </SignupContent>
        </SignupContainer>
    )
}

export default Signup;