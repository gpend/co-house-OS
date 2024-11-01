import { Container } from "react-bootstrap";

function Home() {
    return (
        <Container>
            <div className="text-center" id="home">
                <h1>Welcome Home</h1>
            </div>
            <div>
                <br />
                <h2>News</h2>
                <Container id="newsContainer"></Container>
                <h2>Messages</h2>
                <Container id="messageContainer"></Container>
            </div>
        </Container>
)
}

export default Home;