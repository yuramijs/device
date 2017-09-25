const DeviceDetector = require("device-detecter");
const http = require("http");

http.createServer(function (req, res) {

  const device = DeviceDetector.fromRequest(req);

  res.write(`device.isDesktop ${device.isDesktop}\n`);
  res.write(`device.isTablet ${device.isTablet}\n`);
  res.write(`device.isMobile ${device.isMobile}\n`);
  res.write(`device.isIphone ${device.isIphone}\n`);
  res.write(`device.isIpad ${device.isIpad}\n`);
  res.write(`device.isIOS ${device.isIOS}\n`);
  res.write(`device.isAndroid ${device.isAndroid}\n`);
  res.write(`device.androidVersion ${device.androidVersion}\n`);
  res.write(`device.iOSVersion ${device.iOSVersion}\n`);
  res.write(`device.ieVersion ${device.ieVersion}\n`);

  res.end();

}).listen(3001);