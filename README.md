# Hotels

A demo React app showing filtering and sorting on a list of data items

## Prerequisites

1. [Node v8.9.4](https://nodejs.org/en/download/)
1. [Yarn](https://yarnpkg.com/en/docs/install)

## Installation

```sh
$ git clone git@github.com:ChrisWilding/hotels.git
$ cd hotels
$ yarn install

```

## Usage

```sh
$ yarn start
yarn run v1.3.2
$ webpack-dev-server
Project is running at http://localhost:8080/
...
```

## Docker

### Prerequisites

1. [Docker](https://www.docker.com/community-edition)

### Usage

```sh
$ docker build -t hotels .
$ docker run --name hotels -d -p 8080:80 hotels
```

Project is running at http://localhost:8080/


## To Do

This application is far from production ready and there is a lot that can be
done to get it into a better shape.

* CI/CD/Deployment
* Monitoring
* Performance
* SEO
* Security
* UX



### CI/CD/Deployment

The application does not currently have CI setup to run lint and unit tests.
This should be setup as a priority to ensure a passing build is maintained.

There are lots of deployment options. Currently the application is only rendered
client side which means all assets can be compiled statically and served from a
standard webserver, nginx for example, would make a good choice.


### Monitoring

* Use an APM monitoring tool like New Relic
* Adding log agregation tooling like LogStash and Kibana


### Performance

* Evaluate the results of tools like [PageSpeed](https://developers.google.com/speed/?hl=en-US&utm_source=PSI&utm_medium=incoming-link&utm_campaign=PSI)
* Load test application to ensure it can handle production loads using tools like [Gatling](https://gatling.io/)


### Security

Once deployed, headers listed below should be set as well as strong Content
Security Policy. Depending on the how the application is deployed this could be
Nginx configuration or using express for isomorphic/universal rendering this
can be done with the help of tools such as
[helmet](https://github.com/helmetjs/helmet).

* X-Content-Type-Options: nosniff
* X-Frame-Options: DENY
* X-XSS-Protection: 1; mode=block


### SEO

* Add [Structured Data](https://developers.google.com/search/docs/guides/intro-structured-data)
* Add a robots.txt policy
* Add isomorphic/universal rendering for web crawlers


### UX

The UX and visual design could be improved significantly.
