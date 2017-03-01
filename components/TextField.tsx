import * as React from 'react'
import { inject, observer } from 'mobx-react'
import { Store } from '../modules/store'
import { FieldName } from '../modules/form'
import { borderColor, textColor } from '../modules/theme'

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
  const errorStyle = field.error ? {} : { visibility: 'hidden' }
  return (
    <div>
      <input
        placeholder={props.label}
        type={props.type}
        value={field.value}
        onChange={(e) => props.store.updateForm(props.name, e.target.value)}/>
      <div className="error" style={errorStyle}>{props.errorMessage}</div>
      <style jsx>{`
        input {
          display: block;
          border: none;
          font-size: 1rem;
          width: 100%;
          background-color: transparent;
          padding: 0;
          height: 2rem;
          outline: none;
          border-bottom: 2px solid ${borderColor};
          transition: all .1s ease-in-out;
        }
        input:focus {
          border-bottom-color: #000;
        }
        .error {
          font-size: 0.8rem;
          color: ${textColor};
          font-style: italic;
          margin: 0.2rem;
        }
      `}</style>
    </div>
  )
}

export default inject('store')(observer<OuterProps>(TextField))