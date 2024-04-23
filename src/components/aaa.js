import React, { useState, useEffect } from 'react';
import Bbb from './bbb';
import PetsDetails from '../data/PetsDetails';

function PetsComponent() {
    const [pets, setPets] = useState([]);
    const[id,setId]=useState('');
    const [petts,setPetts] = useState(PetsDetails[0])

    useEffect(() => {
        fetch('http://localhost:8080/api/v1/pet/getPets')
            .then(response => response.json())
            .then(data => setPets(data))
            .catch(error => console.error('Error fetching pets:', error));
    }, []);
    const [searchedPet, setSearchedPet] = useState(null);

    const handleSearch = () => {
        fetch(`http://localhost:8080/api/v1/pet/getPetByID/${id}`)
            .then(response => response.json())
            .then(data => setSearchedPet(data))
            .catch(error => console.error('Error fetching pet by ID:', error));
    };
    return (
        <>
            <div>
            <h1>List of Pets</h1>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Type</th>
                        <th>Breed</th>
                        <th>Name</th>
                        <th>Gender</th>
                        <th>Age</th>
                        <th>Color</th>
                        <th>Description</th>
                        <th>Owner Name</th>
                        <th>Owner Mobile Number</th>
                    </tr>
                </thead>
                <tbody>
                    {pets.map(pet => (
                        <tr key={pet.id}>
                            <td><input type="text" value={pet.id} onChange={(e)=>setId(e.target.value)} /></td>
                            <td>{pet.type}</td>
                            <td>{pet.breed}</td>
                            <td>{pet.name}</td>
                            <td>{pet.gender}</td>
                            <td>{pet.age}</td>
                            <td>{pet.color}</td>
                            <td>{pet.description}</td>
                            <td>{pet.ownerName}</td>
                            <td>{pet.ownerMobileNumber}</td>
                            <button onChange={(e) => setId(e.target.value)} onClick={handleSearch}>Searchpet</button>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button onChange={(e) => setId(e.target.value)} onClick={handleSearch}>Submit</button>
        </div>
        {/* <p>{searchedPet.name}</p> */}
        
        {/* <Bbb data={searchedPet}/>
        <div>{petts.name}</div> */}
        </>
    );
}

export default PetsComponent;
