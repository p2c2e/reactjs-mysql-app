
const crud = require('express-sequelize-crud')

const express = require('express');
const app = express();

var bodyParser = require('body-parser');
 
global.__basedir = __dirname;
 
const db = require('./app/config/db.config.js');

const Customer = db.Customer;
const Employee = db.Employee;

let router = require('./app/routers/router.js')
const cors = require('cors')
const corsOptions = {
  origin: 'http://localhost:4200',
  optionsSuccessStatus: 200
}
app.use(cors(corsOptions));

app.use(bodyParser.json());
app.use(express.static('resources'));
app.use('/', router);

app.use(
    // http://localhost:8080/api/employees/0002
    // http://localhost:8080/api/employees
    crud.crud('/api/employee', crud.sequelizeCrud(db.Employee))
)

app.use(
    crud.crud('/api/taggroup', crud.sequelizeCrud(db.TagGroup)),
    crud.crud('/api/tag', crud.sequelizeCrud(db.Tag)),
    crud.crud('/api/tagtie', crud.sequelizeCrud(db.TagTie))
)
// Create a Server
const server = app.listen(8080, function () {
 
  let host = server.address().address
  let port = server.address().port
 
  console.log("App listening at http://%s:%s", host, port); 
})

db.Tag.sync();
db.TagGroup.sync();
db.TagTie.sync();
db.Employee.sync();


// db.sequelize.sync({force: true}).then(() => {
//
// });

// Create a sample dataset for demo ...
// db.sequelize.sync({force: true}).then(() => {
//   console.log('Drop and Resync with { force: true }');
//   Customer.sync().then(() => {
//     const customers = [
//       {
//         firstname: 'Jack', lastname: 'Smith',
//         age: 23, address: '374 William S Canning Blvd'
//       },
//       {
//         firstname: 'Adam', lastname: 'Johnson',
//         age: 31, address: 'Fall River MA 2721. 121 Worcester Rd'
//       },
//       {
//         firstname: 'Dana', lastname: 'Bay',
//         age: 46, address: 'Framingham MA 1701. 677 Timpany Blvd'
//       },
//     ]
//
//     for (let i = 0; i < customers.length; i++) {
//       Customer.create(customers[i]);
//     }
//   })
//
//   Employee.sync().then(() => {
//     const employees = [
//       {
//         id: '0001', firstname: 'Jack', lastname: 'Smith',
//       },
//       {
//         id: '0002', firstname: 'Joe', lastname: 'Smith',
//         supervisor_id: '0001'
//       },
//     ]
//
//     for (let i = 0; i < employees.length; i++) {
//       Employee.create(employees[i]);
//     }
//   })
//
//   Employee.sync().then(() => {
//     Employee.findByPk("0002").then(emp => {
//           console.log(emp.firstname);
//           console.log(emp.supervisor_id);
//         }
//     )
//   })
//
//   Employee.sync().then(() => {
//     Employee.findByPk("0002", {
//       include: [{
//         model: Employee,
//         as: 'supervisor'
//       }]
//     }).then(emp => {
//       console.log(emp.firstname);
//       console.log(emp.supervisor.firstname);
//     });
//   })
//
//   // Employee.sync().then(() => {
//   //   Employee.findOne({
//   //     where: {id: "0002"},
//   //     include: [{
//   //       model: Employee,
//   //       as: 'supervisor'
//   //     }]
//   //   }).then(emp => {
//   //     // console.log(emp.firstname);
//   //     console.log(emp.supervisor);
//   //   });
//   // })
//
// })