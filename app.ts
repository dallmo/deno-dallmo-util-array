
/*
 * @module dallmo-util-array
 */

//////////////////////////////////////////////////////////////
/*
 * @function random_index
 * @param {array} _array
 * @returns {number} an random index of the array _array
 */
function random_index( _array: any[] ): number {

  return Math.floor( Math.random() * _array.length );

}; // function random_index
//////////////////////////////////////////////////////////////
function random_item(){};
function random_insert(){};

function insert_item(){};
function update_item(){};
function add_all(){};
//////////////////////////////////////////////////////////////
/*
 * @function test
 * @param {undefined} 
 * @returns {string}
 */
function test(): string{ 
  return "ok";
}// 
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

