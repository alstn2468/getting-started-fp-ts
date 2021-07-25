export interface IntBrand {
  readonly Int: unique symbol;
}

export type Int = number & IntBrand;
