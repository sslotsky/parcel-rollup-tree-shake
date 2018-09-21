# Tree shaking experiment

Attempting to tree shake a rollup module using parcel bundler. I find that no matter how many things I import from the module, the bundle size increases by the same amount.

## Create the report

```
yarn
yarn build
cd examples/static
yarn
yarn parcel build index.html
```

This builds the library and then builds the example parcel app in production mode. A `report.html` is produced in `examples/static/dist` showing the bundle breakdown.

## Decrease/increase imports

Change the number of things you are importing from the library. In `examples/static/index.js`, the top line imports all the functions from the library:

```js
import { bar, foo, quux } from 'paginate-these';
```

Remove one or two of these functions and rebuild (empty `examples/static/dist` first if desired):

```
yarn parcel build index.html
```

Refresh the report and observe that `paginate-these` contributes the same number of bites to the bundle as seen in the previous report.

## Stuff to do

- [ ] Expose cjs & esm modules
- [ ] Example apps using local modules
- [ ] Port over components
- [ ] Example static app
- [ ] SSR example w/Next
- [ ] Document
- [ ] Test
