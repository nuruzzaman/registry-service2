# Registry Service

This is the registry service, based on [Spring Cloud Netflix](https://cloud.spring.io/spring-cloud-netflix/), [Eureka](https://github.com/Netflix/eureka) and [Spring Cloud Config](https://cloud.spring.io/spring-cloud-config/).


## Deploy to Heroku

Click this button to deploy your own instance of the registry:

[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)

There are a few limitations when deploying to Heroku.

- The registry will only work with [native configuration](and not Git config).
- The registry service cannot be scaled up to multiple dynos to provide redundancy. You must deploy multiple applications (i.e. click the button more than once). This is because Eureka requires distinct URLs to synchronize in-memory state between instances.

## Running locally

To run the cloned repository;

- For development run `./mvnw -Pdev,webpack` to just start in development or run `./mvnw` and run `npm install && npm start` for hot reload of client side code.
- For production profile run `./mvnw -Pprod`

## Create docker image

- `mvnw -ntp -Pprod verify jib:dockerBuild -DskipTests`
- `mvnw package -Pprod verify jib:build -Djib.to.image=data2ml/registry-service:latest -Djib.to.auth.username=data2ml -Djib.to.auth.password=* -DskipTests`



## GitHub Commit 

- `git init`
- `git add README.md`
- `git commit -m "first commit"`
- `git branch -M main`
- `git remote add origin https://github.com/nuruzzaman/userauth-service.git`
- `git push -u origin main`
