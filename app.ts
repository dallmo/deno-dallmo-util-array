
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

// manage items
const insert_item = manage_items.insert_item;
const update_item = manage_items.update_item;
const remove_item = manage_items.remove_item;

// misc tools
const gen_array_by_range = misc_tools.gen_array_by_range;
const add_all = misc_tools.add_all;
const search = misc_tools.search;

// random tools
const random_index = random_tools.random_index;
const random_item = random_tools.random_item;
const random_insert = random_tools.random_insert;

//////////////////////////////////////////////////////////////
/**
 * test connecting to this child module from parent
 * --------------
 * @function test
 * @param {undefined} 
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
