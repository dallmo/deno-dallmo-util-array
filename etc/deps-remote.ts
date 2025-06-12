
/**
 * all REMOTE dependencies go here,
 * then all collected under etc/deps.ts
 * and all apps point to etc/deps.ts for central management
 */

///////////////////////////////////////////////////////////////
// for testing
export {

  assert,
  assertEquals,
  assertThrows

} from "jsr:@std/assert@^1.0.13";
///////////////////////////////////////////////////////////////
// the published jsr module deps
export * as dallmo_util_math from "jsr:@dallmo/util-math@^1.3.0";

