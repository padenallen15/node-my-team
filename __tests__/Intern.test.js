const Intern = require('../lib/Intern');

test(`Creates an Intern`, async ()=>{
  const intern = new Intern("Dave", 138982, "Dave@email.com", "school")

  expect(intern.getName()).toEqual(intern.name)
  expect(intern.getId()).toEqual(intern.id)
  expect(intern.getEmail()).toEqual(intern.email)
  expect(intern.getSchool()).toEqual(intern.school)
  expect(intern.getRole()).toEqual('Intern')
})