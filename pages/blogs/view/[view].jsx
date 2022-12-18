import { Container } from "@mantine/core";
import { Box, Paper, Typography } from "@mui/material";
import { height } from "@mui/system";
import { doc, getDoc } from "firebase/firestore";
import Image from "next/image";
import { db } from "../../../config/firebase";
import HomeLayout from "../../../layouts/HomeLayout";

function blogview({ blog }) {
    const { title, banner, overview } = blog
    return <HomeLayout>
        <Container>
            <Paper sx={{p:3}}>
                <Typography variant="h2" >{title}</Typography>
                <Typography style={{ marginTop: 5 }}>{overview}</Typography>
                {
                    blog ? (
                        <Box
                        >
                            <Image
                                width={1920}
                                height={1080}
                                objectFit="cover"
                                src={banner}
                                priority
                                 />
                        </Box>
                    ) : (
                        <Skeleton variant="rectangular" width={210} height={118} />
                    )
                }

            </Paper>
        </Container>
    </HomeLayout >
}
export default blogview;

export const getServerSideProps = async (context) => {
    const id = context.query.id
    const docRef = doc(db, 'mostten', id)
    const data = await getDoc(docRef)
    const blog = JSON.parse(JSON.stringify(data.data()))
    return {
        props: {
            blog
        }
    }
}