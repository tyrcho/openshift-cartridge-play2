[![logo](http://www.playframework.com/assets/images/logos/normal-mini.png)](http://www.playframework.com/)

# OpenShift Play Framework Cartridge

Works with Play 2.3 and Activator : http://www.playframework.com/

## Use it

Note : now works with small OpenShift gears, the build script will use no more than 512MB by default.

### From the web site

In OpenShift, choose a downloaded cartridge, with the following URL : http://cartreflect-claytondev.rhcloud.com/reflect?github=tyrcho/openshift-cartridge-play2

Note that it takes about 5 minutes to create the application since it will download the activator from typesafe and the initial build of the sample application takes a few minutes, depending on the load of the server.

### command line (rhc)

```rhc app create  myappForPlay  http://cartreflect-claytondev.rhcloud.com/reflect?github=tyrcho/openshift-cartridge-play2```

You might need to increase the timeout to let it the time to download the activator and build the application the first time.

## Local start

You need to have installed [Play](http://www.playframework.com/) on your development workstation.

Simply launch ```activator run``` from your invite, and browse to http://localhost:9000/ to see the welcome page.
