
/**
 * perform random-related functions
 */

//////////////////////////////////////////////////////////////
import {
  dallmo_util_math,
  manage_items,
} from "../etc/deps.ts";
//////////////////////////////////////////////////////////////
/**
 * get a random index of an array
 * ----------------------
 * @function random_index
 * @param {any[]} input_array - the input array
 * @returns {number} a random index of the input array
 */
function random_index( input_array: any[] ): number {

  return Math.floor( Math.random() * input_array.length );

}; // function random_index
//////////////////////////////////////////////////////////////
/**
 * draw an item from an array randomly
 * ---------------------
 * @function random_item
 * @param {array} input_array - the input array
 * @returns {any} return one of the item inside the given array
 */
function random_item( input_array: any[] ): any {

  return input_array[ random_index( input_array )];

}; // function random_item
//////////////////////////////////////////////////////////////
/**
 * insert an item into an array with random position
 * -----------------------
 * @function random_insert
 * @param {any[]} input_array - the input array
 * @param {any} new_item - the item to be inserted into the input array
 * @returns {any[]} a new array with the new item inserted 
 */
function random_insert( input_array: any[], new_item: any ): any[]{

    const new_item_index: number = dallmo_util_math.random_integer( 0, input_array.length );
    return manage_items.insert_item( input_array, new_item_index, new_item );

}; // function random_insert
//////////////////////////////////////////////////////////////
export {

  random_index,
  random_item,
  random_insert,

}; // export
