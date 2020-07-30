import React, {useState} from 'react';
import {navigate, Link} from '@reach/router';
import axios from 'axios';


const CreatePet = props => {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");
  const [skill1, setSkill1] = useState("");
  const [skill2, setSkill2] = useState("");
  const [skill3, setSkill3] = useState("");
  const [errors, setErrors] = useState({});
  
  const createPet = e => {
    e.preventDefault();
    const petItem = {name, type, description, skill1, skill2, skill3};
    axios.post("http://localhost:8000/api/pets", petItem)
      .then( res => {
        if(res.data.errors){
          setErrors(res.data.errors);
          console.log(errors);
        } else{
          navigate("/");
        }
      }).catch(err => console.log(err));
  }



  return (
    <>
    <h1>Pet Shelter</h1>
    <h4>{props.subtitle}</h4>
    <Link to="/">Back to home</Link>
    <div className="row">
      <form className="col-sm-8 offset-sm-2 mb-5" onSubmit={createPet}>
        <div className="form-group">
          <label>Name</label>
          <input type="text" className="form-control" value={name} onChange={e => setName(e.target.value)}/>
          {errors.name? <p className="text-danger">{errors.name.properties.message}</p>: ""}
        </div>
        <div className="form-group">
          <label>Type</label>
          <input type="text" className="form-control" value={type} onChange={e => setType(e.target.value)}/>
          {errors.type? <p className="text-danger">{errors.type.properties.message}</p>: ""}
        </div>
        <div className="form-group">
          <label>Description</label>
          <textarea className="form-control" value={description} onChange={e => setDescription(e.target.value)}></textarea>
          {errors.description ? <p className="text-danger">{errors.description.properties.message}</p>: ""}
        </div>
        <div className="form-group">
          <label>Skill 1</label>
          <input type="text" className="form-control" value={skill1} onChange={e => setSkill1(e.target.value)}/>
          {errors.skill1 ? <p className="text-danger">{errors.skill1.properties.message}</p>: ""}
        </div>
        <div className="form-group">
          <label>Skill 2</label>
          <input type="text" className="form-control" value={skill2} onChange={e => setSkill2(e.target.value)}/>
          {errors.skill2 ? <p className="text-danger">{errors.skill2.properties.message}</p>: ""}
        </div>
        <div className="form-group">
          <label>Skill 3</label>
          <input type="text" className="form-control" value={skill3} onChange={e => setSkill3(e.target.value)}/>
          {errors.skill3 ? <p className="text-danger">{errors.skill3.properties.message}</p>: ""}
        </div>
        <input type="submit" className="btn btn-success btn-block" value={props.submitMessage}/>
      </form>
    </div>
  </>
  )
}

export default CreatePet;