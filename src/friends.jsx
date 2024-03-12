
import { useEffect, useState } from 'react'
import './friends.css'
import Friend from './friend';
export default function Friends(){

    const [friends,setFriends] = useState([]);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data=>setFriends(data))

    },[])
    return(
        <div className='box'>
            <h3>Friends: {friends.length} </h3>

            {
                friends.map(friend => <Friend friend={friend}></Friend>)
            }
        </div>
    )
}



//to load data first use state for hold data

// 2. Use effect with dependency array
//3. Use fetch to load data 

// 4.set loaded data to the state

//display data on component
