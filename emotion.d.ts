import '@emotion/react'

export type TSize = 'mobile' | 'laptop' | 'desktop';

export type TElementProps = {
  sizeId: TSize;
  theme?: unknown;
}

declare module '@emotion/react' {
  export interface Theme {
    components: {
      [key: string]: CSSRuleList;
    }
    containers: {
      [key: string]: CSSRuleList;
    }
  }
}
