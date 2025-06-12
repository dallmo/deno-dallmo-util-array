
/*
 * @module dallmo-util-array
 */

//////////////////////////////////////////////////////////////
import {
  
  manage_items,
  misc_tools,
  random_tools,

} from "./etc/deps.ts";
//////////////////////////////////////////////////////////////

// --------------------------------------------------
// manage items
// --------------------------------------------------
/**
 * insert an item into an array with specific position
 * ---------
 * @constant
 * @see `/lib/manage-items.ts`
 */
const insert_item = manage_items.insert_item;


/**
 * update a specific item in an array
 * ---------
 * @constant
 * @see `/lib/manage-items.ts`
 */
const update_item = manage_items.update_item;


/**
 * remove an item from an array
 * ---------
 * @constant
 * @see `/lib/manage-items.ts`
 */
const remove_item = manage_items.remove_item;


// --------------------------------------------------
// misc tools
// --------------------------------------------------
/**
 * generate an array of integers with a range defined by start and end
 * ---------
 * @constant
 * @see `/lib/misc-tools.ts`
 */
const gen_array_by_range = misc_tools.gen_array_by_range;


/**
 * accepts a number array, add them all up and return the sum
 * ---------
 * @constant
 * @see `/lib/misc-tools.ts`
 */
const add_all = misc_tools.add_all;


/**
 * search for given strings in an array with filter
 * ---------
 * @constant
 * @see `/lib/misc-tools.ts`
 */
const search = misc_tools.search;

// --------------------------------------------------
// random tools
// --------------------------------------------------
/**
 * get a random index of an array
 * ---------
 * @constant
 * @see `/lib/random-tools.ts`
 */
const random_index = random_tools.random_index;


/**
 * draw an item from an array randomly
 * ---------
 * @constant
 * @see `/lib/random-tools.ts`
 */
const random_item = random_tools.random_item;


/**
 * insert an item into an array with random position
 * ---------
 * @constant
 * @see `/lib/random-tools.ts`
 */
const random_insert = random_tools.random_insert;


//////////////////////////////////////////////////////////////
/**
 * test connecting to this child module from parent
 * --------------
 * @function test
 * @returns {string}
 */
function test(): string{ 
  return "ok";
}; // function test
//////////////////////////////////////////////////////////////
export {

  test,

  insert_item,
  update_item,
  remove_item,

  gen_array_by_range,
  add_all,
  search,
  
  random_index,
  random_item,
  random_insert,
  
}; // export
