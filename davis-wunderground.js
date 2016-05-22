/**
 * An example application for retrieving weather information from a Davis Advantage Pro 2 console,
 * personal weather station, and uploading it to Weather Underground, http://www.wunderground.com
 * 
 * See README.md for more inforation.
 */
var Davis = require('davis-weather');
var PWS = require('wunderground-pws');

if(process.argv.length !== 5) {
    console.log('Invalid number of arguments');
    console.log('Usage:');
    console.log('node davis-wunderground.js <Hostname or ipAddress> <PWS Key> <password>');
    console.log('Example: node davis-wunderground.js 192.168.1.60 KNYLAGRA17 password');
    return 1;
}

var davis = new Davis(process.argv[2]);
var pws = new PWS(process.argv[3], process.argv[4]);

davis.getCurrentConditions(function(err, data) {    
   if(err) {
       console.log(err);
   } else {
       console.log(new Date());
       console.log(JSON.stringify(data, null, 2));
              
       pws.setObservations({
            winddir: data.windDirection,         // [0-360 instantaneous wind direction]
            windspeedmph: data.windSpeed,        // [mph instantaneous wind speed]
            windspdmph_avg2m: data.avgWindSpeed, // [mph 2 minute average wind speed mph]
            humidity: data.outsideHumidity,      // [% outdoor humidity 0-100%]
            tempf: data.outsideTemperature,      // [F outdoor temperature] 
            dailyrainin: data.dayRain,           // [rain inches so far today in local time]
            baromin: data.barometer,             // [barometric pressure inches]
            solarradiation: data.solarRadiation, // [W/m^2]
            UV: data.uvLevel,                    // [index]
            indoortempf: data.insideTemperature, // [F indoor temperature F]
            indoorhumidity: data.insideHumidity  // [% indoor humidity 0-100]           
       });
       
       pws.sendObservations(function(err, success){
           if(err) {
               console.log(err);
           } else {
               console.log('Posted to wunderground: ' + success);
           }
       });
   }
});