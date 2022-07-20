
export default abstract class UsecaseAlias<T, K>{
    abstract method(param: T): Promise<K | null>;
}