import { FC } from ".";
// import original module declarations
import "styled-components";
// eslint-disable-next-line react/no-typos
import "react";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    screen: {
      tablet: string;
      laptop: string;
      laptopLg: string;
    };
    colors: {
      gray: string;
      black: string;
      white: string;
      red: string;
    };
  }

  export type cssProps = FlattenInterpolation<ThemeProps<DefaultTheme>>;
}

declare module "react" {
  export type FC<P = {}> = FunctionComponent<P>;
  export interface FunctionComponent<P = {}> {
    (props: PropsWithChildren<P>, context?: any): ReactElement<any, any> | null;
    propTypes?: WeakValidationMap<P> | undefined;
    contextTypes?: ValidationMap<P> | undefined;
    defaultProps: Partial<P> | undefined;
    displayName: string | undefined;
  }
}
