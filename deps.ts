
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
// dallmo_math_util
// the local test deps
export * as dallmo_math_util from "../deno-dallmo-util-math.clone/mod.ts"; 

// the published deno module deps
//export * as dallmo_math_util from "https://deno.land/x/dallmo_util_math/std/mod.ts";
////////////////////////////////////////////////////////////////////////////////


