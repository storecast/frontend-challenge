import * as React from 'react'
import { secondaryTextColor } from '../modules/theme'

const Button = (props: any) => {
  return (
    <span>
      <button {...props}/>
      <style jsx>{`
        button {
          border: 1px solid #000;
          padding: 1rem;
          background-color: transparent;
          font-size: initial;
          transition: all .1s ease-in-out;
          cursor: pointer;
        }
        button:hover:enabled {
          background-color: #000;
          color: #fff;
          border-color: #000;
        }
        button:disabled {
          background-color: ${secondaryTextColor};
          color: #fff;
          border-color: ${secondaryTextColor};
        }
      `}</style>
    </span>
  )
}

export default Button