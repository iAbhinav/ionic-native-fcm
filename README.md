# Ionic Native Fcm

Use this library to listen to Firebase Cloud Messages on Ionic 3.

Due to dependency issues of firebase and rxjs, one cannot use the @ionic-native/firebase with ionic v3. This package is created to easily implement Firebase Cloud Messaging in ionic v3.


### Installation

```
npm i ionic-native-fcm
```

### Supported Platforms

* Android
* iOS

### Usage Examples

```
import { IonicNativeFcm } from "ionic-native-fcm";


export class MyProvider {
  private ionicNativeFcm: IonicNativeFcm;
  
  constructor(){
    //You might want to check for platform support here. (use ionic-angular/platform)
    this.ionicNativeFcm = new IonicNativeFcm();
  }
  
  .
  .
  .
  
  this.ionicNativeFcm.grantPermission();
  
  .
  .
  .
  
  this.ionicNativeFcm.onNotificationOpen().subscribe(message => {
      this.onMessageReceived(message)
  })

  .
  .
  .
  
  this.ionicNativeFcm.onTokenRefresh().subscribe(token => {
    this.userService.updateTokenOnServer(token);
  })
  
  
}
```

You may directly import the class in your service. No need to import in module.ts file.
