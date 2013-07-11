# OpenShift NodeJS Cartridge

## Use it

In OpenShift, choose a downloaded cartridge, with the following URL : http://cartreflect-claytondev.rhcloud.com/reflect?github=Filirom1/openshift-nodejs-simple

The create a nodejs project with a `package.json` at the root.
In this file fills  `dependencies` and `scripts.start`.

The cartridge will launch `npm install -d` when you push, and `npm start` to start your application.

## Why another cartridge

* OpenShift already have a [nodejs cartridge](https://github.com/openshift/origin-server/tree/master/cartridges/openshift-origin-cartridge-nodejs), why an other one.

The original openshift cartridge only works with node 0.6.
But soon, opeshift will release a node 0.10 cartridge based on scl. We should absolutely use it once ready.

* Yes but OpenShift already have a [custom version nodejs](https://github.com/openshift/nodejs-custom-version-openshift) sample.

The cutsom version openshift project is based on `.openshift/action_hooks`. These scripts must be present and executable for this cartridge to works.
It's quite hard to make executable files one Windows, we should use the `git update-index --chmod=+x .openshift\action_hooks\*` command
Finally there is a lot of code in the original nodejs 0.6 cartridge + the custom version hooks, that make it hard to understand how it works.

* Is it useful for something else ?

If you want to hack your own cartridge because your project is a bit special, you can fork this project and customize it for your needs.
