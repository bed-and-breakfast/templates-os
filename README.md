[![NPM Version](https://img.shields.io/npm/v/@bed-and-breakfast/templates-open-source)](https://www.npmjs.com/package/@bed-and-breakfast/templates-open-source)
[![CI](https://github.com/bed-and-breakfast/templates-open-source/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/bed-and-breakfast/templates-open-source/actions/workflows/ci.yml)
[![Release](https://github.com/bed-and-breakfast/templates-open-source/actions/workflows/release.yml/badge.svg?branch=main)](https://github.com/bed-and-breakfast/templates-open-source/actions/workflows/release.yml)
[![Code Climate](https://codeclimate.com/github/bed-and-breakfast/templates-open-source/badges/gpa.svg)](https://codeclimate.com/github/bed-and-breakfast/templates-open-source)
[![Code Coverage](https://codeclimate.com/github/bed-and-breakfast/templates-open-source/badges/coverage.svg)](https://codeclimate.com/github/bed-and-breakfast/templates-open-source)
[![Known Vulnerabilities](https://snyk.io/test/github/bed-and-breakfast/templates-open-source/badge.svg?targetFile=package.json)](https://snyk.io/test/github/bed-and-breakfast/templates-open-source?targetFile=package.json)

Bed & Breakfast Open Source Repository Template
==============================================

An out-of-the-box repository with all the necessities to make maintaining a typescript library easy.

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
    -   Todo issue bot ([todobot](https://github.com/apps/todobot))
    -   Automatic issue labelling ([issue-label-bot](https://github.com/marketplace/issue-label-bot))
    -   Stale bot ([stale](https://github.com/actions/stale))
-   Documentation and templates
    -   README stub with configured badges
    -   Issue templates
    -   PR template
    -   CODEOWNERS, CODE_OF_CONDUCT, CONTRIBUTING, LICENSE, SECURITY, SUPPORT

# Getting Started

There are two ways

https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template

## Initialize the repository

To initialize the new repository

```sh
npx template-init
```

## Pulling updates from the template

To keep your repository up to date with the latest version of the template you can

```sh
# Add template remote
git remote add template git@github.com:bed-and-breakfast/templates-open-source.git

# Disables pushes to the remote
git remote set-url template --push "Thou shalt not push!"
```

```sh
git pull template main --allow-unrelated-histories
```

# Development

## Making commits

## Using commitizen
