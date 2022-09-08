const sequelize = require("./util/database.js");
const People = require("./models/people.js")
const { faker } = require('@faker-js/faker');

const types = ["employee", "manager", "executive", "vendor", "customer", "contractor"]
const sex = ['M', 'F', 'O']

sequelize
    .sync({ force: true })
    .then((result) => {
        let index;
        let data;
        for (let i = 0; i < 100; i++) {
            index = Math.floor(Math.random() * 6);
            if (index == 0) People.create(employeeOrManager("employee"));
            else if (index == 1) People.create(employeeOrManager("manager"));
            else if (index == 2) People.create(executive());
            else if (index == 3) People.create(vendorsCustomersOrContractors("vendor"));
            else if (index == 4) People.create(vendorsCustomersOrContractors("customer"));
            else if (index == 5) People.create(vendorsCustomersOrContractors("contractor"));
        }
        // console.log("\n--------------------");
        // console.log(result);
    }).catch((err) => {
        console.log(err);
    });

//allTypes returns random data tha all types of employees have
function allTypes() {

    return {
        id: `${faker.random.alphaNumeric(6)}`,
        name: `${faker.name.firstName()} ${faker.name.lastName()}`,
        age: Math.floor(Math.random() * 100),
        phone: `${faker.phone.number()}`,
        email: `${faker.internet.exampleEmail()}`,
        address: `${faker.address.streetAddress()}, ${faker.address.stateAbbr()}`,
    };
}

//returns object to create an employee type or manager type
function employeeOrManager(empType) {
    let spouse;
    let dependants;
    //chance of spouce
    if (Math.random() < 0.5) {
        spouse = `${faker.name.firstName()} ${faker.name.lastName()}`;
    } else { spouse = null; }
    //chance of 1 or 2 dependants
    if (Math.random() < 0.5) {
        dependants = `${faker.name.firstName()} ${faker.name.lastName()}`;
        if (Math.random() > 0.5) {
            dependants = dependants.concat(`, ${faker.name.firstName()} ${faker.name.lastName()}`);
        }
    } else { dependants = null; }
    let data = allTypes();
    return {
        ...data,
        type: `${empType}`,
        companyId: null,
        department: `${faker.name.jobDescriptor()}`,
        title: `${faker.name.jobTitle()}`,
        salary: Math.floor(Math.random() * 150000),
        managersId: Math.floor(Math.random() * 100),
        bonus: null,
        company: null,
        sex: sex[Math.floor(Math.random() * 3)],
        spouse: `${spouse}`,
        dependants: `${dependants}`
    };
}

function executive() {
    let data = employeeOrManager("executive")
    return {
        ...data,
        bonus: `${Math.floor(Math.random() * 30000)}`
    }
}

function vendorsCustomersOrContractors(emptype) {
    let data = allTypes()
    return {
        ...data,
        type: `${emptype}`,
        company: `${faker.company.name()}`
    }
}