# stylelint-config
[![NPM version](https://img.shields.io/npm/v/@brightspace-ui/stylelint-config.svg)](https://www.npmjs.org/package/@brightspace-ui/stylelint-config)
[![NPM downloads](https://img.shields.io/npm/dt/@brightspace-ui/stylelint-config.svg)](https://www.npmjs.com/package/@brightspace-ui/stylelint-config)
[![Dependabot badge](https://flat.badgen.net/dependabot/BrightspaceUI/stylelint-config?icon=dependabot)](https://app.dependabot.com/)

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

## Versioning, Releasing & Deploying

All version changes should obey [semantic versioning](https://semver.org/) rules.

Releases use the [semantic-release](https://semantic-release.gitbook.io/) tooling and the [angular preset](https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-changelog-angular) for commit message syntax. Upon release, the version in `package.json` is updated, a tag and GitHub release is created and a new package will be deployed to NPM.

Commits prefixed with `feat` will trigger a minor release, while `fix` or `perf` will trigger a patch release. A commit containing `BREAKING CHANGE` will cause a major release to occur.

Other useful prefixes that will not trigger a release: `build`, `ci`, `docs`, `refactor`, `style` and `test`. More details in the [Angular Contribution Guidelines](https://github.com/angular/angular/blob/master/CONTRIBUTING.md#type).