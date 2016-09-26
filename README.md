# cors-proxy-sense

A node.js app allowing you CORS calls to JSON APIs from Qlik Sense extensions or mashups.

## Installation

```npm install```

## Usage

Set certificate location and ports in config.json

```npm start```

## Qlik Sense Service Dispatcher Integration

* Copy the files manually with admin priviliges into  
```C:\Program Files\Qlik\Sense\ServiceDispatcher\Node\cors-proxy\```  

* Then append the following configuration options to  
```C:\Program Files\Qlik\Sense\ServiceDispatcher\services.conf```  
This will let the Service Dispatcher know how to run the module, this step has to be re-applied in an upgrade of Qlik Sense Server.

```
[cors-proxy-service]
Identity=Qlik.cors-proxy-service
Enabled=true
DisplayName=cors-proxy
ExecType=nodejs
ExePath=Node\node.exe
Script=Node\cors-proxy-sense\server.js

[cors-proxy-service.parameters]
```