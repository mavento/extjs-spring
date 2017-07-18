# extjs-spring
This example shows ExtJS together with Spring Boot. 

### Server

* You'll need Maven 3+ and Java 8
* Navigate to ./server and run: `mvn spring-boot:run`


### Client

* Create the ExtJS application:
```sh
$ sencha -sdk /path/to/extjs generate app Arp ./client
```
* Change main main view in .\client\app.js
```javascript
requires: [
        'Arp.view.article.Main'
    ],
    
mainView: 'Arp.view.article.Main'

```
* Navigate to ./client you just created, and run: `sencha app build`
* Once the build completes, run: `sencha app watch`
* Open localhost:1841 in a browser

 