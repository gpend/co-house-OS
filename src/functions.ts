//get
//put


export function getNews(count:number):any {
    const url = `http://127.0.0.1:8223/data/news?q=${count}&appid=YOUR_API_KEY`
    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log('fetched data:', data)
            return(data)
        })
}  