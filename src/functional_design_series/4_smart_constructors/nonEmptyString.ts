export interface NonEmptyStringBrand {
  readonly NonEmptyString: unique symbol; // 모듈/패키지에서의 고유함을 보장
}

export type NonEmptyString = string & NonEmptyStringBrand;
