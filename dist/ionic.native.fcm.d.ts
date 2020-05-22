import { Observable } from "rxjs";
export declare class IonicNativeFcm {
    firebaseNative: any;
    constructor();
    grantPermission(): void;
    onNotificationOpen(): Observable<any>;
    onTokenRefresh(): Observable<string>;
}
