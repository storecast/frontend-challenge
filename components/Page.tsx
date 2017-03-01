import * as React from 'react'
import { Provider } from 'mobx-react'
import { getStore } from '../modules/store'
import DevTools from 'mobx-react-devtools'
import { textColor, secondaryTextColor, backgroundColor, spacing } from '../modules/theme'
import Head from 'next/head'

interface Props {
  children?: React.ReactChildren
}

export default (props: Props) => {
  const store = getStore()
  return (
    <div>
      <Head>
        <title>Frontend Challenge</title>
        <meta charSet='utf-8'/>
        <meta name='viewport' content='initial-scale=1.0, width=device-width'/>
        <link rel="icon" href="/static/icon.png"/>
      </Head>
      <Provider store={store}>
        <div className="wrapper">
          <div className="logo">
            <img className="icon" src="/static/icon.png"/>
            <span>Frontend Challenge</span>
          </div>
          <div className="inner">
            {props.children}
          </div>
        </div>
      </Provider>
      <DevTools/>
      <style jsx global>{`
        html {
          font-family: -apple-system, BlinkMacSystemFont,
                      "Segoe UI", "Roboto", "Oxygen",
                      "Ubuntu", "Cantarell", "Fira Sans",
                      "Droid Sans", "Helvetica Neue", sans-serif;
          -ms-text-size-adjust: 100%;
          -webkit-text-size-adjust: 100%;
          font-size: 1rem;
          background-color: ${backgroundColor}
        }
        body {
          margin: 0;
          -moz-osx-font-smoothing: grayscale;
          -webkit-font-smoothing: antialiased;
          color: ${textColor}
        }
        fieldset {
          border: none;
          padding: 0;
        }
        h1 {
          margin-bottom: 3rem;
        }
        h3 {
          color: ${secondaryTextColor};
        }
        .wrapper {
          display: flex;
          align-items: center;
          min-height: calc(100vh - 95px);
          justify-content: center;
          margin: 0.5rem;
        }
        .inner {
          max-width: 25rem;
          flex-grow: 1;
        }
        .logo {
          position: absolute;
          top: ${spacing.gutter};
          left: ${spacing.gutter};
        }
        .icon {
          vertical-align: middle;
          width: 2rem;
          margin-right: ${spacing.gutter};
        }
    `}</style>
    </div>
  )
}