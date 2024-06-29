
# Demo shopping website checkout process automation

The test involves navigating to a demo shopping website and completing a checkout process

## Authors

- [@Masud Rana](https://github.com/ranam2030)


## Tech Stack

**Client:** Playwright, JSON

**Server:** Node


## Getting Started
-> Prerequisites
The following software are required:

-> nodejs : Download and Install Node JS from
```bash
  https://nodejs.org/en/download/
```

-> Install Java 8 or above, Allure Reports require Java 8 or higher.

-> allure commandline : Install allure command line for generating Allure Reports using
```bash
  npm ci -g allure-commandline
```



## Installation

Install depandency with npm

```bash
  npm init playwright@latest
```

Run the Test

```bash
  npx playwright test
```
## Allure Report

To generate allure report run the command

```bash
   npx allure generate .\allure-results\ --clean
   npx allure open 
```



## Allure Result

![allure](https://github.com/ranam2030/arbree_test/assets/24250050/a7cc7040-6528-4074-a64a-1ce300f48dad)

