import React, { useState, useEffect} from "react"
import Card from "../components/Card"

const Shop = () => {
    const [Paintings, setPaintings] = useState([]);

    useEffect(()=>{
        fetchPaintings();
    }, []);

const fetchPaintings = async () => {
    const response = await fetch('/api/paintings')
    const data = await response.json();
    setPaintings(data)
}
    return (
        <div className = 'shoppingContainer'>
            <h1>Shop</h1>
            <div className = "cardGrid">
                <Card/>
            </div>
        </div>
    )
}