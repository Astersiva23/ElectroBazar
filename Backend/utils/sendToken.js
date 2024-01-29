///create a token and save in the cookie

export default (user, statusCode, res) =>
{
    //create JWT token 
    const token = user.getJwtToken()

    //option for cookie
    const options ={
        expires : new Date(Date.now()* process.env.COOKIE_EXPIRES_TIME) 
    }
}