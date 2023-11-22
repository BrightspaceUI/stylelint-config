# stylelint-config
[![NPM version](https://img.shields.io/npm/v/@brightspace-ui/stylelint-config.svg)](https://www.npmjs.org/package/@brightspace-ui/stylelint-config)
[![NPM downloads](https://img.shields.io/npm/dt/@brightspace-ui/stylelint-config.svg)](https://www.npmjs.com/package/@brightspace-ui/stylelint-config)

Common Brightspace [stylelint](https://stylelint.io/) configs.

## Installation

Install the `stylelint-config` and `stylelint`.
```shell
npm i @brightspace-ui/stylelint-config
npm i stylelint
```

## Usage

Simply specify the `extends` property in the `.stylelintrc.json` file as shown below. The default config contains rules to avoid errors, and also to enforce consistent formatting.

```json
{
  "extends": "@brightspace-ui/stylelint-config"
}
```

Then run `stylelint`, for example by defining a script in your `package.json`.

```json
"scripts": {
  "lint:style": "stylelint \"**/*.js\""
},
```

## Contributing

Contributions are welcome, please submit a pull request!

### Code Style

This repository is configured with [EditorConfig](http://editorconfig.org) rules and contributions should make use of them.

### Versioning and Releasing

This repo is configured to use `semantic-release`. Commits prefixed with `fix:` and `feat:` will trigger patch and minor releases when merged to `main`.

To learn how to create major releases and release from maintenance branches, refer to the [semantic-release GitHub Action](https://github.com/BrightspaceUI/actions/tree/main/semantic-release) documentation.
