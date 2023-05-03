// Write your solution in this file!

const employee = {
    name : "Jon", 
    streetAddress : "7907"
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {
        ...employee,
        [key]: value,
    };
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value
    return employee;
}

function deleteFromEmployeeByKey(employee, key) {
    const newEmpObj = { ...employee }
    delete newEmpObj[key]
    return newEmpObj;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key]
    return employee;
}