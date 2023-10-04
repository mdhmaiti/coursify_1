import * as z from 'zod';

export const ValidCourse = z.object({
   
    
    course_name:z.string().min(3).max(30).nonempty(),
    name: z.string().min(3).max(30).nonempty(),
    course_price:z.number().nonnegative().safe(),
    course_image :z.string().url().nonempty(),
    
   
})

// this is beneficial not gonna define the types again 
//type Course = z.infer<typeof ValidCourse>
 //default Course;