import React, { useState } from "react";
import Modal from './Modal'
const Card = (movie) => {
    const [modalOpen, setModalOpen] = useState(false);
    let img_path = "https://image.tmdb.org/t/p/w500";
    return (
        <>
            <div className="movie">
                <img src={img_path + movie.info.poster_path} className="poster"></img>
                <div className="movie-details">
                    <div className="box">
                        <button className="openModalBtn"
                            onClick={() => {
                                setModalOpen(true);
                            }}>Show More</button>
                            
                            {modalOpen && <Modal setOpenModal={setModalOpen} movieOverview={movie.info.overview}/>}
                        <h4 className="title">{movie.info.title}</h4>
                        <p className="rating">{movie.info.vote_average}</p>
                    </div>
                    <div className="overview">
                        <h1>overview</h1>
                        {movie.info.overview}
                    </div>
                </div>
            </div>
        </>
    )
}
export default Card;