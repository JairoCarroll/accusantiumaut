declare module "ts-nameof.macro" {
    function nameof<T>(func?: (obj: T) => void): string;
    function nameof(obj: any): string;
    namespace nameof {
        function full<T>(periodIndex?: number): string;
        function full<T>(func: (obj: T) => void, periodIndex?: number): string;
        function full(obj: any, periodIndex?: number): string;
        function toArray<T>(func: (obj: T) => any[]): string[];
        function toArray(...args: any[]): string[];
    }

    export default nameof;
}
