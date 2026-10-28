# gateseeker-test-js

External validation project for the [Gateseeker](https://github.com/gateseeker-dev/gateseeker) GitHub Action (Sprint 3). A small Node.js project with two direct dependencies and the Action configured as any user would configure it.

Two pull requests exercise the gate:

- a downgrade of `lodash` to a version with known vulnerabilities, which the gate must block with a sticky comment and SARIF results;
- a routine bump of `ms`, which the gate must let through.

No code here is meant to run; the lockfile is the input under test.
