import react, { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import Card from "./Card";
let API_key = "&api_key=db95773a7fb212ba790d71f6adac0e7e";
let base_url = "https://api.themoviedb.org/3";
let url = base_url + "/discover/movie?sort_by=popularity.desc" + API_key;
let arr = ["Recent"];
const API_SEARCH = "https://api.themoviedb.org/3/search/movie?api_key=6b5295011b4cc856f4f30496ad7008cc&query";
const Main = () => {
    const [movieData, setData] = useState([]);
    const [url_set, setUrl] = useState(url);
    const [search, setSearch] = useState();
    useEffect(() => {
        fetch(url_set).then(res => res.json()).then(data => {
            setData(data.results);
        });
    }, [url_set])
    const getData = (movieType) => {
        if (movieType === "Recent") {
            url = base_url + "/discover/movie?sort_by=popularity.desc" + API_key;
        }
        setUrl(url);

    }
    const searchMovie = (evt) => {
        if (evt.key === "Enter") {
            url = base_url + "/search/movie?api_key=db95773a7fb212ba790d71f6adac0e7e&query=" + search;
            setUrl(url);
            setSearch(" ");
        }
    }
    return (
        <>
            <div className="header">
                <nav>
                    <ul>
                        {
                            arr.map((value, pos) => {
                                return (
                                    <li><a href="#" key={pos} name={value} onClick={(e) => { getData(e.target.name) }}>{value}</a></li>
                                )
                            })
                        }

                    </ul>
                </nav>
                <form>
                    <div className="search-btn">
                        <input type="text" placeholder="Enter Movie Name"
                            className="inputText" onChange={(e) => { setSearch(e.target.value) }}
                            value={search} onSubmit={searchMovie}>
                        </input>
                        <button><i className="fas fa-search"></i></button>
                    </div>
                </form>
            </div>
            <div className="container">
                {
                    (movieData.length === 0) ? <p className="notfound">Not Found</p> : movieData.map((res, pos) => {
                        return (
                            <Card info={res} key={pos} />
                        )
                    })
                }
            </div>
        </>
    )
}
export default Main;
