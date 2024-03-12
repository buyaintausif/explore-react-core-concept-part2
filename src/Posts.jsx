import { useEffect, useState } from "react"




export default function Posts(){

    const[posts, setPosts]=useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res=>res.json())
        .then(data=>setPosts(data))

    },[])
    return (
        <div>
            <h2>Posts: {posts.length} </h2>

            {
            
            }
        </div>
    )
}


// 1. Create store to store the data
//2. Create use effect with no dependencies
//3. use fetch in UseEffect to load data
//4.