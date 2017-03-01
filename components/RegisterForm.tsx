import * as React from 'react'
import Router from 'next/router'
import { inject, observer } from 'mobx-react'
import { Store } from '../modules/store'
import TextField from './TextField'
import Radio from './Radio'
import Button from './Button'
import { spacing } from '../modules/theme'

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
      <h3>Now enter your personal information.</h3>
      <fieldset>
        <TextField
          label="Name"
          name="name"
          errorMessage="Please enter your name."
        />
        <TextField
          label="Age"
          name="age"
          errorMessage="Please enter your age."
        />
      </fieldset>
      <p>Receive the newsletter.</p>
      <fieldset>
        <Radio name="newsletter" value="daily"/>
        <Radio name="newsletter" value="weekly"/>
        <Radio name="newsletter" value="monthly"/>
      </fieldset>
      <Button type="submit" disabled={props.store.pending}>Register now !</Button>
      <style jsx>{`
        fieldset {
          margin-bottom: ${spacing.section};
        }
      `}</style>
    </form>
  )
}

export default inject('store')(observer<{}>(StepRegister))