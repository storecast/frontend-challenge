import { action, observable, computed } from 'mobx'
import { FieldName, IForm, IField, initForm, validateForm, validateEmail } from './registerForm'
import { createUser, User } from './sdk/index'

let store: Store | null = null

export type Step = 'email' | 'register'

export class Store {

  @observable step: Step = 'email'

  @observable form: IForm = initForm()

  @observable isRegistered: boolean = false

  @observable user: User | null = null

  @observable token: string | null = null

  @observable pending: boolean = false

  @computed get isRegisterDisabled() {
    let hasPristine = !!Object.keys(this.form).find((fieldName) => (<IField>this.form[fieldName]).pristine)
    return this.pending || hasPristine
  }

  @action updateForm = (fieldName: FieldName, value: string) => {
    const field: IField = this.form[fieldName]
    field.pristine = false
    field.value = value
  }

  @action checkEmail = () => {
    const email = this.form.email
    const validEmail = validateEmail(email)
    if (!validEmail) {
      return
    }
    this.step = 'register'
  }

  @action register = (): Promise<boolean> => {
    const validated = validateForm(this.form)
    if (!validated) {
      return Promise.resolve(false)
    }
    const user = {
      name: validated.name,
      age: validated.age,
      email: validated.email,
      newsletter: validated.newsletter
    }
    this.pending = true
    return createUser(user).then(result => {
      this.user = result.user
      this.token = result.token
      this.pending = false
      return true
    }).catch(error => {
      // FIXME implement error handling
      this.pending = false
      return false
    })
  }

  @action start = () => {
    this.step = 'email'
  }
}

export function getStore() {
  let isServer = typeof window === 'undefined'
  if (isServer) {
    return new Store()
  } else {
    if (store === null) {
      store = new Store()
      return store
    }
    return store
  }
}