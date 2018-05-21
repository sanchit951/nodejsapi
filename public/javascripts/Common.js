const config = {
    user: 'sa',
    password: 'Passw0rd',
    server: 'localhost', // You can use 'localhost\\instance' to connect to named instance
    database: 'employeedb5',


}
const fetchEmployeeInput = 'fname';
const FetchEmployeeProcedure = 'dbo.SearchEmployee';

//constants for EditEmployee /add
const editEmployeeProcedure = 'dbo.EditEmployee'

const EmployeeLname = "lname";
const EmployeeDoj = "doj";
const EmployeeGender = "gender";
const EmployeeLocation = "location";
const EmployeeState = "state";
const id = "id";
//end

// constants for DeleteEmployee
const deleteEmployeeProcedure = 'dbo.DeleteEmployee'


// constants for adding Employee

const addEmployeeProcedure = 'dbo.AddEmployee';


// constants for advance search

const advanceSearchProcedure = 'dbo.AdvanceSearch';
const field = 'field';
const operator = 'operator';
const value = 'value';

//Constants  for Employeedepartment

const departmentVal="DepartmentVal";
const nameVal="NameVal";
const searchByDepartment="SearchByDepartment";

//constants for fetchDepartment
const fetchDepartment="FetchDepartment";

//Exports for EditEmployee
module.exports.EmployeeLname = EmployeeLname;
module.exports.EmployeeDoj = EmployeeDoj;
module.exports.EmployeeGender = EmployeeGender;
module.exports.EmployeeLocation = EmployeeLocation;
module.exports.EmployeeState = EmployeeState;
module.exports.editEmployeeProcedure = editEmployeeProcedure;
module.exports.id = id;


//EXports for FetchEmployee
module.exports.fetchEmployeeInput = fetchEmployeeInput;
module.exports.config = config;
module.exports.FetchEmployeeProcedure = FetchEmployeeProcedure;

//EXports for DeleteEmployee

module.exports.deleteEmployeeProcedure = deleteEmployeeProcedure;

//Exports for AddEmployee
module.exports.addEmployeeProcedure = addEmployeeProcedure;

//Exports for advance search
module.exports.advanceSearchProcedure = advanceSearchProcedure;
module.exports.field = 'field';
module.exports.operator = 'operator';
module.exports.value = 'searchvalue';




//exports for department
module.exports.departmentVal=departmentVal;
module.exports.nameVal=nameVal;
module.exports.searchByDepartment=searchByDepartment;



//exports for fetch department

module.exports.fetchDepartment=fetchDepartment;
