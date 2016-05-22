# davis-wunderground
A Node.js example application for retrieving weather information from a Davis Advantage Pro 2 console,
personal weather station, and uploading it to Weather Underground, http://www.wunderground.com

This example supports the Davis Advantage Pro 2 wireless console with WeatherLink IP.  The WeatherLink IP 
must be connected to the same network as the system runing the application or IP address/hostname specified
must be must be reachable by the system running this application.

You first need to register your personal weather station (PWS) with http://www.wunderground.com

# Usage
First, clone the repository:

`git clone git@github.com:cfonze/davis-wunderground.git`

Then switch to the cloned repository directory and run it:

`node davis-wunderground.js <Hostname or ipAddress> <PWS Key> <password>`

`<Hostname or ipAddress>`
Specify the hostname or ip address of the console WeatherLink IP.

`<PWS Key>`
The personal weather station key from wunderground.com.  This key is provided when you register your weather station.

`<password>`
The password associated with your userid/account on wunderground.com.

In Linux you can use crontab to schedule the execution.  For example use the command `crontab -e` to open up the
crontab entries and add a new entry as in the following:
`*/1 * * * * /usr/local/n/versions/node/5.2.0/bin/node /development/davis-wunderground/davis-wunderground.js <Hostname or ipAddress> <PWS Key> <password> >> /development/davis-wunderground/cron.log 2>&1`
Substitue the `<Hostname or ipAddress>`, `<PWS Key>`, and `<password>` for your specific values.


The MIT License (MIT)
=======

Copyright (c) 2016 Carlos Fonseca <cfonze@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.