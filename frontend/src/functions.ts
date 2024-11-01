import React from "react";

//get
//put


function GetNews(count:number, userRole: string):any {
    const url = `http://127.0.0.1:8223/data/news?q=${count}&${userRole}&appid=YOUR_API_KEY`
    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log('fetched data:', data)
                return(
                    <div></div>
            )})
        }   
