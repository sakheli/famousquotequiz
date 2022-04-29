import { Flex, Heading, Table, TableContainer, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import { leaderboardsApi } from "actions/userQuestionHistory/leaderboardsApi";
import { GetServerSideProps } from "next";

const Leaderboards = ({ leaderboards }) => {
    return (
        <>
            <Flex
                my={20}
                justifyContent={'center'}>
                <Heading>
                    Leaderboards
                </Heading>
            </Flex>
            <TableContainer my={100}>
                <Table size='lg' >
                    <Thead>
                        <Tr>
                            <Th>#</Th>
                            <Th>Name</Th>
                            <Th>Email</Th>
                            <Th>Total score</Th>
                            <Th>Time</Th>
                        </Tr>
                    </Thead>
                    <Tbody>

                        {leaderboards.map((leaderboard, i) => (
                            (
                                <Tr>
                                    <Td>{i}</Td>
                                    <Td>{leaderboard.user.name}</Td>
                                    <Td>{leaderboard.user.email}</Td>
                                    <Td>{leaderboard.score}</Td>
                                    <Td>{new Date(leaderboard.time * 1000).toISOString().substr(11, 8)}</Td>
                                </Tr>
                            )
                        ))}
                    </Tbody>
                </Table>
            </TableContainer>
        </>
    );
};



export const getServerSideProps: GetServerSideProps = async () => {
    let leaderboards = await leaderboardsApi()
    leaderboards = leaderboards[1]

    return {
        props: {
            leaderboards
        }
    };
};

export default Leaderboards;