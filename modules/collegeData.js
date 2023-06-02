const fs = require('fs');     //importing file system module.

class Data {                            //Class initialization
    constructor (students, courses) {   //Constructor for the data class. It has 2 parameters named studenets and courses.
    this.students = students;           //Assigning the value of student parameter to the students property of the class.
    this.courses = courses;             //Assigning the value f course parameter to the course property of the class.
}
}

var dataCollection = null;   //Declaring a variable nd initializing to null

function initialize () {     //Declaring initialize function to get an array of student and course object
    return new Promise ((resolve,reject) => {
        fs.readFile('./data/students.json', 'utf8',(err, dataFromStudentFile) => {  //readFile to read the contennts of the JSON file.
            if(err) {
                reject("Unable to read students.json");      //Display message for unsuccessful read
                return;
            }
            let students = JSON.parse(dataFromStudentFile);   // Parse the JSON data into an array of objects.
            console.log(students);                              //Print student object
        



        fs.readFile('./data/courses.json', 'utf8', (err, dataFromCoursesFile) => {   //readFile to read the contennts of the JSON file.
            if(err) {
                reject ("Unable to read courses.json");      //Display message for unsuccessful read
                return;
            }
            let courses = JSON.parse(dataFromCoursesFile);   // Parse the JSON data into an array of objects.
            console.log(courses);                           //Print student object
            
        dataCollection = new Data(students, courses);     //Creating an instance of data class
            resolve();                                     //Resolve function indicating successful initialization

            
        });

        });
        });
}


function getAllStudents() {                          //Declaring function getAllStudents
    return new Promise ((resolve, reject) => {
        if(dataCollection && dataCollection.students.length > 0) {     //Checking if the dataCollection object exists and the length of student array is not 0
            resolve(dataCollection.students);                           // Resolving the promise
        }
        else {
            reject("No results found");                                //Rejecting the promise
        }

    });

}


function getTAs() {                                    //Declaring function getTAs
    return new Promise((resolve,reject) => {

        if (dataCollection && dataCollection.students.length > 0) {            //Checking if the dataCollection object exists and the length of student array is not 0 
            let studentTAs = [];                                               //Declaring an empty array to store the students who are TA.
            for (let i = 0; i < dataCollection.students.length ; i++ ){
                let student = dataCollection.students[i];
                if(student.TA){
                    studentTAs.push(student);
                }
        }
            resolve(studentTAs);                    //Resolving promise

    }
        else {
            reject("No results returned");              //Rejecting promise

    }
});
}


function getCourses() {                             //Declaring function getCourses
    return new Promise((resolve,reject) => {
        if(dataCollection && dataCollection.courses.length > 0){       //Checking if the dataCollection object exists and length of course array is not 0
            resolve(dataCollection.courses);                       //Resolving promise
        }
        else{

            reject("No results returned");                            //Rejecting promise
        }
    
    });
}

module.exports = {Data, initialize, getAllStudents,getTAs,getCourses  }  // Exporting th emodule for other files to use.