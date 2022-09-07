import React from "react";
import memesData from "../memesData";

export default function Meme(){

    const [meme,setMeme] = React.useState({
       randomImage: "http://i.imgflip.com/1bij.jpg",
       topText : "",
       bottomText : ""
    })

    const[allMemeImages,setAllMemeImages] = React.useState(memesData)

    function handleClick(){
        const arr = memesData.data.memes
        let randomNo = Math.floor(Math.random()*arr.length);
        const url = arr[randomNo].url

        setMeme(prevState => {
            return{
                ...prevState,
                randomImage : url
            }
        })
    }

    function handleChange(event){
        setMeme(prevState =>{
            return{
                ...prevState,
                [event.target.name] :event.target.value
            }
        })
    }

    return(
        <div className="meme">
            <div className="input">
                <input id="top" className="input-box1" type="text" placeholder="Top text" name="topText" onChange={handleChange} value={meme.topText}/> 
                <input id="bottom" className="input-box2" type="text" placeholder="Bottom text" name="bottomText" onChange={handleChange} value={meme.bottomText}/>  
            </div>
            <button onClick={handleClick} className="btn">Get a new Meme Image 🖼</button><br></br>
            <div className="fullMeme">
                <img className="meme-img" src={meme.randomImage}></img>
                <h2 className="memeText top">{meme.topText}</h2>
                <h2 className="memeText bottom">{meme.bottomText}</h2>
            </div>
        </div>
       
    )
}