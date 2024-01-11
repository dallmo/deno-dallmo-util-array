
/*
 * @module dallmo-util-array
 */

import {
  dallmo_math_util
} from "./deps.ts";

//////////////////////////////////////////////////////////////
/*
 * @function random_index
 * @param {array} input_array - the input array
 * @returns {number} an random index of the input array
 */
function random_index( input_array: any[] ): number {

  return Math.floor( Math.random() * input_array.length );

}; // function random_index
//////////////////////////////////////////////////////////////
/*
 * @function random_item
 * @param {array} input_array - the input array
 * @returns {any} return one of the item inside the given array
 */
function random_item( input_array: any[] ): any {

  return input_array[ random_index( input_array )];

}; // function random_item
//////////////////////////////////////////////////////////////
/*
 * @function random_insert
 * @param {array} input_array - the input array
 * @param {any} new_item - the item to be inserted into the input array
 * @returns {array} a new array with the new item inserted
 */
function random_insert( input_array: any[], new_item: any ): any[]{

    const new_item_index: number = dallmo_math_util.random_integer( 0, input_array.length );
    return insert_item( input_array, new_item_index, new_item );

}; // function random_insert
//////////////////////////////////////////////////////////////
/*
 * @function insert_item
 * @param {array} input_array - the original array
 * @param {number} item_index - in the new array, the index for the new_item 
 * @param {any} new_item - the item to insert into the original array
 * @returns {array} a new array with new_item inserted according to item_index
 */
function insert_item( input_array: any[], item_index: number, new_item: any ): any[]{

  // item_index is corresponding to input_array
  const input_array_head: any[] = input_array.slice( 0, item_index );
  const input_array_tail: any[] = input_array.slice( item_index, input_array.length );

  let temp_array_head: any[] = input_array_head.slice();
      temp_array_head.push( new_item );

    return temp_array_head.concat( input_array_tail );

}; // function insert_item
//////////////////////////////////////////////////////////////
/*
 * @function update_item
 * @param {array} input_array - the input array
 * @param {number} item_index - the array item of this index will be updated
 * @param {any} new_item - update an array item as this
 * @returns {array} return a new array with the specified item updated
 */
function update_item( input_array: any[], item_index: number, new_item: any ): any[]{

  // if the given index is out of range, just return the input_array
  if( item_index < 0 || item_index >= input_array.length ){
    return input_array;
  }else{

    let new_array: any[] = [];

    input_array.forEach( ( curr_item: any , curr_index: number ) => {

      if( curr_index == item_index ){
        new_array.push( new_item );
      }else{
        new_array.push( curr_item );
      }//if else, curr_index

    });// forEach

    return new_array;

  }; // if else, item index out of range

}; // function update_item
//////////////////////////////////////////////////////////////
/*
 * @function add_all
 * @param {array}
 * @returns {number} add all number in an number array
 */
function add_all( input_array: number[] ): number{

  let sum: number = 0;

  try{
    // assume an array containing only integers
    // return the sum of all items
    input_array.forEach( ( item: number ) => {

      if( typeof( item ) === "number" ){
        sum += item;
      }else{
        // if an array of mixed type is given, an error should be thrown
        throw Error;
      }; // if else
    }); // foreach
  }catch( e ){
    throw( e );
  }//try catch

  return sum;

}; // function add_all
//////////////////////////////////////////////////////////////
/*
 * @function test
 * @param {undefined} 
 * @returns {string} showing the connection to this module is ok
 */
function test(): string{ 
  return "ok";
}; // function test
//////////////////////////////////////////////////////////////
export {

  random_index,
  random_item,
  random_insert,
  insert_item,
  update_item,
  add_all,
  test,

}; // export

