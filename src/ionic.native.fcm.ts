import { Observable } from "rxjs";

export class IonicNativeFcm {

    public firebaseNative: any;

    constructor() {
        this.firebaseNative = (<any>window).FirebasePlugin;
    }

    public grantPermission() {
        this.firebaseNative.grantPermission();
    }

    public onNotificationOpen(): Observable<any> {
        return new Observable(observer => {
            this.firebaseNative.onMessageReceived((response) => {
                observer.next(response);
            });
        });
    }

    public onTokenRefresh(): Observable<string> {
        return new Observable(observer => {
            this.firebaseNative.onTokenRefresh((response) => {
                observer.next(response);
            });
        });
    }
}