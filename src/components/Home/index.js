import React from "react"
import Card from "../Card"
import { useState,useEffect } from "react"
import "./homeStyle.css"

const Home = () => {
    const [isLoaded,setIsLoaded] = useState(false)
    const [character,getCharacter] = useState([])
    const [error,setError] = useState(null);

    // Fetching character subset of data using useEeffect() hook to make sure,
    // data is available before the DOM get rendered
    useEffect(()=>{
      fetch("https://www.anapioficeandfire.com/api/characters")
          .then(res=>res.json())
          .then(
              (result) => {
                  setIsLoaded(true);
                  getCharacter(result);
              },
              (error)=>{
                  setIsLoaded(false);
                  setError(error)
              }
          )
  },[])

    if(error){
        return <div>Something went  wrong!</div>
    }else{
        return (
            <div className="homeContainer">
                {/* mapping through each object and passing passing it as props to <Card/> component */}
                {character.map(card=>{
                    return <Card cardData={card}/>
                })}
            </div>
          );
    }
}
export default Home