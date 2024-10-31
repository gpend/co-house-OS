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
                {/*get news from api
                <Container id="newsContainer">{getNews(5)}</Container>
                */}
            </div>
        </Container>
)
}

export default Home;