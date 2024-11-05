import { Container } from "react-bootstrap";
import fetchNews from "./../../api.tsx";
import type NewsItem from "./../../interfaces.ts";
import { useEffect, useState } from "react";

const NewsComponent: React.FC = () => {
  const [news, setNews] = useState<NewsItem[] | null>(null);

  useEffect(() => {
    async () => {
      try {
        const newsData = await fetchNews(5, "adult");
        setNews(newsData);
      } catch (error) {
        console.error("Failed to fetch news:", error);
      }
    };

     

    if (!news) {
      return <p>Loading news...</p>;
    }
  

    return (
      <div>
      {news.forEach(newsElement => {
        return(
        <div>
          <h1>{newsElement.title}</h1>
          <p>{newsElement.description}</p>
          <a href={newsElement.url} target="_blank" rel="noopener noreferrer">
            Read more
          </a>
        </div> )
      })}
      </div>
    );
  }),[];
  
}

function Home() {
    return (
        <Container>
            <div className="text-center" id="home">
                <h1>Welcome Home</h1>
                <br />
                <h2>News</h2>
                <Container id="newsContainer"></Container>
                <h2>Messages</h2>
                <Container id="messageContainer">
                    <NewsComponent />
                </Container>
            </div>
        </Container>
)}

export default Home;