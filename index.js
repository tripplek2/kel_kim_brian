
// Declaring out functions
function calculateTotalScore(students) {
    let total = 0;
    // for loop to check all students
    for (let student of students) {
        total += student.marks
    }
    let average = students.length === 0 ? 0 : total / students.length;

    return {total, average};
    
}



// Declaring function categorize students
function categorizeStudents(students) {

// initializing empty arrays to store names
    let passed = [];
    let failed = [];

// looping through to check students marks
for (let student of students) {
        if (student.marks >= 50) {
            passed.push(student.name);
        }
        else {
            failed.push(student.name);
        }
    }

    return {passed, failed};

   
}

// Declaring functions generate report
function generateReport (students, average, passed, failed) {
    // using .map to turn each student obj into a string
    const studentLines = students.map(s => `${s.name} scored ${s.marks}`).join("\n");

return `${studentLines}
Average: ${average.toFixed(2)}
Passed: ${passed.length}
Failed: ${failed.length}`;

}

// Declaring functions to process data

function processStudentsData(students) {
    // check if array is empty and prevents dividing by 0
    if (students.length === 0){
        console.log("No student Data Available!");
        return;
    }

// calls all functions in order
const {total, average} = calculateTotalScore(students);
const {passed, failed} = categorizeStudents(students);
const report = generateReport(students, average, passed, failed);

console.log(report);

// prints the report to the console
return {
    average, 
    passed,
    failed,
    report
};

}

const students = [
  { name: "Alice", marks: 80 },
  { name: "Bob", marks: 45 },
  { name: "Charlie", marks: 60 }
];

processStudentsData(students);






