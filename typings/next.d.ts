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
  function makeGreeting(s: string): string;

  export default class Router {
    static push(s: string): void
  }
}