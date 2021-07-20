const Intern = require("../lib/Intern");
//instantiate -a way to create an object using functions
test("Can instantiate Employee instance", () => {
    const intern = new Intern();
    expect(typeof(intern)).toBe("object");
});
// // test if can set name via constructor
test("Can set name via constructor arguments", () => {
    const name = "Jen";
    const intern = new Intern(name);
    expect(intern.name).toBe(name);
});
// test if can set id via constructor
test("Can set id via constructor argument", () => {
    const ID = 1;
    const intern = new Intern("Jen", ID);
    expect(intern.ID).toBe(ID);
});
// test if can set email via constructor
test("Can set email via constructor argument", () => {
    const email = "Bob@test.com";
    const intern = new Intern("Bob", 2, email);
    expect(intern.email).toBe(email);
});
//test to see if getName() returns name test value
test("Can get name via getName()", () => {
    const name = "Jen";
    const intern = new Intern(name);
    expect(intern.getName()).toBe(name);
});
//test to see if getId() returns id test value
test("Can get id via getId()", () => {
    const ID = 2;
    const intern = new Intern("Bob", ID);
    expect(intern.getID()).toBe(ID);
});
//test to see if getEmail() returns email test value
test("Can get email via getEmail()", () => {
    const email = "Bob@test.com";
    const intern = new Intern("Bob", 2, email);
    expect(intern.getEmail()).toBe(email);
});
//test to see if getRole() returns "Intern"
test("getRole() should return \"Intern\"", () => {
    const role = "Intern";
    const intern = new Intern("Jen", 1, "Jen@test.com");
    expect(intern.getRole()).toBe(role);
});