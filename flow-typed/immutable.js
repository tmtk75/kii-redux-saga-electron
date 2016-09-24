declare module 'immutable' {

  declare interface Iterable<T> {
    map<T>(mapper: (value: T) => any): Iterable<T>;
  }

  declare interface Set<T> extends Iterable<T> {
    static <T>(vals: Array<T>): Set<T>;
  }

}
