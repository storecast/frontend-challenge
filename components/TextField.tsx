import * as React from 'react'
import { inject, observer } from 'mobx-react'
import { Store } from '../store'
import { FieldName } from '../registerForm'

interface OuterProps {
  name: FieldName
  label: string
  errorMessage: string
  type?: string
}

interface Props extends OuterProps {
  store: Store
}

const TextField = (props: Props) => {
  const field = props.store.form[props.name]
  return (
    <div>
      <div>{field.error ? props.errorMessage : null}</div>
      <div>{props.label}</div>
      <input
        type={props.type}
        value={field.value}
        onChange={(e) => props.store.updateForm(props.name, e.target.value)}/>
    </div>
  )
}

export default inject('store')(observer<OuterProps>(TextField))