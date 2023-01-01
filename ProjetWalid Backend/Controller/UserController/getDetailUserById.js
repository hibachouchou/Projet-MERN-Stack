const User = require("../../models/UserModel")
const Enseignant = require("../../models/EnsModel")
const Stage=require("../../models/StageModel")
const Cahiercharge=require("../../models/CahierChargeModel")
const DemandeEncadrement =require("../../models/DemandeEncadrantModel")

const router = require("express").Router()

router.get("/:id",async(req,res)=>{

const idUser=req.params.id
    try{   
        console.log(idUser)
      const user= await User.findById(idUser)
      const stage=  await Stage.findOne({userId:idUser})
      const cahiercharge=await Cahiercharge.findOne({userId:idUser})
      const demandeEncadrement =await DemandeEncadrement.findOne({userId:idUser})
      const enseignant=await Enseignant.findOne({_id:demandeEncadrement.ensId})
      const data=[user,stage,cahiercharge,demandeEncadrement,enseignant]
      
     console.log(data)
    res.send(data)

}catch(err){
console.log(err)
   }
}

  
 
)




module.exports=router;