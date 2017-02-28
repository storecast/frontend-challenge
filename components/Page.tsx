import * as React from 'react'
import { Provider } from 'mobx-react'
import { getStore } from '../store'
import DevTools from 'mobx-react-devtools'

interface Props {
  children?: React.ReactChildren
}

export default (props: Props) => {
  const store = getStore()
  return (
    <div>
      <Provider store={store}>
        {props.children}
      </Provider>
      <DevTools/>
    </div>
  )
}