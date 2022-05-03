const mongoose = require('mongoose');
 const mongoUrl = 'mongodb+srv://dharmesh:dharmesh@cluster0.5jmgr.mongodb.net/carousel'
//  const mongoUrl = 'mongodb://127.0.0.1:27017/carousel?readPreference=primary&appname=MongoDB%20Compass%20Community&ssl=false'

// console.log(process.env.DB_STRING);
// const mongoUrl = process.env.DB_STRING;
mongoose.connect(mongoUrl, {useNewUrlParser: true}, (err) => {
if (!err) {
console.log('Successfully Established Connection with MongoDB')
}
else {
console.log('Failed to Establish Connection with MongoDB with Error: '+ err)
}
});
 
//Connecting Node and MongoDB
