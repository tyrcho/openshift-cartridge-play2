# OpenShift Dart Cartridge

## Use it

In OpenShift, choose a downloaded cartridge, with the following URL : http://cartreflect-claytondev.rhcloud.com/reflect?github=Filirom1/openshift-cartridge-dart

Then create a dart project with a `server.dart`, and `pubspec.yaml` at the root.

The cartridge will launch `pub install` when you push, and `dart server.dart` to start your application.

## Dart version

New version of dart doesn't work on CentOS 6.4, the working version is 2300: https://code.google.com/p/dart/issues/detail?id=11920
