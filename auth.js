const passport = require('passport');
const localStrategy = require('passport-local').Strategy;
const Person = require('./models/person');



passport.use(new localStrategy(async (USERNAME,password,done) => {
    // authentication logic here
    try{
    //   console.log('Received credential', USERNAME,password);
      const user = await Person.findOne({username: USERNAME});
      if(!user)
        return done(null, false,{message: 'Incorrect username'});
  
    //   const isPasswordMatch = user.password === password ? true : false;
      const isPasswordMatch = await user.comparePassword(password);
      if(isPasswordMatch){
        return done(null, user);
      }else{
        return done(null,false, {message: 'Incorrect password'});
      }
  
    }catch(err){
      return done(err);
    }
  }))
  


  module.exports = passport;  //export configured passport