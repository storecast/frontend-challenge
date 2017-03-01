import { validateEmail, initField } from '../modules/form'

test('validate correct email without error', () => {
  let email = initField('pierrehenri@g.com')
  validateEmail(email)
  expect(email.error).toBe(false)
})

test('validate incorrect email with error', () => {
  let email = initField('pierrehenri?g.com')
  validateEmail(email)
  expect(email.error).toBe(true)
})