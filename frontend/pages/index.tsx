import { Container, Flex, Heading, Link, List, ListIcon, ListItem } from "@chakra-ui/react";
import { questionsApi } from "actions/questionSession/questionsApi";
import { GetServerSideProps } from "next";

const Index = ({ questions }) => {

    return (
        <div className="index_main">
            <Flex
                my={20}
                justifyContent={'center'}>
                <Heading>
                    Quizzes
                </Heading>
            </Flex>
            <Container>
                <List spacing={3}>
                    {questions.map((question, i) => (
                        <ListItem>
                            <ListIcon color="green.500" />
                            <Link
                                p={2}
                                href={`quiz/${question.id}`}
                                fontSize={'sm'}
                                fontWeight={500}

                                _hover={{
                                    textDecoration: 'none',
                                }}>
                                {question.title}
                            </Link>
                        </ListItem>
                    ))}
                </List>
            </Container>
        </div>
    );
};


export const getServerSideProps: GetServerSideProps = async () => {
    let questions = await questionsApi()
    questions = questions[1]

    return {
        props: {
            questions
        }
    };
};

export default Index;