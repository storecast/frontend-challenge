import { action, observable } from 'mobx'
import { FieldName, IForm, IField, initForm, validateForm, validateEmail } from './form'
import { createUser, User } from '../sdk/index'
import Router from 'next/router'
import { safely, isOk } from './safely'

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

  @action checkEmail = async(): Promise<any> => {
    const email = this.form.email
    const validEmail = validateEmail(email)
    if (!validEmail) {
      return
    }
    this.pending = true
    await Router.push('/register')
    this.pending = false
  }

  @action register = async(): Promise<any> => {
    const validated = validateForm(this.form)
    if (!validated) {
      return
    }
    const user = {
      name: validated.name,
      age: validated.age,
      email: validated.email,
      newsletter: validated.newsletter
    }
    this.pending = true
    const createResult = await safely(createUser(user))
    if (isOk(createResult)) {
      this.user = createResult.value.user
      this.token = createResult.value.token
      await Router.push('/confirmation')
      this.pending = false
    } else {
      //todo error handling
      this.pending = false
    }
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