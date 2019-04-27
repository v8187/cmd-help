/**
 * Make all defined properties in T required
 */
type TRequired<T> = T extends object ? { [P in keyof T]-?: NonNullable<T[P]>; } : T;
// type TRequired<T> = { [P in keyof T]-?: T[P]; };
// type TDeepRequired<T, U extends object | undefined = undefined> =
//     T extends object
//     ? { [P in keyof T]-?: NonNullable<T[P]> extends NonNullable<U | Function | Class> ? NonNullable<T[P]> : DeepRequired<NonNullable<T[P]>, U>; }
//     : T;
declare interface IOnMount { onMount?: () => void; }
declare interface ISelected { selected?: boolean; }
declare interface IMinMax { min?: number; max?: number; }
declare interface IReduxAction { type: string; payload?; }
declare type NotificationsType = 'SUCCESS' | 'WARNING' | 'INFO' | 'ALERT'
declare interface INotification {
    I__D: string;
    message: string;
    type: NotificationsType;
    autoHide?: number;
}