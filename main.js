import inquirer from 'inquirer';
// Define the Student class
class Student {
    name;
    age;
    schoolName;
    constructor(name, age, schoolName) {
        this.name = name;
        this.age = age;
        this.schoolName = schoolName;
    }
}
// Define the Teacher class
class Teacher {
    name;
    age;
    schoolName;
    constructor(name, age, schoolName) {
        this.name = name;
        this.age = age;
        this.schoolName = schoolName;
    }
}
// Define the School class
class School {
    name;
    students = [];
    teachers = [];
    constructor(name) {
        this.name = name;
    }
    // Add a student to the school
    addStudent(student) {
        this.students.push(student);
        console.log(`Student ${student.name} added to ${this.name}.`);
    }
    // Add a teacher to the school
    addTeacher(teacher) {
        this.teachers.push(teacher);
        console.log(`Teacher ${teacher.name} added to ${this.name}.`);
    }
    // Display information about the school
    displayInfo() {
        console.log(`School Name: ${this.name}`);
        console.log('Students:');
        this.students.forEach(student => {
            console.log(`- ${student.name} (Age: ${student.age})`);
        });
        console.log('Teachers:');
        this.teachers.forEach(teacher => {
            console.log(`- ${teacher.name} (Age: ${teacher.age})`);
        });
    }
}
// Create school instances
const school1 = new School('The City Grammar');
const school2 = new School('Beaconhouse School System');
const school3 = new School('Habib Public School');
// Function to handle adding a student
async function handleAddStudent() {
    const { name, age, schoolName } = await inquirer.prompt([
        {
            name: 'name',
            type: 'input',
            message: 'Enter student name:',
        },
        {
            name: 'age',
            type: 'number',
            message: 'Enter student age:',
        },
        {
            name: 'schoolName',
            type: 'list',
            message: 'Choose a school:',
            choices: [school1.name, school2.name, school3.name],
        }
    ]);
    const student = new Student(name, age, schoolName);
    if (schoolName === school1.name) {
        school1.addStudent(student);
    }
    else if (schoolName === school2.name) {
        school2.addStudent(student);
    }
    else if (schoolName === school3.name) {
        school3.addStudent(student);
    }
}
// Function to handle adding a teacher
async function handleAddTeacher() {
    const { name, age, schoolName } = await inquirer.prompt([
        {
            name: 'name',
            type: 'input',
            message: 'Enter teacher name:',
        },
        {
            name: 'age',
            type: 'number',
            message: 'Enter teacher age:',
        },
        {
            name: 'schoolName',
            type: 'list',
            message: 'Choose a school:',
            choices: [school1.name, school2.name, school3.name],
        }
    ]);
    const teacher = new Teacher(name, age, schoolName);
    if (schoolName === school1.name) {
        school1.addTeacher(teacher);
    }
    else if (schoolName === school2.name) {
        school2.addTeacher(teacher);
    }
    else if (schoolName === school3.name) {
        school3.addTeacher(teacher);
    }
}
// Function to handle viewing school info
function handleViewSchoolInfo() {
    const schools = [school1, school2, school3];
    schools.forEach(school => {
        school.displayInfo();
        console.log('-'.repeat(30));
    });
}
// Define the main function for user interaction
async function main() {
    const options = [
        'Add Student',
        'Add Teacher',
        'View School Info',
        'Exit',
    ];
    while (true) {
        // Ask the user for their choice
        const { action } = await inquirer.prompt([
            {
                name: 'action',
                type: 'list',
                message: 'Choose an action:',
                choices: options,
            }
        ]);
        // Handle the user's choice
        switch (action) {
            case 'Add Student':
                await handleAddStudent();
                break;
            case 'Add Teacher':
                await handleAddTeacher();
                break;
            case 'View School Info':
                handleViewSchoolInfo();
                break;
            case 'Exit':
                console.log('Exiting...');
                return;
            default:
                console.log('Invalid choice');
        }
    }
}
// Start the program
main();
