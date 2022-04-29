import {
    Box,
    Center,
    Text,
    Stack,
    Button,
    useColorModeValue,
} from '@chakra-ui/react';



export default function QuizFinishCard({ score, onClick }: { score: number; onClick: any; }) {
    return (
        <Center py={6}>
            <Box
                maxW={'330px'}
                w={'full'}
                bg={useColorModeValue('white', 'gray.800')}
                boxShadow={'2xl'}
                rounded={'md'}
                overflow={'hidden'}>
                <Stack
                    textAlign={'center'}
                    p={6}
                    color={useColorModeValue('gray.800', 'white')}
                    align={'center'}>
                    <Stack direction={'column'} align={'center'} justify={'center'}>
                        <Text fontSize={'6xl'} fontWeight={800}>
                            {score}
                        </Text>
                        <Text color={'gray.500'}>score</Text>
                    </Stack>
                </Stack>

                <Box bg={useColorModeValue('gray.50', 'gray.900')} px={6} py={10}>
                    <Button
                        mt={5}
                        w={'full'}
                        bg={'green.400'}
                        color={'white'}
                        rounded={'xl'}
                        onClick={onClick}
                        boxShadow={'0 5px 20px 0px rgb(72 187 120 / 43%)'}
                        _hover={{
                            bg: 'green.500',
                        }}
                        _focus={{
                            bg: 'green.500',
                        }}>
                        retry
                    </Button>
                </Box>
            </Box>
        </Center>
    );
}