# not

literally one function exported -- made in like 3 minutes

59 bytes not minified

## usage

with typescript:

```typescript
import not from '@ajkachnic/not'
const myNum = 2

if(not(myNum === 1)) {
  console.log('it works')
}
```

common js:

```javascript
const not = require('@ajkachnic/not')
const myNum = 2

if(not(myNum === 1)) {
  console.log('it works')
}
```

## api

takes a boolean, returns a boolean... enough said
