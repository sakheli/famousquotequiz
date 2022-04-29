import { Button, Container, Flex, Heading } from "@chakra-ui/react";
import QuestionCard from "components/pages/quiz/QuestionCard";
import QuizFinishCard from "components/pages/quiz/QuizFinishCard";
import { useRouter } from "next/router";
import { useState, useEffect } from 'react';
import { GetServerSideProps } from 'next';
import { useCookies } from "react-cookie";
import { questionsNoAnswerApi } from "actions/questionSession/questionsNoAnswerApi";
import * as cookie from 'cookie'
import { getAnswerApi } from "actions/questionSession/getAnswerApi";
import { submitAnswersApi } from "actions/questionSession/submitAnswersApi";


const Quiz = ({ session }) => {
    const [time, setTime] = useState<number>(300);
    const [minutes, setMinutes] = useState<number>();
    const [seconds, setSeconds] = useState<number>();
    const [activeIndex, setActiveIndex] = useState(0);
    const [readyForNext, setReadyForNext] = useState(false);
    const [cookies, removeCookie] = useCookies(["jwt"]);
    const router = useRouter();
    const [correctAnswer, setCorrectAnswer] = useState<string>("");
    const [correct, setCorrect] = useState<boolean>(false);
    const [answers, setAnswers] = useState<{ answer: number; id: number; }[]>([]);
    const [score, setScore] = useState<number>(0);


    const submitAnswers = async () => {
        const data = {
            'answers': answers,
            "sessionId": session.sessionId,
            "time": time
        }
        const response = await submitAnswersApi(data)

        if (!response[0])
            setScore(response[1].score)
    }

    useEffect(() => {
        if (cookies.jwt ? false : true)
            router.push("/login")
    }, [])


    useEffect(() => {
        setTimeout(() => {
            setTime(prev => prev - 1);
        }, 1000);
        setMinutes(Math.floor(time / 60));
        setSeconds(time - (Math.floor(time / 60)) * 60);

        if (time <= 0) {
            submitAnswers()
        }
    }, [time]);





    return (
        <div>
            {time > 0 && (activeIndex) < session.questions.length ? (
                <Container>
                    <Flex
                        justifyContent={'center'}>
                        <Heading>
                            {minutes} : {seconds! < 10 ? `0${seconds}` : seconds}
                        </Heading>
                    </Flex>

                    {session.questions.map((question, i) => (
                        i === activeIndex && (
                            <QuestionCard
                                key={i}
                                questionAmount={session.questions.length}
                                questionNumber={i + 1}
                                questionText={question.question}
                                onClick={async (answerId) => {
                                    const answer = await getAnswerApi(question.id)

                                    setCorrectAnswer([question.answer1, question.answer2, question.answer3][answer[1].correct_answer])
                                    setCorrect(answerId[0] == answer[1].correct_answer)
                                    setReadyForNext(true);

                                    setAnswers((value) => {
                                        value?.push({
                                            'answer': answerId[0],
                                            'id': question.id
                                        })
                                        return value
                                    }
                                    )

                                }}
                                options={[question.answer1, question.answer2, question.answer3]} />
                        )
                    ))}

                    <Flex
                        justifyContent={'center'}>
                        {correctAnswer != '' && <>
                            {correct
                                ? <span style={{ color: '#12dd11' }}>Correct! The right answer is {correctAnswer}</span>
                                : <span style={{ color: '#dd1211' }}>Sorry, you are wrong! The right answer is {correctAnswer}</span>
                            }
                        </>
                        }
                    </Flex>


                    {readyForNext && (
                        <Button
                            my={10}
                            onClick={() => {
                                setActiveIndex(prev => prev + 1);
                                setReadyForNext(false);
                                setCorrectAnswer("")
                                console.log(answers)
                                if (activeIndex < session.questions.length) {
                                    submitAnswers()
                                }
                            }}
                            as={'button'}
                            bg={'green.500'}
                            fontSize={'lg'}
                            fontWeight={500}
                            color='white'
                            variant={'solid'}
                            width='100%'
                            _hover={{
                                bg: 'gray.300',
                                color: 'black'
                            }}>
                            next question
                        </Button>
                    )}
                </Container>
            ) : (
                <QuizFinishCard
                    score={score}
                    onClick={() => {
                        window.location.reload()
                    }}
                />
            )}
        </div>
    );
};


export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const parsedCookies = cookie.parse(ctx.req.headers.cookie ?? "");
    let response = await questionsNoAnswerApi(ctx.query.sessionId, parsedCookies)
    const session = {
        sessionId: ctx.query.sessionId,
        questions: response[1]
    }

    return {
        props: {
            session
        }
    };
};

export default Quiz;