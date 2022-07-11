interface Course {
    name: string;
    duration?: number;
    educator: string;
}

class CreateCourseService {
    execute({duration = 8, name, educator}: Course): void {
        console.log(name, duration, educator);
    }
}

export default new CreateCourseService();