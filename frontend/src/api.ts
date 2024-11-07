//get
//put
import NewsItem from "./interfaces"

async function fetchNews(itemCount: number, userRole: string): Promise<NewsItem[] | null> {
  try {
    const response = await fetch(`https://api.example.com/newsq=${itemCount}&${userRole}&appid=YOUR_API_KEY`);

    if (!response.ok) {
      throw new Error("Failed to fetch news");
    }

    const data: NewsItem[] = await response.json() as NewsItem[];
    return data;

  } catch (error) {
    console.error("Error fetching news:", error);
    return null; //TODO return error to display?
  }
}

export default fetchNews