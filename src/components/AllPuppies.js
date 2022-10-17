import React from "react";
import { useOutletContext } from "react-router-dom";

const AllPuppies = () => {
    const theOutletContext = useOutletContext();

    return (
        <div id="font">
            <p>View our puppies here!</p>
            
        </div>
    )
};

export default AllPuppies;