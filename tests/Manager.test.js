const Manager = require('../lib/Manager');

//instantiate -a way to create an object using functions
test("Can instantiate Employee instance", () => {
    const manager = new Manager();
    expect(typeof(manager)).toBe("object");
});
// // test if can set name via constructor
test("Can set name via constructor arguments", () => {
    const name = "Jen";
    const manager = new Manager(name);
    expect(manager.name).toBe(name);
});
// test if can set id via constructor
test("Can set id via constructor argument", () => {
    const ID = 2;
    const manager = new Manager("Bob", ID);
    expect(manager.ID).toBe(ID);
});
// test if can set email via constructor
test("Can set email via constructor argument", () => {
    const email = "Bob@test.com";
    const manager = new Manager("Bob", 2, email);
    expect(manager.email).toBe(email);
});
//test to see if getName() returns name test value
test("Can get name via getName()", () => {
    const name = "Jen";
    const manager = new Manager(name);
    expect(manager.getName()).toBe(name);
});
//test to see if getId() returns id test value
test("Can get id via getId()", () => {
    const ID = 2
    const manager = new Manager("Bob", ID);
    expect(manager.getID()).toBe(ID);
});
//test to see if getEmail() returns email test value
test("Can get email via getEmail()", () => {
    const email = "Bob@test.com";
    const manager = new Manager("Bob", 2, email);
    expect(manager.getEmail()).toBe(email);
});
//test to see if getRole() returns "Manager"
test("getRole() should return \"Manager\"", () => {
    const role = "Manager";
    const manager = new Manager("Jen", 1, "Jen@test.com");
    expect(manager.getRole()).toBe(role);
});