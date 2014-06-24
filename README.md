# OpenShift Play Framework Cartridge

Works with Play 2.3 and Activator : http://www.playframework.com/

## Use it

Note : now works with small OpenShift gears, the build script will use no more than 512MB by default.

### From the web site

In OpenShift, choose a downloaded cartridge, with the following URL : http://cartreflect-claytondev.rhcloud.com/reflect?github=tyrcho/openshift-cartridge-play2

*You need to wait about 5 min after installing the cartridge so the application is built. Otherwise you get an error 503 !*

### command line (rhc)

```rhc app create  myappForPlay  http://cartreflect-claytondev.rhcloud.com/reflect?github=tyrcho/openshift-cartridge-play2```


## Local start

You need to have installed play2 on your development workstation.

Simply launch *play run* from your invite, and browse to http://localhost:9000/ to see the welcome page.
