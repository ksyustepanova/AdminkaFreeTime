# AdminkaFreeTime

* [Description](#Description)
* [API](#API)

## Description
I needed to make a service for changing the settings of different companies, which can only be done within the system, which cannot be given to the clients themselves. In order to study a new technology along with solving the problem, I chose Node.JS. I am using mssql and express to build Web API and work with MS SQL SERVER database. I dare say that this is my first project on Node.JS, so I cannot guarantee its quality.

## API
There are GET, PUT, DELETE requests on the `/Company`

### GET
GET `/Company`
Request returns short companies information:
```json
[{"id":228,
  "name":"Demo", 
  "timezone":7, 
  "description":"description",
  "contacts":null,
  "main_domain":"demo19",
  "date_delete":null},
{"id":229,
  "name":"Demo",
  "timezone":7,
  "description":null,
  "contacts":null,
  "main_domain":"demo20",
  "date_delete":"2021-05-29T21:32:39.933Z"}]
```
GET `/Company/id`
For example: `/Company/228`
Request returns full information about the company:
```json
{"id":228,
 "name":"Demo",
 "short_name":null,
 "timezone":7,
 "description":"description",
 "etc":"...",
 "is_white_list":false}
```

### DELETE
DELETE `/Company/id`
For example: `/Company/228`
Request mades logical deletion of the company. Current UTC date is filled in the `date_delete` field.

### PUT
PUT `/Company/id`
For example: `/Company/228`
`"Content-Type": "application/json"`
In the body can be the modified company object.
Request changes information about the company to the one provided.
For example:
```json
{"id":241,
 "labelFIO":"label FIO",
 "etc":"...",
 "is_white_list":false}
```