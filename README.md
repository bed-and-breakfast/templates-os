[![NPM Version](https://img.shields.io/npm/v/@bed-and-breakfast/templates-open-source)](https://www.npmjs.com/package/@bed-and-breakfast/templates-open-source)
[![CI](https://github.com/bed-and-breakfast/templates-open-source/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/bed-and-breakfast/templates-open-source/actions/workflows/ci.yml)
[![Release](https://github.com/bed-and-breakfast/templates-open-source/actions/workflows/release.yml/badge.svg?branch=main)](https://github.com/bed-and-breakfast/templates-open-source/actions/workflows/release.yml)
[![Code Climate](https://codeclimate.com/github/bed-and-breakfast/templates-open-source/badges/gpa.svg)](https://codeclimate.com/github/bed-and-breakfast/templates-open-source)
[![Code Coverage](https://codeclimate.com/github/bed-and-breakfast/templates-open-source/badges/coverage.svg)](https://codeclimate.com/github/bed-and-breakfast/templates-open-source)
[![Known Vulnerabilities](https://snyk.io/test/github/bed-and-breakfast/templates-open-source/badge.svg?targetFile=package.json)](https://snyk.io/test/github/bed-and-breakfast/templates-open-source?targetFile=package.json)
[![Semantic Release: Conventional Commits](https://img.shields.io/badge/semantic--release-conventional--commits-e10079?logo=semantic-release)](https://github.com/semantic-release/semantic-release)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

# Bed & Breakfast Open Source Repository Template

GitHub repository template to make developing typescript packages easier. Creates an out-of-the-box environment for best code practices and project management.

# Features

-   Complete GitHub CI/CD process
    -   Typescript builds for ESM and CommonJS
    -   Validate commit format ([conventional commits](https://www.conventionalcommits.org/en/v1.0.0/))
    -   Check for broken Markdown links ([markdown-link-check](https://github.com/tcort/markdown-link-check))
    -   Validate linting ([typescript-eslint](https://github.com/typescript-eslint/typescript-eslint)) and formatting ([prettier](https://github.com/prettier/prettier))
    -   Test integration
        -   Test against all major node versions (18, LTS, latest)
        -   Test reports in all CI workflows (including PRs)
        -   Coverage reports in all CI workflows (including PRs)
        -   Coverage history and code quality analysis ([Code Climate](https://codeclimate.com/))
    -   Automatic releases based on git log ([semantic-release](https://github.com/semantic-release/semantic-release))
        -   Only release when CI is successful
        -   Automatically creates semver versions
        -   Generates changelog
        -   Releases npm package
        -   Releases GitHub release
-   Improved development
    -   Force [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/) in pre-commit and CI
    -   Ability to use [comittizen](https://github.com/commitizen/cz-cli) for guided commit messages
-   Repository management
    -   Automatic PRs for dependency updates ([renovate](https://github.com/renovatebot/renovate))
    -   _Todo issue bot ([todobot](https://github.com/apps/todobot))_
    -   _Automatic issue labelling ([issue-label-bot](https://github.com/marketplace/issue-label-bot))_
    -   _Stale bot ([stale](https://github.com/actions/stale))_
-   Documentation and templates
    -   README stub with configured badges
    -   _Issue templates_
    -   _PR template_
    -   _CODEOWNERS, CODE_OF_CONDUCT, CONTRIBUTING, LICENSE, SECURITY, SUPPORT_

# Getting Started

Create a new repository using this [template](https://github.com/bed-and-breakfast/templates-open-source) ([instructions](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template)).

## Initialize the repository

We can use @bed-and-breakfast/template-tools to initialize the repository. Execute the following command and follow the instructions on the screen.

```sh
npx template-init
```

## Adding a remote to pull updates

Bed & Breakfast repository templates will be updated over time. Start by setting up a remote with the template-add-remote command.

```sh
npx template-add-remote
```

## Pulling updates from the template

You can then use the following command to pull these changes into an existing repository:

```sh
npx template-pull
```

> **Note**
> Be careful resolving conflicts when pulling from a template. Files like package.json, README.md, CHANGELOG.md etc. will have changes you don't want to accept.

# Development

## Making commits

| Action         | Command                                                       |
| -------------- | ------------------------------------------------------------- |
| Build          | `npm run build`                                               |
| Test           | `npm run test`, `npm run test:coverage`, `npm run test:watch` |
| Lint           | `npm run lint`, `npm run lint:fix`                            |
| Format         | `npm run format`, `npm run format:fix`                        |
| Format Package | `npm run format:package`                                      |
| Check Markdown | `npm run check:md`                                            |

### Using commitizen

```sh
npm i -g commitizen
```

```sh
npm run commit
```

# Releasing

Releasing is completely automated and is as simple as:

```sh
git push
```

It will create a new release based on all commits since the last release.
