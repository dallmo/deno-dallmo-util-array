
/*
 * @module dallmo-util-array
 */

import {
  dallmo_util_math
} from "./etc/deps.ts";

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
    return insert_item( input_array, new_item_index, new_item );

}; // function random_insert
//////////////////////////////////////////////////////////////
/**
 * insert an item into an array with specific position
 * ---------------------
 * @function insert_item
 * @param {any[]} input_array - the original array
 * @param {number} item_index - in the new array, the index for the new_item 
 * @param {any} new_item - the item to insert into the original array
 * @returns {any[]} a new array with new_item inserted according to item_index
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
/**
 * update a specific item in an array
 * ---------------------
 * @function update_item
 * @param {any[]} input_array - the input array
 * @param {number} item_index - the array item of this index will be updated
 * @param {any} new_item - update an array item as this
 * @returns {any[]} return a new array with the specified item updated
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
/**
 * remove an item from an array
 * ---------------------
 * @function remove_item
 * @param {any[]} input_array - the input array
 * @param {any} target_item - the item to be found
 * @returns {any[]} return a new array with the found item removed, or the original array if there isn't any
 */
function remove_item( input_array: any[], target_item: any ): any[] {

  // try looking for the target_item from the input_array
  const found_at: number = input_array.indexOf( target_item );
  //console.log("found_at: ", found_at );

  // if the target_item can be found, the index will be 0..natural number by array length
  // otherwise, when it can't be found, it will be -1
  if( found_at != -1 ){
    
    // remove the item in place at the found index,
    // only the first occurence, for 1 time
    input_array.splice( found_at, 1 );

  }; // if the target_item can be found

  return input_array;

}; // function remove_item
//////////////////////////////////////////////////////////////
/**
 * generate an array of integers with a range defined by start and end
 * ---------------------
 * @function 
 * @param {number} start, natural number
 * @param {number} end, natural number
 * @returns {number[]} an array of integers
 */
function gen_array_by_range( start: number, end: number ): number[] {

  // if the given range has the same start and end
  if( start == end ){
    return [start];
  }; // if they are equal

  // if either start or end is less than 0
  if( start<0 || end<0 ){
    return [0];
  }; // if

  // make sure start is smaller than end
  if( start > end ){
    [start,end] = [end,start];
  }; // make sure start is smaller

  const array_length = end - start + 1;

    return Array.from( Array( array_length ).keys(), x => x + start );
  
}; // function 
//////////////////////////////////////////////////////////////
/**
 * accepts a number array, add them all up and return the sum
 * -----------------
 * @function add_all
 * @param {number[]}
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
        // if an array of mixed type is given, an error will be thrown
        throw Error("number array expected.");
      }; // if else
    }); // foreach
  }catch( error ){
    throw( error );
  }//try catch

  return sum;

}; // function add_all
//////////////////////////////////////////////////////////////
/**
 * search for given strings in an array with filter
 * ref : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
 * ----------------
 * @function search
 * @param {any[]} input_array 
 * @param {string} search_string 
 * @returns {string[]} an array of strings, or empty if nothing matched
 */
function search( input_array: any[], search_string: string ): string[]{

  return input_array.filter(
    (element_list) => element_list.toString().toLowerCase().includes( search_string.toLowerCase() )
  ); // arr.filter

}; // function
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

  random_index,
  random_item,
  random_insert,
  insert_item,
  update_item,
  remove_item,
  gen_array_by_range,

  add_all,
  search,

}; // export
