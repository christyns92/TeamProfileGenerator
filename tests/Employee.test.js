const Employee = require('../lib/Employee');

describe('Employee class constructor', () => {
    test('Get name method', () => {
        var name = "Karen"
        var person = new Employee(name)
        expect(person.getName()).toBe(name)
    })
    test('Get ID method', () => {
        var ID = 99
        var person = new Employee("Karen", ID)
        expect(person.getID()).toBe(ID)
    })
    test('Get email method', () => {

    })
})