import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Router} from '@reach/router';
import PetList from "./components/PetList";
import CreatePet from "./components/CreatePet";
import UpdatePet from "./components/UpdatePet";
import Details from "./components/Details";

function App() {

  return (
    <div className="container">
      <Router >
        <PetList path="/" />
        <CreatePet path="/new" />
        <Details path="/:_id"/>
        <UpdatePet path="/:_id/edit"/>
      </Router>
    </div>
  );
}

export default App;
