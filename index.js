const inquirer = require('inquirer');
const { generateHTML, writeFile, css } = require(`./src/generateHTML`)
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const employees = [];

async function teamManager() {
  await inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: "What is the team manager's name?"
    },

    {
      type: 'input',
      name: 'id',
      message: 'What is their ID number?'
    },

    {
      type: 'input',
      name: 'email',
      message: 'What is their email?'
    },

    {
        type: 'input',
        name: 'office',
        message: 'What is their office number?'
    }
  ])
  .then(function(data){
    employees.push(new Manager(data.name, data.id, data.email, data.office))
    newEmployee();
  })
}


async function newEmployee() {
  await inquirer.prompt([
    {
      type: 'list',
      name: 'role',
      message: "What is the employee's role?",
      choices: ["Engineer", "Intern"]
    },

    {
      type: 'input',
      name: 'name',
      message: "What is their name?"
    },

    {
      type: 'input',
      name: 'id',
      message: 'What is their ID number?'
    },

    {
      type: 'input',
      name: 'email',
      message: 'What is their email?'
    },

    {
      type: 'input',
      name: 'github',
      message: 'What is their github link?',
      when: function({role}){
        if(role === `Engineer`){
            return true
        } else{
            return false
        }
      }
    },

    {
      type: 'input',
      name: 'school',
      message: 'Where do they go to school?',
      when: function({role}){
        if(role === `Intern`){
            return true
        } else{
            return false
        }
      }
    },
    
    {
      type: 'confirm',
      name: 'anotherEmployee',
      message: 'Do you want to add another employee?',
    }
  ])
  .then(function(data){
    if (data.role === "Engineer"){
      employees.push(new Engineer(data.name, data.id, data.email, data.github))
    } else {
      employees.push(new Intern(data.name, data.id, data.email, data.school))
    }

    if (data.anotherEmployee){
      newEmployee();
    } else {
      writeFile(`./dist/index.html`, generateHTML(employees));
      writeFile(`./dist/styles.css`, css);
    }
  })
};

teamManager()