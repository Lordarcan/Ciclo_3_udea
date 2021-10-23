import React, {Component} from 'react';
import {render} from 'react-dom';


const AppHome = () =>  {
    const url = 'http://localhost:3000/api/products'
    const [todos, setTodos] = React.useState()
    const fetchApi = async () => {
        const response = await fetch(url)
        console.log(response.status)
        const responseJSON = response.json()
        setTodos(responseJSON)
        console.log(responseJSON)
    }

    React.useEffect(() => {
        fetchApi();
        console.log(todos);
      }, []);
    
    return(
        <div>
            
            Hola mundo    2    
        
        </div>
    )
}


export default AppHome;