import React from "react"
import Head from "./head"
import animeData from "./animeData"

export default function App() {
    const animeELement = animeData.map(anime=> {
        return <Head 
        anime={anime}/>
     }) 
    return (
        <div>
            {animeELement}
        </div>
    )
}