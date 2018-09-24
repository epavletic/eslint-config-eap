# eslint-config-eap
> Because [ESLint](https://github.com/eslint/eslint) configs are nicer when they’re [shareable](https://eslint.org/docs/developer-guide/shareable-configs.html).

## Installation
```
$ npm i -D @eap/eslint-config-eap
```

## Usage
Add the configuration to your `package.json`:

_For plain js modules:_
``` JSON
{
   "eslintConfig": {
        "extends": "@eap"
    }
}
```

_For [React](https://reactjs.org) modules:_
``` JSON
{
   "eslintConfig": {
        "extends": "@eap/react"
    }
}
```

…or, if you’re that sort of person, add the corresponding configuration extension to your `.eslintrc`.
