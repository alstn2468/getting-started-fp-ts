import type { Functor1 } from 'fp-ts/lib/Functor';

const URI = 'Response';

type URI = typeof URI;

declare module 'fp-ts/lib/HKT' {
  interface URItoKind<A> {
    Response: Response<A>;
  }
}

interface Response<A> {
  url: string;
  status: number;
  headers: Record<string, string>;
  body: A;
}

function map<A, B>(fa: Response<A>, f: (a: A) => B): Response<B> {
  return { ...fa, body: f(fa.body) };
}

// `Response`를 위한 Functor 인스턴스
export const functorResponse: Functor1<URI> = {
  URI,
  map,
};
