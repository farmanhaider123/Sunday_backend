const { User ,validateUser} = require("../Model/Users");


async function GetUserByemail(req, res) {
    let uid = req.params.id
    console.log(uid)
    let Isexist = await User.findOne({ email: uid })
    if (Isexist) {
        res.send(Isexist)
    }
    if (!Isexist) {
        res.send({ "err": 1, "msg": "user is not exist" })
    }
}
async function GetUserByid(req, res) {
    let uid = req.params.id
    console.log(uid)
    let Isexist = await User.findOne({_id: uid })
    if (Isexist) {
        res.send(Isexist)
    }
    if (!Isexist) {
        res.send({ "err": 1, "msg": "user is not exist" })
    }
}
async function UpdateUserStatus(req, res) {
   
    let status=req.body.value
    
    let Isexist = await User.findOneAndUpdate({ _id:req.body.userid }, { $set: {status} })
    if (Isexist) {
        res.send({ "err": 0, "msg": "user Status is updated" })
    }
    if (!Isexist) {
        res.send({ "err": 1, "msg": "user is not exist" })
    }
}
async function UpdateUser(req, res) {
   

    let data=req.body
    let Isexist = await User.findOneAndUpdate({ _id:req.body.userid }, { $set: {req.body} })
    if (Isexist) {
        res.send({ "err": 0, "msg": "user Status is updated" })
    }
    if (!Isexist) {
        res.send({ "err": 1, "msg": "user is not exist" })
    }
}

  async function GetAlluser(req,res) {

    let user = await User.find()
        if (user) {
            res.send(user)
        }
        if (!user) {
            res.send({ "err": 1, "msg": "user is not exist" })
        }
}
    module.exports = { GetUserByemail,GetUserByid, GetAlluser,UpdateUserStatus }