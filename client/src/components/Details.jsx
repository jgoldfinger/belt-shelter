import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {navigate, Link} from '@reach/router';

const Details = props => {
  
  const [pet, setPet] = useState({});
  
  useEffect(() => {
    grabSpecificPet();
  }, [])
  
  const grabSpecificPet = () => {
    console.log(props._id);
    axios.get(`http://localhost:8000/api/pets/${props._id}`)
    .then(res => {
      setPet(res.data);
    }).catch(err => console.log(err));
  }

  
  const remove = () => {
    axios.delete(`http://localhost:8000/api/pets/${props._id}`)
    .then(res => {
      navigate("/");
    })
    .catch(err => console.log(err));
  }

  return (
    <>
      <h1>Pet Shelter</h1>
      <h4>Details about: {pet.name}</h4>
      <p>Pet type: {pet.type}</p>
      <p>Description: {pet.description}</p>
      <p>Skills: {pet.skill1}, {pet.skill2}, {pet.skill3}</p>
      <button className="btn btn-danger mb-1" onClick={remove}>Adopt {pet.name}</button><br></br>
      <Link to="/">Back to Home</Link>
    </>
  )

}

export default Details;