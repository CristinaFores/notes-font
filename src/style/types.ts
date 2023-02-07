import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: {
        base: string;
        dark: string;
        light: string;
      };
      button: {
        active: string;
        hover: string;
        disable: string;
      };
      draggable: {
        base: string;
        dark: string;
      };
    };
  }
}
