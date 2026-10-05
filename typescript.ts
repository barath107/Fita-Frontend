// Basic type Annotations
const programName: string = "Fita Master program";
let durationMonths: number = 4;
let isFullStack: boolean = true;
let wildcard: any = "can hold strings, numbers, objects etc";

// Tuples & Enums
// Tuple: fixed length and ordered types
let geolocation: [number,number] = [13.0827,80.2707];

// Enum: set of friendly named constants
enum level{
    Beginner = 1,
    Intermediate = 2,
    Advanced = 3
}
let currentlevel: level = level.Intermediate;

// Interfaces
interface ICourse{
    title: string;
    topicCount: number;
    hasProject: boolean;
    additionalNotes?:string; //optinal property
}

const frontendModule: ICourse = {
    title: "TypeScript Development",
    topicCount: 15,
    hasProject: true
};

// Oops(Classes & Inheritance)
// AccesModifier - public,private,protected
class CourseInstructor{
    public name: string;
    protected specialty: string;
    private rating: number; //only accesible inside the class

    constructor(name:string,specialty: string,rating:number){
        this.name = name;
        this.specialty = specialty;
        this.rating = rating;
    }
}    