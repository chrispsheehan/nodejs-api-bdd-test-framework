# NodejsAPITestFramework

[Purgomalum](https://www.purgomalum.com/) is a simple, free RESTful web service for filtering and removing content of profanity, obscenity and other unwanted text.

This is a test automation framework written against it.

## Resources

- [cucumber.js](https://github.com/cucumber/cucumber-js)
- [Chai](https://www.chaijs.com/)
- [SuperTest](https://github.com/visionmedia/supertest)

### Getting started

- [Install Docker](https://www.docker.com/products/docker-desktop)
- [Install Node.js](https://nodejs.org/en/)
- [Clone this repositiry to your machine](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository)

### Run the tests

```bash
npm install
npm test
```

or with a filter

```bash
tags=@sweary npm run filter-test
```

### Run the tests (in Docker)

```bash
docker build -t node-box .
```


```bash
docker run -e CI=true node-box
```

or with filters

```bash
docker run -e CI=true node-box --tags=@sweary
```

### Filter tests

Documentation found [here](https://cucumber.io/docs/cucumber/api/#tag-expressions)
Examples filters;

```bash
"(@sweary or @notsweary)"
"@sweary"
"(@sweary and not @notsweary)"
```

#### Expected output

```bash
....................

4 scenarios (4 passed)
12 steps (12 passed)
0m00.013s (executing steps: 0m00.003s)
┌──────────────────────────────────────────────────────────────────────────┐
│ Share your Cucumber Report with your team at https://reports.cucumber.io │
│                                                                          │
│ Command line option:    --publish                                        │
│ Environment variable:   CUCUMBER_PUBLISH_ENABLED=true                    │
│                                                                          │
│ More information at https://reports.cucumber.io/docs/cucumber-js         │
│                                                                          │
│ To disable this message, add this to your ./cucumber.js:                 │
│ module.exports = { default: '--publish-quiet' }                          │
└──────────────────────────────────────────────────────────────────────────┘
```
