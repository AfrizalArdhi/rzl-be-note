import Note from "../model/NoteModel.js";

export const getNotes = async(req, res) =>{
    try {
        const response = await Note.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

//Create
export const createNotes = async(req, res)=>{
    try {
        await Note.create(req.body);
        res.status(201).json({msg:"Note Created"})
    } catch (error) {
        
    }
}

//Update
export const updateNotes = async(req,res)=>{
    try {
        await Note.update(req.body, {
            where: {
                id: req.params.id
            }
        })
        res.status(200).json({msg:"Note Update Successfull!"})
    } catch (error) {
        console.log(error.message)
    }
}

//Delete
export const deleteNotes = async(req, res)=>{
    try {
        await Note.destroy({
            where: {
                id: req.params.id
            }
        })
        res.status(200).json({msg:"Note Delete Successfully!"})
    } catch (error) {
        console.log(error.message)
    }
}