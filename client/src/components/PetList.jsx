import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {navigate, Link} from '@reach/router';

const PetList = props => {
  
  const [pets, setPets] = useState([]);
  
  useEffect(() => {
    fetchPets();
  }, [])

  const fetchPets = () => {
    axios.get("http://localhost:8000/api/pets")
    .then( res => {
      setPets(res.data);
    }).catch(err => console.log(err));
  }

  return (
    <>
      <h1>Pet Shelter</h1>
      <h4>These pets are looking for a good home</h4>
      <Link to="/new">Add a new pet</Link>
      <table className="table">
        <thead><tr><th>Name</th><th>Type</th><th>Action</th></tr></thead>
        <tbody>
        {pets.map( (pet, i) => 
          <tr key={i}><td>{pet.name}</td><td>{pet.type}</td>
          <td><Link to={`/${pet._id}`}>details</Link> | <Link to={`/${pet._id}/edit`}>edit</Link></td></tr>
        )}
        </tbody>
      </table>
    </>
  )

}

export default PetList;