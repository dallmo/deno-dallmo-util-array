# @dallmo/util-array

# overview

- a collection of array util under dallmo-util, published as a deno module.
- re-written in typescript, migrated from nodejs to base only on deno standard libraries ; 
- published on both [deno land][link-1] and [jsr][link-2] ; 


# list of available methods

- random_index
- random_item
- random_insert
- insert_item
- update_item
- add_all
- search




# usage

## 1. running on deno, import via deno module

1. nothing to add via CLI.
2. create `test-via-deno-modules.ts` ; 

```
// this assumes the latest version
import * as dallmo_util_array from "https://deno.land/x/dallmo_util_array/mod.ts";

const test_array: any[] = ["123","abc", 456, "何ですか"];
console.log( "random_item : ", dallmo_util_array.random_item( test_array ) );
```

3. run the test file
```
deno run test-via-deno-modules.ts
```

## 2. running on deno, import via jsr

1. in CLI, add the module with :
```
deno add @dallmo/util-array
```

2. create `test-via-jsr.ts` ; 
```
import * as dallmo_util_array from "@dallmo/util-array";

const test_array: any[] = ["123","abc", 456, "何ですか"];
console.log( "random_item : ", dallmo_util_array.random_item( test_array ) );

```

3. run the test file
```
deno run test-via-jsr.ts
```





# test
to run test codes : 

1. switch to the project root folder, i.e. `[root]/` ;
2. run deno task scripts :
- to test with dependencies via deno modules : 
  - run `deno task test-deno` ;
- to test with dependencies via jsr : 
  - run `deno task test-jsr` ; 

[comments]: -----------------------------------
[link-1]: https://deno.land/x/dallmo_util_array
[link-2]: https://jsr.io/@dallmo/util-array
