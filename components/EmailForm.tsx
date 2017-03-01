import * as React from 'react'
import { inject, observer } from 'mobx-react'
import { Store } from '../modules/store'
import TextField from './TextField'
import Button from './Button'
import Router from 'next/router'
import { spacing } from '../modules/theme'

interface Props {
  store: Store
}

const StepEmail = (props: Props) => {
  const onSubmit: React.EventHandler<any> = e => {
    props.store.checkEmail().then(registered => registered && Router.push('/register'))
    e.preventDefault()
  }
  return (
    <form onSubmit={onSubmit}>
      <div className="field">
        <h3>First, enter your email.</h3>
        <fieldset>
          <TextField
            label="Email"
            name="email"
            errorMessage="Please enter a valid Email address."
          />
        </fieldset>
      </div>
      <Button type="submit" disabled={props.store.pending}>Next</Button>
      <style jsx>{`
        .field, fieldset {
          margin-bottom: ${spacing.section};
        }
      `}</style>
    </form>
  )
}

export default inject('store')(observer<{}>(StepEmail))