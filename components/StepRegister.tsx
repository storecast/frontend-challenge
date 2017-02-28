import * as React from 'react'
import Router from 'next/router'
import { inject, observer } from 'mobx-react'
import { Store } from '../store'
import TextField from './TextField'
import Radio from './Radio'

interface Props {
  store: Store
}

const StepRegister = (props: Props) => {
  const onSubmit: React.EventHandler<any> = e => {
    props.store.register().then(registered => registered && Router.push('/confirmation'))
    e.preventDefault()
  }
  return (
    <form onSubmit={onSubmit}>
      <h1>Register </h1>
      <TextField
        label="Name"
        name="name"
        errorMessage="Please enter your name."
      />
      <TextField
        label="Age"
        name="age"
        errorMessage="Please enter your age. You should be at least 13 years old to register."
      />
      <div>Newsletter</div>
      <Radio name="newsletter" value="daily"/>
      <Radio name="newsletter" value="weekly"/>
      <Radio name="newsletter" value="monthly"/>
      <button type="submit" disabled={props.store.isRegisterDisabled}>Register!</button>
    </form>
  )
}

export default inject('store')(observer<{}>(StepRegister))