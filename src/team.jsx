import { useState } from "react"

export default function Team(){

    const [team,setTeam]=useState(23);

    const handleAdd=()=>{
        const newTeam = team +1;
        setTeam(newTeam);
        // setTeam(team +1)
    }

    const handleRemove=()=>{
        // const newTeam = team -1;
        // setTeam(newTeam)

        setTeam(team -1)
    }

    const teamStyle ={
        border:'2px solid green',
        margin:'1rem',
        padding:'1rem',
        borderRadius:'1rem'
    }
    return(
        <div style={teamStyle}>
            <h3>Players: {team}</h3>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleRemove}>Remove</button>
        </div>
    )
}