import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Course } from './entities/course.entity';

@Injectable()
export class CoursesService {
    private courses: Course[] = [
        {
            id: 1, 
            name: "Fundamento do framework NestJS",
            description:"Fundamento do framework NestJS", 
            tags:["Node.js", "typescript", "javascript"]
    }
];


    findAll()
    {
        return this.courses;
    }

    findOne(id:string){
        const course = this.courses.find((course)=> course.id === Number (id));

        if(!course){
            throw new HttpException(`Course ID #${id} Not found`, HttpStatus.NOT_FOUND   )
        }

        return course
        
    }

    create(createCourseDto:any){
    this.courses.push(createCourseDto);
    }

    update(id:String, updateCourseDto:any){
       const indexCourse = this.courses.findIndex((course) => course.id === Number(id),
       )
       this.courses[indexCourse] = updateCourseDto;
    }

    remove(id:String){
        const indexCourse = this.courses.findIndex((course) => course.id === Number(id),
        )
        if(indexCourse>=0){
            this.courses.splice(indexCourse, 1)
        }
        ;
     }
    }
