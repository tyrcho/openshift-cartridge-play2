[![logo](https://www.playframework.com/assets/images/logos/play_full_color.png)](http://www.playframework.com/)

# OpenShift Play Framework Cartridge
Works with Play 2.5 and Activator : http://www.playframework.com/

## Gear command
Here the gear command implemented:

| Command | Description |
| --- | --- |
| `gear start` | Start the application, this command has a different behaviour if PLAY2_APPLICATION_PATH point to: 1. a distribution zip file (see [Deploy application from distribution file](#deploy-application-from-distribution-file)); 2. build from source code (see [Deploy application from source code code](#deploy-application-from-source-code)). |
| `gear stop` | Stop the application. |
| `gear restart` | Stop and then start the application. |
| `gear status` | Get current application status. |
| `gear tidy` | Remove files from $OPENSHIFT_TMP_DIR. |
| `gear build` | Build the application from source , if PLAY2_APPLICATION_PATH doesn't point to a zip file. |

_**Example:**_
```
$ gear status
Cart to get the status for?
1. play2-2.5.0
?  1
ATTR: quota_blocks=1048576
ATTR: quota_files=80000
CLIENT_RESULT: Application is running
```

### Environment variables
Environment variables could be set in ${OPENSHIFT_DATA_DIR}/.profile file.
In this file it is defined the following variables:
  - **PLAY2_APPLICATION_PATH** : point to the directory where application is stored. It is possible to set to a specific distribution file in order to deploy;
  - **JAVA_OPTS** : Java options. The default is to use initial and maximum Java heap size to 512MB
  - **SBT_OPTS** : SBT options. The default is to use initial and maximum Java heap size to 512MB


## Deploy application from distribution file
In order to deploy an application from distribution file (zip dist file) follow these steps:
  1. Create openshift gear from cartridge play2
  2. Clone openshift gear repository locally:

  ```
  git clone ssh://Here-repository-url
  ```
  3. Build locally zip file
  4. Connect via ssh to openshift gear
  5. Update PLAY2_APPLICATION_PATH variable in ~/.profile:

  _Note:_ replace "my-application-1.0-SNAPSHOT.zip" with your dist zip file.

  ```
  export PLAY2_APPLICATION_PATH=/var/lib/openshift/56f861dd7628e1713600003c/app-root/runtime/repo/my-application-1.0-SNAPSHOT.zip
  ```
  6. Copy local zip file inside openshift git repository
  7. Publish your dist to openshift gear:

  ```
  $ git add .
  $ git commit -m "Here insert a useful comment"
  $ git push origin master
  ```

Your new application is now published :smiley:

_**ATTENTION:**_ Publish a dist file is very smart solution but this solution could be fill your openshift gear disk because git repository maintains an history of all dist file versions.

## Deploy application from source code
In order to deploy an application from source follow these steps:
  1. Create openshift gear from cartridge play2
  2. Clone openshift gear repository locally:

  ```
  git clone ssh://Here-repository-url
  ```
  3. Open/import project with your favourite development IDE
  4. Test & develop locally
  5. After development use git to publish your new version to openshift gear:

  ```
  $ git add .
  $ git commit -m "Here insert a useful comment"
  $ git push origin master
  ```

Your new application is now published :smiley:

_**Note:**_ it takes a while build & publishing a new version.

_**Note^2:**_ the first build process it takes a while, up to ~15 minutes because activator program download all dependencies.

## Tutorial
Have a look at http://misto.ch/play-on-openshift/
at the moment you need to use ```http://cartreflect-claytondev.rhcloud.com/reflect?github=tyrcho/openshift-cartridge-play2&commit=play-2.5.0```.

## From the web site

1. Go to https://openshift.redhat.com/app/console/applications
2. Click on "Add Application…"
3. Go to the bottom page and in Code Anything "URL to a cartridge definition" insert:
`http://cartreflect-claytondev.rhcloud.com/reflect?github=tyrcho/openshift-cartridge-play2&commit=play-2.5.0`
4. Click on "Next"
5. Define an url for the Application Name
6. Go to the bottom page and click the button "Create Application"
7. Wait ~15 minutes for the first build. It takes a while because it downloads activator and its dependecies
8. Connect via ssh
9. Wait until the application is stopped (via 'gear status')
10. Execute 'gear build'
11. Execute 'gear start'


## Command line (rhc)

```
rhc app create  myappForPlay  http://cartreflect-claytondev.rhcloud.com/reflect?github=tyrcho/openshift-cartridge-play2&commit=play-2.5.0
```

You might need to increase the timeout to let it the time to download the activator and build the application the first time.

## Local start

You need to have installed [Play](http://www.playframework.com/) on your development workstation.

Simply launch ```activator run``` from your invite, and browse to http://localhost:9000/ to see the welcome page.

[![Throughput Graph](https://graphs.waffle.io/tyrcho/openshift-cartridge-play2/throughput.svg)](https://waffle.io/tyrcho/openshift-cartridge-play2/metrics/throughput)
