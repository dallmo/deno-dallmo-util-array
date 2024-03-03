
/**
 * --------------------------
 * for jsr modules
 * --------------------------
 * this file will be symlinked / copied as deps.ts when publishing to 
 * jsr, which does not allow importing modules from deno.land/x via http.
 * 
 * keep all imports / dependencies here for centralized management
 * all other imports in this module should only point to here
 * 
 */

////////////////////////////////////////////////////////////////////////////////
// for testing
export {

  assert,
  assertEquals,
  assertThrows

} from "jsr:@std/assert@^0.218.2";
////////////////////////////////////////////////////////////////////////////////
// the published jsr module deps
export * as dallmo_util_math from "jsr:@dallmo/util-math";
////////////////////////////////////////////////////////////////////////////////
