
/*
 * keep all imports / dependencies here for centralized management
 * all other imports in this module should only point to here
 */

////////////////////////////////////////////////////////////////////////////////
// for testing
export {

  assert,
  assertEquals,
  assertThrows

} from "https://deno.land/std/assert/mod.ts";
////////////////////////////////////////////////////////////////////////////////
// dallmo_util_math
// the local test deps
//export * as dallmo_util_math from "../deno-dallmo-util-math.clone/mod.ts"; 

// the published deno module deps
export * as dallmo_util_math from "https://deno.land/x/dallmo_util_math/mod.ts";
////////////////////////////////////////////////////////////////////////////////


