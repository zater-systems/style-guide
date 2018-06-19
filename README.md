![npm](https://img.shields.io/npm/l/express.svg)

# Zater Systems | Style Guide

Common style guide and linting rules for Zater Systems projects. 

## Documenation

[https://zater-systems.github.io/style-guide/](https://zater-systems.github.io/style-guide/)

## Getting Started

### Installation

Install using NPM:

```bash
npm install -D @zater-systems/style-guide
```

Install using Yarn:

```bash
yarn add -D @zater-systems/style-guide
```

### Angular

Create a `tslint.json` file:

```json
{
  "extends": ["@zater-systems/style-guide/angular"],
  "rules": {
    "directive-selector": [true, "attribute", "zs", "camelCase"],
    "component-selector": [true, "element", "zs", "kebab-case"]
  }
}
```

Create a `tsconfig.json` file:

```json
{
  "extends": "./node_modules/@zater-systems/style-guide/typescript/tsconfig.json",
  "compilerOptions": {}
}
```

### General Typescript

Create a `tslint.json` file:

```json
{
  "extends": ["@zater-systems/style-guide/typescript"]
}
```

Create a `tsconfig.json` file:

```json
{
  "extends": "./node_modules/@zater-systems/style-guide/typescript/tsconfig.json",
  "compilerOptions": {}
}
```

## Contributing

### Installation

Run `yarn` to install packages.
