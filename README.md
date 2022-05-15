# Mini-project "Pointage":
## Description

API REST Node Js gérant le pointage des employee de l'école ABC.


## Running the app

```bash
# development
$ docker-compose up

```

## Test

```bash
# enter in docker container
docker container exec -it app_pointage

# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
## Endpoint

**Swagger url**

```url
    GET /api
```
**Create employee**

```url
    POST /employee 
```
```json
{
    "name": {STRING}
    "firstName": {STRING}
    "department": {STRING}
}
```
**Get all employee with filter**

```url
    POST /employee/all 
```
Optional
```json
{
    "dateCreated": "YYYY-MM-DD"
}


```

**Check in employee**

```url
    GET /employee/check-in/{employeeId} 
```


**Check out employee**

```url
    GET /employee/check-out/{employeeId} 
```
```json
{
    "comment": {STRING}
}
```
duration will set directly in database

