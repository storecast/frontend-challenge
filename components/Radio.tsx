import * as React from 'react'
import { inject, observer } from 'mobx-react'
import { Store } from '../modules/store'
import { FieldName } from '../modules/form'
import { spacing } from '../modules/theme'

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
  const id = 'radio_' + props.name + props.value
  return (
    <div className="radio">
      <input
        id={id}
        type="radio"
        name={props.name}
        value={props.value}
        checked={checked}
        onChange={(e) => props.store.updateForm(props.name, props.value)}/>
      <label htmlFor={id}>{props.value}</label>
      <style jsx>{`
        .radio {
          display: flex;
          align-items: baseline;
        }
        input {
          cursor: pointer;
        }
        label {
          margin-left: ${spacing.section};
          line-height: 1.5rem;
          cursor: pointer;
        }
      `}</style>
    </div>
  )
}

export default inject('store')(observer<OuterProps>(Radio))