import React, {useState, useEffect} from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

const Homepage = () => {

    const [puppy, setPuppy] = useState([])

    useEffect(() => {

        async function fetchPuppyData() {

            try {

                const response = await fetch(
                    'https://fsa-puppy-bowl.herokuapp.com/api/2209-ftb-mt-web-FT/players'
                );
                const data = await response.json();
                console.log(data.data)
                console.log(data.data.players)
                setPuppy (data.data.players)
            } catch (error) {
                console.error(err);
            }
        }
        fetchPuppyData();
    }, [])


    return (
        <div>
            <p className="title">Puppy Bowl 2022</p>
            <Navbar />
            <Outlet context={[puppy, setPuppy]} />
            <div className="puppyBox">
                {
                    puppy && puppy.length ? puppy.map((indivPup, idx) => {
                        console.log(indivPup)
                        return <div key={idx}>
                            <p id="name">Puppy Name: {indivPup.name}</p>
                            <p id="breed">Breed: {indivPup.breed}</p>
                            <img id="puppies" src = {indivPup.imageUrl}></img> 
                    </div>
                    }) : <div>Puppy Servers are currently down - try again later </div>
                }
            </div>
        </div>
    )
};

export default Homepage;