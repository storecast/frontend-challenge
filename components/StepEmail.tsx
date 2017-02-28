import * as React from 'react'
import { inject, observer } from 'mobx-react'
import { Store } from '../store'
import TextField from './TextField'

interface Props {
  store: Store
}

const StepEmail = (props: Props) => {
  const onSubmit: React.EventHandler<any> = e => {
    props.store.checkEmail()
    e.preventDefault()
  }
  return (
    <form onSubmit={onSubmit}>
      <TextField
        label="Email"
        name="email"
        errorMessage="Please enter a valid Email address."
      />
      <button type="submit">validate</button>
    </form>
  )
}

export default inject('store')(observer<{}>(StepEmail))