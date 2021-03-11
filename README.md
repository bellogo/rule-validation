# rule-validation
This api validates a specified field based on a given condition. This task was for a job evaluation, details regarding the task are outlined [here](https://ng.linkedin.com/in/ufuoma-ogodo)

<hr>

Built With

- nodejs, express & hosted on heroku

<hr>

Trying to get started?

- Make sure to have node, git installed on your computer
- Clone this project using this link - <https://github.com/bellogo/rule-validation.git>
- Run `npm install` to install the modules
- Run `npm run start-dev` to start the server

<hr>

These are the HTTP request methods used in this project:

| Method   | Action                                                      |
|---       | ---                                                         |
| `GET`    | This method is used to *get* a resource                     |
| `POST`   | This method is used to *create* a resource or *send* data   |

<hr>

These are the HTTP response codes used in this project:

| Status Codes | Indication                                                                                            |
|   ---        | ---                                                                                                   |
|  `200`       | This `OK` status code indicates that a request has succeeded                                          |
|  `400`       | This `bad request error` status code indicates that the request sent to the server is incorrect       |
|  `500`       | This `internal server error` status code indicates that something has gone wrong on the web server           |

<hr>

The routes featured in this project:

| API routes(url)       | Method   | Description                                         |
| ---                   | ---      | ---                                                 |
| /         | `GET`   |  Personal info                    |
| /validate-rule   | `POST`   | To validate given data                  |


<hr>

Usage:
- Make a `GET` request to `https://nodejsrulevalidationapi.herokuapp.com/` to get my personal details

- Make a `POST` request to: `https://nodejsrulevalidationapi.herokuapp.com/validate-rule/` to perform the rule validation.

sample: 
```

{
    "rule": {
        "field": "missions",
        "condition": "gte",
        "condition_value": 90
    },
    "data": {
        "name": "James Holden",
        "crew": "Rocinante",
        "age": 34,
        "position": "Captain",
        "missions": 45
    }
}

```

<hr>


👤 **Author**

- Github: [@bellogo](https://github.com/bellogo)
- Linkedin: [Ufuoma Ogodo](https://ng.linkedin.com/in/ufuoma-ogodo)
