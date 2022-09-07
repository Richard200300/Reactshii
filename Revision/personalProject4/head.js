import React from "react"



export default function Head(props) {
    return (
        <div className="container">
            <nav className="navbar" >
                <div className="mini-flex">
                <img src={props.anime.pImg} className="pImg"/>
                <p>{props.anime.username}</p>
                </div>
                <div className="dot-flex">
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                </div>
            </nav>
            <div className="img-flex">
            <img src={props.anime.postImg} className="poImg"/>
            <img src={props.anime.postImg1} className="poImg"/>
            <img src={props.anime.postImg2} className="poImg"/>
            <img src={props.anime.postImg3} className="poImg"/>
            <img src={props.anime.postImg4} className="poImg"/>


            </div>
            <div className="pLeft">
            <div className="love">💗 🗨</div>
           
                <p className="bold">{props.anime.likes} likes</p>
                <span className="right">{props.anime.username}</span>
                <span>{props.anime.Pdate}</span>
                </div>
                <div className="input-flex">
                <input  placeholder="Add a comment..." className="input" />
                <button className="btn" >Post</button>
                </div>
           
        </div>
    )
}