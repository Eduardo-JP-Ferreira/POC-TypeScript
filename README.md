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
CREATE TABLE list (
 	"id" SERIAL PRIMARY KEY,
	"name" TEXT NOT NULL,
	"brand" TEXT NOT NULL,
	"check" BOOLEAN NOT NULL
);

Config File: src/database/database.js
~~~