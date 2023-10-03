import * as z from 'zod';

export const ValidCourse = z.object({
   
    
    course_name:z.string().min(3).max(30),
    name: z.string().min(3).max(30),
    course_price:z.number(),
    course_photo :z.string().url().nonempty(),
   
})