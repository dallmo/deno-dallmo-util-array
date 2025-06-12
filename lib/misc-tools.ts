
/**
 * misc tools, or those not a category on its own.
 */

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
export {
  
  gen_array_by_range,
  add_all,
  search,

}; // export
