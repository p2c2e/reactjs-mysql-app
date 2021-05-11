module.exports = (sequelize, Sequelize) => {
    const Employee = sequelize.define('employee', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        emp_id: {
            type: Sequelize.STRING
        },
        firstname: {
            type: Sequelize.STRING
        },
        lastname: {
            type: Sequelize.STRING
        },
        supervisor_id: {
            type: Sequelize.STRING
        }
    });

    // Employee.belongsTo(Employee, {foreignKey: 'supervisor_id', as: 'supervisor'});


    // https://stackoverflow.com/questions/64937842/how-to-define-associations-and-query-self-referencing-table-in-sequelize

    /*
    const found = await Employee.findById(id, {
      include: [{
        model: Employee,
        as: 'supervisor'
      }]
    });
     */

    return Employee;
}
