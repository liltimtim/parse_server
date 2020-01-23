# Installation Instructions and Local Development

Run the following in terminal

`npm install`

next simply run

`npm run start`

This will compile the project and start it on your local machine.

## Local Development Considerations

When developing with Parse Server you must

- **run mongodb locally**
- Remember your changes to the schema aren't synchronized across databases and any changes made with the dashboard must also be done or transferred over to production

## Parse 3.0.0 Migration Considerations

[New Parse](https://github.com/parse-community/parse-server/blob/master/3.0.0.md) SDK Instructions for migration

# Deploying to Heroku

Simply press the purple button which will deploy from this repo a copy of the server running on Heroku

**Note** you must have a credit card on file with your own Heroku account in order to fully deploy this server. The current configuration **will not charge you** however MongoDB Lab is used.

[![Deploy](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)

# Docker Compose

### Note
Ensure you have all your environment variables configured properly.  Note not all environment variables are readily available in the docker compose file.  Some of them are disabled in code by default due to the requirements of the environment variable.  See code `index.js` for examples of which variables are disabled. 

### Push Notifications

These are disabled by design and on purpose.  To enable, uncomment the relevant code in `index.js` and add the environment
variables to your `docker-compose.yml` file. 

### Starting

Simply run `docker-compose up` in your terminal.  Ensure your docker app is also running.

You may also run in detached mode by typing `docker-compose up -d`.

This will create two services: `web` and `mongo`. 

### Stopping

run `docker-compose down` to bring both `web` and `mongo` down. 

