export interface Dependencies {
  i18n: {
    true: string;
    false: string;
  };
}

export interface Dependencies2 extends Dependencies {
  lowerBound: number;
}
