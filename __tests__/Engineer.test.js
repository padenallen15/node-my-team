const Engineer = require('../lib/Engineer');

test(`Creates an Engineer`, async ()=>{
  const engineer = new Engineer("Dave", 138982, "Dave@email.com", "Dave/github.com")

  expect(engineer.getName()).toEqual(engineer.name)
  expect(engineer.getId()).toEqual(engineer.id)
  expect(engineer.getEmail()).toEqual(engineer.email)
  expect(engineer.getGithub()).toEqual(engineer.github)
  expect(engineer.getRole()).toEqual('Engineer')
})