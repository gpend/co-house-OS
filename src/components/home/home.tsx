import { Container } from "react-bootstrap";
import { getNews } from "../../functions";

function Home() {
    return (
        <Container className="text-center">
            <h1>Welcome Home</h1>
            <br/>
            <Container id="news">
                <h2>News</h2>
                <Container id="newsContainer">{getNews(5)}</Container>
            </Container>
            <Container id="messages">
                <h2>Messages</h2>
            </Container>
        </Container>
    )
}

export default Home;