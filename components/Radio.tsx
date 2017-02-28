import * as React from 'react'
import { inject, observer } from 'mobx-react'
import { Store } from '../store'
import { FieldName } from '../registerForm'

interface OuterProps {
  name: FieldName
  value: string
  defaultChecked?: boolean
}

interface Props extends OuterProps {
  store: Store
}

const Radio = (props: Props) => {
  const field = props.store.form[props.name]
  const checked = field.value == props.value
  return (
    <div>
      <input
        type="radio"
        name={props.name}
        value={props.value}
        checked={checked}
        onChange={(e) => props.store.updateForm(props.name, props.value)}/>
    </div>
  )
}

export default inject('store')(observer<OuterProps>(Radio))