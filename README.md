# POC-TypeScript
ROUTERS
~~~
POST: /item
Body: { "name": "Arroz", "brand": "XXX", "check": true }

GET: /list

PUT /item/:id
Body: { "name": "Arroz", "brand": "YYY", "check": false }

DELETE /item/:id
~~~
---

DATABASE



~~~
Dump.sql available, but you can also create it manually:

CREATE TABLE list (
 	"id" SERIAL PRIMARY KEY,
	"name" TEXT NOT NULL,
	"brand" TEXT NOT NULL,
	"check" BOOLEAN NOT NULL
);

Database configuration file: src/database/database.js
~~~