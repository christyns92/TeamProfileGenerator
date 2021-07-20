const Employee = require("../lib/Employee");
test("Can instantiate Employee instance", () => {
    const employee = new Employee();
    expect(typeof(employee)).toBe("object");
});
// // test if name is set
test("Can set name via constructor arguments", () => {
    const name = "Jen";
    const employee = new Employee(name);
    expect(employee.name).toBe(name);
});
// test if ID is set
test("Can set id via constructor argument", () => {
    const ID = 2;
    const employee = new Employee("Bob", ID);
    expect(employee.ID).toBe(ID);
});
// test if email is set
test("Can set email via constructor argument", () => {
    const email = "Bob@test.com";
    const employee = new Employee("Bob", 2, email);
    expect(employee.email).toBe(email);
});
//test to see if getName() returns name 
test("Can get name via getName()", () => {
    const name = "Jen";
    const employee = new Employee(name);
    expect(employee.getName()).toBe(name);
});
//test to see if getId() returns id 
test("Can get id via getId()", () => {
    const ID = 2;
    const employee = new Employee("Bob", ID);
    expect(employee.getID()).toBe(ID);
});
//test to see if getEmail() returns email 
test("Can get email via getEmail()", () => {
    const email = "Bob@test.com";
    const employee = new Employee("Bob", 2, email);
    expect(employee.getEmail()).toBe(email);
});
//test to see if getRole() returns "Employee"
test("getRole() should return \"Employee\"", () => {
    const role = "Employee";
    const employee = new Employee("Jen", 1, "Jen@test.com");
    expect(employee.getRole()).toBe(role);
});