# backend

## Documentation

## Base URL for deployed site 

https://foodtruck-backend-3.herokuapp.com/ 

## Endpoints

### To register and log in users

| Request | URL | Description |
| ------- | --- | ----------- |
| POST | api/auth/register-operator | register as a new operator |
| POST | api/auth/register-diner | register as a new diner |
| POST | api/auth/login | login as a operator or diner |

### To perform CRUD operations for Trucks

| Request | URL | Description |
| ------- | --- | ----------- |
| GET | /api/operators/trucks| returns a list of all trucks regardless of operator |
| GET | /api/operators/trucks/:id | will return a specific truck |
| GET | /api/operators/trucks/:id/user| will return all of the trucks for specified operator |
| POST | /api/operators/trucks | will post a new truck for the logged in operator |
| PUT | /api/operators/trucks/:id | edit a specific truck for operator |
| DELETE | /api/operators/trucks/:id | remove specific truck for operator |

## Table Requirements

### Users
| Name | Type | Required | Unique | Notes |
| ---- | ---- | -------- | ------ | ----- |
| id | integer | yes | yes | auto generated |
| username | string | yes | yes | max 128 char |
| password | string | yes | no | max 256 char |
| email | string | yes | no | max 128 char |
| role | string | yes | no | role will be automatically assigned based on registration to either "operator" or "diner" |

### Trucks
| Name | Type | Required | Unique | Notes |
| ---- | ---- | -------- | ------ | ----- |
| operator_id | integer | yes | no | will be auto assigned to the logged in operator |
| name | string | yes | no | |
| description | string | no | no | |
| cuisine | string | yes | no | |
| imageURL | string | no | no | |
| city | string | no | no | |
| hours | string | no | no | |
| current_location | string | no | no | |