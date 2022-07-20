// export default interface UsecaseAlias<T, K> {
//     method: (param: T): Promise<K | null> => {} ;
// }

export default abstract class UsecaseAlias<T, K>{
    abstract method(param: T): Promise<K | null>;
}