import React from 'react'
import './App.css'

function App() {
  let listItems = ["soyabean chunks","paneer","eggs","bananas"];
  return (
   <React.Fragment>
       <h1>Healthy foods</h1>
       <ul className='list-group'>{listItems.map((item) =>
       <li key={item} className='list-group-item'>
         {item}
       </li>
       )}
                   
       </ul>
   </React.Fragment>
    )
}

export default App
