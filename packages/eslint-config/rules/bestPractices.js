module.exports = {
  rules: {
    'accessor-pairs': [
      'error',
      {
        getWithoutSet: false,
        setWithoutGet: true
      }
    ],
    'array-callback-return': [
      'error',
      {
        allowImplicit: false
      }
    ],
    'block-scoped-var': 'error',
    'class-methods-use-this': 'error',
    complexity: [
      'error',
      {
        max: 10
      }
    ],
    'consistent-return': [
      'error',
      {
        treatUndefinedAsUnspecified: false
      }
    ],
    curly: ['error', 'all'],
    'default-case': 'error',
    'dot-location': ['error', 'property'],
    'dot-notation': [
      'error',
      {
        allowKeywords: false
      }
    ],
    eqeqeq: [
      'error',
      'always',
      {
        null: 'always'
      }
    ],
    'guard-for-in': 'error',
    'max-classes-per-file': ['warn', 1],
    'no-alert': 'error',
    'no-caller': 'error',
    'no-case-declarations': 'error',
    'no-div-regex': 'error',
    'no-else-return': [
      'error',
      {
        allowElseIf: true
      }
    ],
    'no-empty-function': [
      'warn',
      {
        allow: []
      }
    ],
    'no-empty-pattern': 'error',
    'no-eq-null': 'error',
    'no-eval': [
      'error',
      {
        allowIndirect: false
      }
    ],
    'no-extend-native': [
      'error',
      {
        exceptions: []
      }
    ],
    'no-extra-bind': 'error',
    'no-extra-label': 'error',
    'no-fallthrough': [
      'error',
      {
        commentPattern: ''
      }
    ],
    'no-floating-decimal': 'error',
    'no-global-assign': [
      'error',
      {
        exceptions: []
      }
    ],
    'no-implicit-coercion': [
      'error',
      {
        allow: [],
        boolean: true,
        number: true,
        string: true
      }
    ],
    'no-implicit-globals': 'error',
    'no-implied-eval': 'error',
    'no-invalid-this': 'error',
    'no-iterator': 'error',
    'no-labels': [
      'error',
      {
        allowLoop: false,
        allowSwitch: false
      }
    ],
    'no-lone-blocks': 'error',
    'no-loop-func': 'error',
    'no-magic-numbers': [
      'warn',
      {
        detectObjects: true,
        enforceConst: true,
        ignore: [],
        ignoreArrayIndexes: true
      }
    ],
    'no-multi-spaces': [
      'error',
      {
        exceptions: {
          BinaryExpression: false,
          ImportDeclaration: false,
          Property: false,
          VariableDeclarator: false
        },
        ignoreEOLComments: false
      }
    ],
    'no-multi-str': 'error',
    'no-new': 'error',
    'no-new-func': 'error',
    'no-new-wrappers': 'error',
    'no-octal': 'error',
    'no-octal-escape': 'error',
    'no-param-reassign': [
      'error',
      {
        props: false
      }
    ],
    'no-proto': 'error',
    'no-redeclare': [
      'error',
      {
        builtinGlobals: false
      }
    ],
    'no-restricted-properties': 'off',
    'no-return-assign': ['error', 'except-parens'],
    'no-return-await': 'error',
    'no-script-url': 'error',
    'no-self-assign': [
      'error',
      {
        props: true
      }
    ],
    'no-self-compare': 'error',
    'no-sequences': 'error',
    'no-throw-literal': 'error',
    'no-unmodified-loop-condition': 'error',
    'no-unused-expressions': [
      'error',
      {
        allowShortCircuit: false,
        allowTaggedTemplates: false,
        allowTernary: false
      }
    ],
    'no-unused-labels': 'error',
    'no-useless-call': 'error',
    'no-useless-concat': 'error',
    'no-useless-escape': 'error',
    'no-useless-return': 'error',
    'no-void': 'error',
    'no-warning-comments': [
      'error',
      {
        location: 'start',
        terms: ['todo', 'fixme', 'xxx']
      }
    ],
    'no-with': 'error',
    'prefer-promise-reject-errors': [
      'error',
      {
        allowEmptyReject: false
      }
    ],
    radix: ['error', 'always'],
    'require-await': 'error',
    'require-unicode-regexp': 'error',
    'vars-on-top': 'error',
    'wrap-iife': [
      'error',
      'outside',
      {
        functionPrototypeMethods: false
      }
    ],
    yoda: [
      'error',
      'never',
      {
        exceptRange: false,
        onlyEquality: false
      }
    ]
  }
};
