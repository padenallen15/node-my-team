const Manager = require('../lib/Manager');

test(`Creates a Manager`, async ()=>{
  const manager = new Manager("Dave", 138982, "Dave@email.com", 1007)

  expect(manager.getName()).toEqual(manager.name)
  expect(manager.getId()).toEqual(manager.id)
  expect(manager.getEmail()).toEqual(manager.email)
  expect(manager.getOfficeNumber()).toEqual(manager.officNumber)
  expect(manager.getRole()).toEqual('Manager')
})