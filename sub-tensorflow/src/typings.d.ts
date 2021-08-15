declare module '*.less' {
  interface IClassNames {
    [className: string]: string;
  }
  const classNames: IClassNames;
  export = classNames;
}

declare module 'zus' {
  interface Zus {
    connect: any;
  }
  const zus: Zus;
  export = zus;
}
