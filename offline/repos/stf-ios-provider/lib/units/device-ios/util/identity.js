var syrup = require('stf-syrup')

var devutil = require('../../../util/devutil')
var logger = require('../../../util/logger')
var DeviceInfo = require('../support/deviceinfo')

module.exports = syrup.serial()
  .dependency(require('./display'))
  .define(function(options,display) {
    var log = logger.createLogger('device-ios:plugins:identity')
    function solve() {
      log.info('Solving identity')
      var identity = DeviceInfo.getDeviceInfo(options,options.serial,options.type)
      identity.display = display.properties
      return identity
    }

    return solve()
  })
