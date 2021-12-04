import React, { useState, useEffect } from "react";
import "./Reports.css"
import { Loader } from "../components/Loader"



function FetchAPI() {
    const [isLoading, setIsLoading] = useState(true)
    const [data, setData] = useState([]);
    const getApi = () => {
        fetch("https://jsonplaceholder.typicode.com/photos?_start=0&_limit=500")
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

            {data.map((obj) => {
                return (
                    <div>
                        <div className="row">
                            <div>
                                {obj.title}
                                {obj.url}
                            </div>
                        </div>
                    </div>


                )
            })}



        </div >
    )
}
export default FetchAPI;
