// no typing available yet for next 2.

declare module 'next/head' {
  import * as React from 'react';

  export default class Head extends React.Component<any, any> {
  }
}

declare module 'next/link' {
  import * as React from 'react';

  export default class Link extends React.Component<any, any> {
  }
}

declare module 'next/router' {
  export default class Router {
    static push(s: string): Promise<any>
    static prefetch(s: string): Promise<any>
  }
}