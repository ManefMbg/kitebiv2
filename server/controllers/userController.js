import { User } from "../models/User.js";


export const updateUser = async (req, res) => {

    const { ...rest } = req.body;
    const id = req.params.id;
  
    const data = await User.updateOne({ _id: id }, rest);
    res.send({
        success: true,
        message: "data updated successfully!!",
        data: data,
    })
}

export const deleteUser = async (req, res) => {
  const id = req.params.id;

  const data = await User.deleteOne({ _id: id });
  res.send({
    success: true,
    message: "data deleted successfully!!",
    data: data,
  });
};
export const getUsers = async (req, res) => {
  const data = await User.find();
  res.json({ success: true, data: data });
}
export const getOneUser = async (req, res) => {
  const id = req.params.id;
//   console.log(id);

  const data = await User.findById({ _id: id });
  res.send({
    success: true,
    message: "User found successfully!!",
    data: data,
  });
};