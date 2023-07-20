# Testing

### Overview

There are three phases of testing that every developer should know while developing: **unit test**, **integration test**, **end-to-end test**.

### How to Unit Test

Unit testing is the process of testing individual units or components of a software application in isolation to ensure their correctness and functionality.

:::info
All unit test cases can be found in [api/src/api/tests](https://github.com/massenergize/api/tree/development/src/api/tests)
:::

Run the following command to test all test cases (make sure that you are in `src/`):

```
python .\manage.py test api.tests
```

Run the following command to test individual test case:

```
python .\manage.py test api.tests.{name of test file}.{class name}.{function name}
```

Example:

```
python .\manage.py test api.tests.test_communities.CommunitiesTestCase.test_list
```

Learn how to write and run your own test in Django: https://docs.djangoproject.com/en/4.2/topics/testing/

### How to Integration Test

Integration testing is the process of testing the interactions and interfaces between different units or components of a software system to verify their combined functionality.

TBA

### How to End-to-End Test

End-to-end testing is a comprehensive software testing method that evaluates the complete workflow of a system, from the beginning to the end, to ensure that all integrated components and processes work together as expected in a real-world scenario.

Every month, the tech team will host a testing party (usually on Friday) to test functionalities on every platforms in different user's role. Here is an example of the sheet that tracks every test cases: [Google Sheet](https://docs.google.com/spreadsheets/d/10iCxcx_Tx-_WtGdQ_FbNeF4W6kmJFX8Q4KIOAjaGP54/edit#gid=448471238)
