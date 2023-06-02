/*********************************************************************************
*  WEB700 – Assignment 2
*  I declare that this assignment is my own work in accordance with Seneca  Academic Policy.  
*  No part of this assignment has been copied manually or electronically from any other source
*  (including web sites) or distributed to other students.
* 
*  Name: LAVANYA SASIKALA Student ID:156621211 Date: 01/06/2023
*
********************************************************************************/ 



var collegeData = require("./modules/collegeData.js");  //importing cllegeData.js module.
collegeData.initialize()                            //Calling initialize function
    .then(() => {
        collegeData.getAllStudents()                //Calling getAllStudents to retrieve students
            .then((students) => {
                 console.log(`Successfully retrieved ${students.length} students.`)
            }).catch ((error) => {
                console.error("Error retrieving students:",error)
                });


        collegeData.getCourses()         //Calling getAllStudents to retrieve students
            .then((courses) =>{

            console.log(`Successfully retrieved ${courses.length} courses.`);

        }).catch ((error) => {  
        console.error("Error retrieving courses.",error);

        });

        collegeData.getTAs()        //Calling getAllStudents to retrieve students who are TAs
            .then((studentTAs) =>
             {
            console.log(`Successfully retrieved ${studentTAs.length} TAs.`);
            }).catch ((error) => {

            console.error("Error retrieving TAs", error);
    });
}).catch((error) => {
    console.error("Data initializatin failed",error);

});
