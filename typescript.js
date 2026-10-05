"use strict";
// Basic type Annotations
const programName = "Fita Master program";
let durationMonths = 4;
let isFullStack = true;
let wildcard = "can hold strings, numbers, objects etc";
// Tuples & Enums
// Tuple: fixed length and ordered types
let geolocation = [13.0827, 80.2707];
// Enum: set of friendly named constants
var level;
(function (level) {
    level[level["Beginner"] = 1] = "Beginner";
    level[level["Intermediate"] = 2] = "Intermediate";
    level[level["Advanced"] = 3] = "Advanced";
})(level || (level = {}));
let currentlevel = level.Intermediate;
const frontendModule = {
    title: "TypeScript Development",
    topicCount: 15,
    hasProject: true
};
// Oops(Classes & Inheritance)
// AccesModifier - public,private,protected
class CourseInstructor {
    name;
    specialty;
    rating; //only accesible inside the class
    constructor(name, specialty, rating) {
        this.name = name;
        this.specialty = specialty;
        this.rating = rating;
    }
    getRating() {
        return this.rating;
    }
}
getInstructorDetails();
string;
{
    return `Instructor: ${this.name}, Specialty: ${this.specialty}`;
}
checkRating();
string;
{
    return `Internal rating score is: ${this.rating}/10`;
}
// Child Class implementing Inheritance
class SeniorInstructor extends CourseInstructor {
    totalYearsExperience;
    constructor(name, specialty, rating, years) {
        // Must call parent class constructor using super()
        super(name, specialty, rating);
        this.totalYearsExperience = years;
    }
    // Override details method to show years experience
    getSeniorDetails() {
        // Can access name (public) and specialty (protected), but not rating (private)
        return `${this.getInstructorDetails()} | Experience: ${this.totalYearsExperience} years`;
    }
}
// --- Test Implementation ---
const teacher = new SeniorInstructor("Dr. Alan Turing", "AI & Computations", 9, 15);
console.log("--- TS Class & Inheritance Output ---");
console.log(teacher.getInstructorDetails());
console.log(teacher.getSeniorDetails());
console.log(teacher.checkRating());
