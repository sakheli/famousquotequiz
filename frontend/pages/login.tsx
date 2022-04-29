
import {
    FormLabel,
    Input,
    Container,
    Divider,
    Button,
    FormErrorMessage
} from "@chakra-ui/react";
import { loginApi } from "actions/auth/loginApi";
import { useRouter } from "next/router";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";


type Inputs = {
    email: string,
    password: string,
};


const Login = () => {
    const [loginError, setLoginError] = useState<string>()
    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();
    const router = useRouter()

    const onSubmit: SubmitHandler<Inputs> = async data => {

        const [error, result] = await loginApi(data)
        console.log(error, result)
        if (error) {
            setLoginError(`${result}`)
        } else {
            router.push('/')
        }
    };


    return (
        <>
            <Container>
                <div className="form_container">
                    <span style={{ color: '#dd1211' }}>{loginError}</span>
                    <form onSubmit={handleSubmit(onSubmit)}>


                        <FormLabel htmlFor='email' margin={'1.5rem 0 .5rem 0'}>email</FormLabel>
                        <Input
                            id='email'
                            variant='filled'
                            placeholder='First name'
                            type='email'
                            {...register('email', { required: true })} />
                        {errors.email && <FormErrorMessage>This field is required</FormErrorMessage>}

                        <FormLabel htmlFor='password' margin={'1.5rem 0 .5rem 0'}>password</FormLabel>
                        <Input
                            id='password'
                            variant='filled'
                            placeholder='First name'
                            type='password'
                            {...register("password", { required: true })} />
                        {errors.password && <FormErrorMessage>This field is required</FormErrorMessage>}
                        <Divider margin={'1rem 0'} />


                        <Button
                            type="submit"
                            width={'100%'}
                            margin={'2rem 0'}
                            colorScheme='teal'
                            size='lg'>
                            login
                        </Button>
                    </form>
                </div>
            </Container>
        </>
    );
};

export default Login;