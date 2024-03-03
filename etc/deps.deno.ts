
/**
 * --------------------------
 * for deno modules
 * --------------------------
 * this file will be symlinked / copied as deps.ts when publishing to 
 * deno.land/x ; when this is used for publishing to jsr,
 * it will cause errors.
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

} from "https://deno.land/std@0.218.2/assert/mod.ts";
////////////////////////////////////////////////////////////////////////////////
// the published deno module deps
export * as dallmo_util_math from "https://deno.land/x/dallmo_util_math/mod.ts";
////////////////////////////////////////////////////////////////////////////////
