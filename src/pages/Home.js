import React, { useState, useEffect } from "react";
import "./Home.css"
import { Loader } from "../components/Loader"

function FetchAPI() {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true)
    const getApi = () => {
        fetch("https://jsonplaceholder.typicode.com/photos?_start=0&_limit=5000")
            .then((response) => response.json())
            .then((data) => {
                setData(data);
                setIsLoading(false)
                console.log(data)
            });
    };
    useEffect(() => {
        getApi();
    }, []);
    return (
        <div className="layout">
            {isLoading && <Loader loaderStyle="loader-style" />}
            {data.map((obj) => {
                return (
                    <div>
                        <div className="row">
                            <div className="container">
                                <img className="img-thumbnail" src={obj.thumbnailUrl} alt="" />
                                <div>{obj.title}</div>
                            </div>
                        </div>
                    </div>

                )
            })}



        </div>
    )
}
export default FetchAPI;
