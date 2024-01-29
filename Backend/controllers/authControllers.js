import catchAysncErrors from "../middlewares/catchAysncErrors.js";
import User from  '../models/user.js';
import ErrorHandler from "../utils/errorHandler.js";
// regiter user => /api/v1/register
export const registerUser = catchAysncErrors (async(req,res,next) =>
{
   const {name,email,password}=req.body;
    const user = await User.create(
        {
            name,
            email,
            password,
        }
    );

    const token = user.getJwtToken();     // use token funct here

    res.status(201).json(
        {
            token,    // we send the token as response
        }
    );

});



// login user => /api/v1/login
export const loginUser = catchAysncErrors (async(req,res,next) =>
{
   const {email,password}=req.body;
    
   if(!email || !password)
   {
    return next(new ErrorHandler('Please enter email & Passwrod',400))
   }
   const user = await User.findOne({email}).select("+password")
   if(!user)
   {
    return next(new ErrorHandler('Invalid email or Passwrod',401))
   }

   //check if password is correct 

   const isPasswordMatched =  await user.comparePassword(password)

    const token = user.getJwtToken();     // use token funct here

    res.status(201).json(
        {
            token,    // we send the token as response
        }
    );

});