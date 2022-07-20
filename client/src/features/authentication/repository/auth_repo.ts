
export default abstract class AuthRepo {
    abstract signup<T, K>(param: T): Promise<K | null>;
    abstract login<T, K>(param: T): Promise<K | null>;
}