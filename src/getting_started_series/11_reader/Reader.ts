export interface Reader<R, A> {
  (r: R): A;
}
