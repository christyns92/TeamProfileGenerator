const Engineer = require("../lib/Engineer");

test("Can instantiate Employee instance", () => {
    const engineer = new Engineer();
    expect(typeof(engineer)).toBe("object");
});
// // test if name is set
test("Can set name via constructor arguments", () => {
    const name = "Jen";
    const engineer = new Engineer(name);
    expect(engineer.name).toBe(name);
});
// test if ID is set
test("Can set id via constructor argument", () => {
    const ID = 1;
    const engineer = new Engineer("Jen", ID);
    expect(engineer.ID).toBe(ID);
});
// test if email is set
test("Can set email via constructor argument", () => {
    const email = "Jen@test.com";
    const engineer = new Engineer("Bob", 2, email);
    expect(engineer.email).toBe(email);
});
//test to see if getName() returns name 
test("Can get name via getName()", () => {
    const name = "Jen";
    const engineer = new Engineer(name);
    expect(engineer.getName()).toBe(name);
});
//test to see if getId() returns id test value
test("Can get id via getId()", () => {
    const ID = 2;
    const engineer = new Engineer("Bob", ID);
    expect(engineer.getID()).toBe(ID);
});
//test to see if getEmail() returns email test value
test("Can get email via getEmail()", () => {
    const email = "Bob@test.com";
    const engineer = new Engineer("Bob", 2, email);
    expect(engineer.getEmail()).toBe(email);
});
//test to see if getRole() returns "Engineer"
test("getRole() should return \"Engineer\"", () => {
    const role = "Engineer";
    const engineer = new Engineer("Jen", 1, "Jen@test.com");
    expect(engineer.getRole()).toBe(role);
});