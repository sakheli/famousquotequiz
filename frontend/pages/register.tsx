
import {
    FormLabel,
    Input,
    Container,
    Divider,
    Button,
    FormErrorMessage
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { registerApi } from "../actions/auth/registerApi";


type Inputs = {
    name: string,
    lastname: string,
    email: string,
    password: string,
    repeatPassword?: string,
};



const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>()
    const [emailExistsError, setEmailExistsError] = useState<string>()
    const [repeatPasswordError, setRepeatPasswordError] = useState<string>()
    const router = useRouter()

    const onSubmit: SubmitHandler<Inputs> = async data => {
        if (data.password != data.repeatPassword) {
            setRepeatPasswordError("Password must match")
            return;
        }

        delete data.repeatPassword;
        const [error, result] = await registerApi(data)
        if (error) {
            setEmailExistsError(`${result}`)
        } else {
            router.push('/')
        }
    };

    return (
        <>
            <Container>
                <div className="form_container">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <FormLabel htmlFor='name' margin={'1.5rem 0 .5rem 0'}>name</FormLabel>
                        <Input
                            id='name'
                            variant='filled'
                            placeholder='name'
                            type='text'
                            {...register('name', { required: true })} />
                        {errors.name && <FormErrorMessage>This field is required</FormErrorMessage>}

                        <FormLabel htmlFor='lastname' margin={'1.5rem 0 .5rem 0'}>lastname</FormLabel>
                        <Input
                            id='lastname'
                            variant='filled'
                            placeholder='lastname'
                            type='text'
                            {...register('lastname', { required: true })} />
                        {errors.lastname && <FormErrorMessage>This field is required</FormErrorMessage>}

                        <FormLabel htmlFor='email' margin={'1.5rem 0 .5rem 0'}>email</FormLabel>
                        <Input
                            id='email'
                            variant='filled'
                            placeholder='email'
                            type='email'
                            {...register('email', {
                                required:
                                {
                                    value: true,
                                    message: "This field is required"

                                }, pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: "invalid email address"
                                }
                            })} />
                        {errors.email && <FormErrorMessage>erros.email.message</FormErrorMessage>}
                        <span style={{ color: '#dd1211' }}>{emailExistsError}</span>

                        <FormLabel htmlFor='password' margin={'1.5rem 0 .5rem 0'}>password</FormLabel>
                        <Input
                            id='password'
                            variant='filled'
                            placeholder='password'
                            type='password'
                            {...register("password", { required: true })} />
                        {errors.password && <FormErrorMessage>This field is required</FormErrorMessage>}

                        <FormLabel htmlFor='repeatPassword' margin={'1.5rem 0 .5rem 0'}>Confirm password</FormLabel>
                        <Input
                            id='repeatPassword'
                            variant='filled'
                            placeholder='repeat password'
                            type='password'
                            {...register("repeatPassword", { required: true })} />
                        {repeatPasswordError != "" && <span style={{ color: '#dd1211' }}>{repeatPasswordError}</span>}
                        <Divider margin={'1rem 0'} />


                        <Button
                            type="submit"
                            width={'100%'}
                            margin={'2rem 0'}
                            colorScheme='teal'
                            size='lg'>
                            submit
                        </Button>
                    </form>
                </div>
            </Container>
        </>
    );
};

export default Register;