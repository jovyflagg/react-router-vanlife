import React from 'react'
import { Link } from 'react-router-dom'
import "../../../server"
// import { useNavigate } from "react-router-dom";

export const Vans = () => {
    // const navigate = useNavigate();
  const [vans, setVans] = React.useState([])
    React.useEffect(() => {
        fetch("/api/vans")
            .then(res => res.json())
            .then(data => setVans(data.vans))
    }, [])

    const vanElements = vans.map(van => (
        
        <div key={van.id} className="van-tile">
            
            {/* <button onClick={() => navigate(`/react-router-vanlife/vans/${van.id}`)}> */}
            <Link to={`/vans/${van.id}`}>
                <img src={van.imageUrl} alt='van'/>
                <div className="van-info">
                    <h3>{van.name}</h3>
                    <p>${van.price}<span>/day</span></p>
                </div>
                <i className={`van-type ${van.type} selected`}>{van.type}</i>
            </Link>
        </div>
    ))

    return (
        <div className="van-list-container">
            <h1>Explore our van options</h1>
            <div className="van-list">
                {vanElements}
            </div>
        </div>
    )
}