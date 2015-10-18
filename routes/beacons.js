var EddystoneBeaconScanner = require('eddystone-beacon-scanner');
var logger = require('morgan');
var debug = require('debug')('eddystone-console:beacon');



EddystoneBeaconScanner.on('found', function(beacon) {
  debug(beacon);
});

EddystoneBeaconScanner.on('updated', function(beacon) {
  debug(beacon);
});

EddystoneBeaconScanner.on('lost', function(beacon) {
  debug(beacon);
});

EddystoneBeaconScanner.startScanning(true);

debug("Scanner is started.")
