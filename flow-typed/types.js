// @flow

export type Show = {
  title: string,
  description: string,
  year: string,
  imdbID: string,
  trailer: string,
  poster: string,
  rating?: string
};

declare var module: {
  hot: {
    accept(path: string, callback: () => void): void
  }
};

// enumerated type
declare type ActionType = 'SET_SEARCH_TERM' | 'ADD_API_DATA';

// flow syntax, || for generic types
declare type ActionT<A: ActionType, P> = {|
  type: A,
  payload: P
|};

export type Action = ActionT<'SET_SEARCH_TERM', string> | ActionT<'ADD_API_DATA', Show>;
