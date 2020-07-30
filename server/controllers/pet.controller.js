console.log("product.controller.js");

const Pet = require("../models/pet.model");

class PetController {
  create(req, res){
    const newPet = new Pet(req.body);
    newPet.save()
      .then( () => res.json(newPet))
      .catch(errors => res.json(errors));
  }
  getAll(req, res){
    Pet.find().sort("type")
      .then(p => res.json(p))
      .catch(errors => res.json(errors))
  }

  getOne(req, res){
    Pet.findOne({_id: req.params._id})
      .then(p => res.json(p))
      .catch(errors => res.json(errors));
  }

  update(req, res){
    Pet.findByIdAndUpdate({_id: req.params._id}, req.body, {runValidators: true})
      .then(() => res.json({msg: "updated record"}))
      .catch(errors => res.json(errors));
  }
  
  remove(req, res){
    Pet.findByIdAndRemove({_id: req.params._id})
      .then(() => res.json({msg: "removed record"}))
      .catch(errors => res.json(errors));
  } 
}

module.exports = new PetController();