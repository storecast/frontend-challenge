import * as React from 'react'
import Page from '../components/Page'
import RegisterForm from '../components/RegisterForm'
import { ServerResponse } from 'http'

export default class extends React.Component<{}, {}> {
  static async getInitialProps({ res }: {res?: ServerResponse}) {
    // We do not store the email between calls so far, so redirect for simplicity.
    res && res.writeHead(302, { Location: '/' }) && res.end()
    return {}
  }

  render() {
    return (
      <Page>
        <RegisterForm/>
      </Page>
    )
  }
}