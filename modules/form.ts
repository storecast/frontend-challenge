import * as validator from 'validator'

export interface IField {
  value: string,
  error: boolean,
  pristine: boolean
}

export interface IForm {
  email: IField,
  name: IField,
  age: IField,
  newsletter: IField,
}

export type FieldName = keyof IForm

export type Newsletter = 'daily' | 'weekly' | 'monthly'

export interface IValidForm {
  email: string,
  name: string,
  age: number,
  newsletter: Newsletter,
}

export function initField(defaultValue: string = ''): IField {
  return {
    value: defaultValue,
    error: false,
    pristine: defaultValue === ''
  }
}

export function initForm(): IForm {
  return {
    email: initField(),
    name: initField(),
    age: initField(),
    newsletter: initField('daily'),
  }
}

export function validateEmail(email: IField): string | null {
  if (!validator.isEmail(email.value)) {
    email.error = true
    return null
  }
  email.error = false
  return email.value
}

export function validateName(name: IField): string | null {
  if (validator.isEmpty(name.value)) {
    name.error = true
    return null
  }
  name.error = false
  return name.value
}

export function validateAge(age: IField): number | null {
  const ageN = parseInt(age.value)
  if (!validator.isNumeric(age.value) || ageN < 1 || ageN > 120) {
    age.error = true
    return null
  }
  age.error = false
  return validator.toInt(age.value)
}

export function validateNewsLetter(newsletter: IField): Newsletter | null {
  // no need to check the radio values
  return newsletter.value as Newsletter
}

export function validateForm(form: IForm): IValidForm | null {
  const email = validateEmail(form.email)
  const name = validateName(form.name)
  const age = validateAge(form.age)
  const newsletter = validateNewsLetter(form.newsletter)
  // See "Type Guards"
  if (!!email && !!name && !!age && !!newsletter) {
    return {
      email,
      name,
      age,
      newsletter,
    }
  }
  return null
}