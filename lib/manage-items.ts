
/**
 * manage items, perform actions like : 
 * update / insert / remove
 */

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

  const temp_array_head: any[] = input_array_head.slice();
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
export{

  insert_item,
  update_item,
  remove_item,

}; // export
