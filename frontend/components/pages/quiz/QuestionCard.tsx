import {
    Box,
    Center,
    Text,
    Stack,
    useColorModeValue,
    Button,
    RadioGroup,
    Radio,
} from '@chakra-ui/react';
import { useState } from 'react';



interface IQuestionCard {
    questionAmount;
    questionNumber: number;
    questionText: string;
    onClick: (answer: number[]) => void;
    options: string[];
}


export default function QuestionCard(
    { questionAmount, questionNumber, questionText, onClick, options }: IQuestionCard) {

    const [answers, setanswer] = useState<number[]>();
    const [value, setValue] = useState("");
    const [buttonDisable, setButtonDisable] = useState(false);


    return (
        <Center py={6}>
            <Box
                maxW={'445px'}
                w={'full'}
                bg={useColorModeValue('white', 'gray.900')}
                boxShadow={'2xl'}
                rounded={'md'}
                p={6}
                overflow={'hidden'}>
                <Stack>
                    <Text
                        color={'green.500'}
                        textTransform={'uppercase'}
                        fontWeight={800}
                        fontSize={'large'}
                        letterSpacing={1.1}>
                        {`${questionNumber}/${questionAmount}`}
                    </Text>
                    <Text color={'gray.500'}>
                        {questionText}
                    </Text>


                    <RadioGroup
                        value={value}
                        mb='2rem'
                        onChange={value => {
                            setValue(value);
                            setanswer([+value]);
                        }}>
                        <Stack spacing={[1, 5]} direction={['column']}>
                            {options.map((val, i) => {
                                return val.length > 0 && (
                                    <Radio
                                        disabled={buttonDisable}
                                        key={val}
                                        value={`${i + 1}`}>
                                        {val}
                                    </Radio>
                                );
                            })}
                        </Stack>
                    </RadioGroup>


                    <Button
                        onClick={() => {
                            if (answers!) {
                                onClick([...new Set(answers!)]);
                                setButtonDisable(true);
                            }
                        }}
                        as={'button'}
                        bg={'black'}
                        fontSize={'lg'}
                        fontWeight={500}
                        color='white'
                        variant={'solid'}
                        disabled={buttonDisable}
                        _hover={{
                            bg: 'gray.300',
                            color: 'black'
                        }}>
                        answer
                    </Button>
                </Stack>
            </Box>
        </Center>
    );
}