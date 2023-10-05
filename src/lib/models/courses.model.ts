import mongoose from 'mongoose'


const courseSchema = new mongoose.Schema({
  userId:{type:String},
    course_name: {
      type: String,
      required: true,
      minLength: 3,
      maxLength: 30,
    },
    name: {
      type: String,
      required: true,
      minLength: 3,
      maxLength: 30,
    },
    course_price: {
      type: Number,
      min: 0,
    },
    course_image: {
      type: String,
      
    },
  });
  

// if there is a model named courses use the modeel and if they do not exist then create a new model .
const Courses = mongoose.models.Courses||mongoose.model('Courses',courseSchema);

export default Courses;