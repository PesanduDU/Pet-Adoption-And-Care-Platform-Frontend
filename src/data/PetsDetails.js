// import React, { memo } from 'react'
// import dog from './../assets/images/pets/doggy.jpg'
// import cat from './../assets/images/pets/meow.jpg'
import React, {useState, useEffect} from 'react'


export default function PetsDetails() {

  // const [pets, setPets] = useState([]);
  const [petts, setPetts] = useState([]);

  // useEffect(() => {
  //   fetch('http://localhost:8080/api/v1/pet/getPets')
  //       .then(response => response.json())
  //       .then(data => setPets(data))
  //       .catch(error => console.error('Error fetching pets:', error));
  // }, []);

  useEffect(() => {
    const fetchData = async () =>{
      const result = await fetch('http://localhost:8080/api/v1/pet/getPets')
      const jsonResult = await result.json
      setPetts(jsonResult)
    }
    fetchData();
  },[])



  // const petsArray = [
  //   {
  //       id: 1,
  //       type: 'Dog',
  //       name: 'Doggy',
  //       age: 10,
  //       photo: dog,
  //       location: ['','']
  //   },
  //   {
  //       id: 2,
  //       type: 'Cat',
  //       name: 'Meow',
  //       age: 10,
  //       photo: cat,
  //       location: ['','']
  //   },
  // <Main key={index} name={ele.name} age={ele.age} profession={ele.profession} />
  // ]

  return (
    <div>
      {petts.map(ele =>
        <h2 key={ele.id}>{ele.name}</h2>
      )}
    </div>)
}
