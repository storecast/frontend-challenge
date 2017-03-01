import { action, observable } from 'mobx'
import { FieldName, IForm, IField, initForm, validateForm, validateEmail } from './form'
import { createUser, User } from '../sdk/index'

let store: Store | null = null

export class Store {
  @observable form: IForm = initForm()

  @observable isRegistered: boolean = false

  @observable user: User | null = null

  @observable token: string | null = null

  @observable pending: boolean = false

  @action updateForm = (fieldName: FieldName, value: string) => {
    const field: IField = this.form[fieldName]
    field.pristine = false
    field.error = false
    field.value = value
  }

  @action checkEmail = (): Promise<boolean> => {
    const email = this.form.email
    const validEmail = validateEmail(email)
    if (!validEmail) {
      return Promise.resolve(false)
    }
    this.pending = true
    // TODO check for existing email.
    return new Promise((resolve) => setTimeout(() => resolve(true), 500))
      .then(() => {
        this.pending = false
        return true
      })
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