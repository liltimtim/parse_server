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
