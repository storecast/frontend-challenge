import * as React from 'react'
import { inject, observer } from 'mobx-react'
import { Store } from '../store'
import StepEmail from './StepEmail'
import StepRegister from './StepRegister'

interface Props {
  store: Store
}

const RegisterWizard = (props: Props) => {
  return (
    <div>
      <h1>Wizard</h1>
      { props.store.step == 'email'
        ? <StepEmail/>
        : <StepRegister/>
      }
    </div>
  )
}

export default inject('store')(observer<{}>(RegisterWizard))