const express = require("express");
const router = express.Router();
const Subscribers = require("../models/subscribers");
// data return promise so always use async and await
/*for displaying data in browser we had to use queries like find ({}) and findById */ 

const getAllDetails=async(req,res)=>{
    try{
      res.status(200).json({
          msg1:"This is the backend castone project ",
          msg2:'Hit differnet end points like /subscribers ,/subscribers/names  and /subscribers/:id for getting the data'
      })
    }catch(error){
      res.status(404).json({
        msg:"Something went wrong please check your connection"
      });
    }
   }

   const getAllSubscribers = async (req, res) => {
    try {
        let subscribers = await Subscribers.find();
        res.status(200).send( subscribers );
    } catch (error) {
        res.status(404).json({
            msg: "There is some problem"
        });
    }
}
// End point to get only  name of subscribers and subscribedChannel from the data

const getSubNameAndChannel = async (req, res) => {
  try {
      let subscribers = await Subscribers.find({}, { name: 1, subscribedChannel: 1, _id: 0 });
      res.status(200).send(subscribers);
  } catch (error) {
      res.status(404).json({
          msg: "Might you are not subscribed!"
      });
  }
}


// get subscribers by id

const getSubscribersById = async (req, res) => {
    let subscriber;
    const id = req.params.id;
  try {
       subscriber = await Subscribers.findById(id);
      }catch (error) {
      res.status(404).json({
          msg: "Internal server error"
      });
  }
  if(!subscriber){
    return res.status(500).json({msg:"No such subscriber"})

  }
  return res.status(200).json({subscriber});
}




router.get("/",getAllDetails);
router.get("/subscribers",getAllSubscribers);
router.get("/subscribers/names",getSubNameAndChannel);
router.get("/subscribers/:id",getSubscribersById);

module.exports = router;
