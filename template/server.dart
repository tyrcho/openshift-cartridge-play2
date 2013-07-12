import 'dart:io';

main() {
  var env = Platform.environment;
  HttpServer.bind(env['OPENSHIFT_DART_IP'], int.parse(env['OPENSHIFT_DART_PORT'])).then((server) {
    server.listen((HttpRequest request) {
      request.response.write('Hello, world');
      request.response.close();
    });
  });
}
