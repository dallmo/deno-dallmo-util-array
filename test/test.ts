// deno test methods and util methods
import { 
  assert, 
  assertEquals, 
  assertThrows,
} from "../etc/deps.ts";

// the module methods to be tested
import * as dallmo_util_array from "../mod.ts";

//////////////////////////////////////////////////////////////
Deno.test( "test array : 1 : reaching dallmo-util-array", () => {

  assertEquals( dallmo_util_array.test(), "ok");

}); // Deno.test 1
//////////////////////////////////////////////////////////////
Deno.test( "test array : 2 : random_index", () => {

  let input_array: number[] = [1,2,3,4,5];
  let result: number = dallmo_util_array.random_index( input_array );
  let expression: boolean = (( result >= 0 ) && ( result <= 4 )); 

  // expect that to be true
  assert( expression );

}); // Deno.test 2
//////////////////////////////////////////////////////////////
Deno.test( "test array : 3 : random_item", () => {

  const input_array: number[] = [1,2,3,4,5];
  const result: number = dallmo_util_array.random_item( input_array );
  const expression: boolean = ( input_array.includes( result ) ); 

  // expect that to be true
  assert( expression );

}); // Deno.test 3
//////////////////////////////////////////////////////////////
Deno.test( "test array : 4 : random_insert", () => {

  const input_array: number[] = [1,2,3,4,5];
  const rand_1: number = Math.random();
  const new_array: number[] = dallmo_util_array.random_insert( input_array, rand_1 );
  const expression: boolean = ( new_array.includes( rand_1 ) ); 
 
  // expect these to be true
  // the new item exists in the new array
  assert( expression );

  // the new array is 1 more item than the input array
  assertEquals( new_array.length, input_array.length+1 );

}); // Deno.test 4
//////////////////////////////////////////////////////////////
Deno.test( "test array : 5 : insert_item", async(t) => {

  let input_array: number[] = [1,2,3];
  const new_item: number = 99;  
  let result: number[];

  // try inserting an item in different positions
  // including the head, tail, anywhere in between

  //---------------------------------------------------------
  // steps to test on different cases
  // before the head
  await t.step("step : insert before the head", async () => {

    let item_index: number = 0;
        result = dallmo_util_array.insert_item( input_array, item_index, new_item ); 
        assertEquals( result, [99,1,2,3]);

  }); // step
  //.................................................
  // after the tail / appending
  await t.step("step : insert after the tail", async () => {

    let item_index: number = 3;
        result = dallmo_util_array.insert_item( input_array, item_index, new_item ); 
        assertEquals( result, [1,2,3,99]);

  }); // step
  //.................................................
  // somewhere in-between
  await t.step("step : insert somewhere in-between", async () => {

    let item_index: number = 1;
        result = dallmo_util_array.insert_item( input_array, item_index, new_item ); 
        assertEquals( result, [1,99,2,3]);

  }); // step
  //---------------------------------------------------------

}); // Deno.test 5
//////////////////////////////////////////////////////////////
Deno.test( "test array : 6 : update_item", async (t) => {

  let input_array: number[] = [1,2,3];
  const new_item: number = 99;  
  let result: number[];

  /*
    there are 3 cases to test with : 
    1. item index out of range : < 0 ; 
    2. item index out of range : greater than the array length ; 
    3. item index within range ; 
  */
  //---------------------------------------------------------
  // steps to test on different cases
  // case 1.
  await t.step("step : item index out of range, < 0", async () => {

    let item_index: number = -1;
        result = dallmo_util_array.update_item( input_array, item_index, new_item ); 
        assertEquals( result, input_array);

  }); // step
  //.................................................
  // case 2.
  await t.step("step : item index out of range, > array.length", async () => {

    let item_index: number = input_array.length+1;
        result = dallmo_util_array.update_item( input_array, item_index, new_item ); 
        assertEquals( result, input_array);

  }); // step
  //.................................................
  // case 1.
  await t.step("step : item index within range", async () => {

    let item_index: number = 0;
        result = dallmo_util_array.update_item( input_array, item_index, new_item ); 
        assertEquals( result, [99,2,3]);

  }); // step
  //---------------------------------------------------------

}); // Deno.test 6
//////////////////////////////////////////////////////////////
Deno.test( "test array : 7 : remove_item", async (t) => {

  let input_array: any[];
  let result: any[];
  let target_item: any;

  //---------------------------------------------------------
  // case 1.
  // target item in a certain position in the array,
  // not the first, not the last
  await t.step("step : target item neither the first nor the last", async () => {
    input_array = [1,2,3,4,5];
    target_item = 4;
    result = dallmo_util_array.remove_item( input_array, target_item );
    assertEquals( result, [1,2,3,5] );
  }); // step
  
  //---------------------------------------------------------
  // case 2. 
  // target item is the first item of the array
  await t.step("step : target item is the first item ", async () => {
    input_array = [1,2,3,4,5];
    target_item = 1;
    result = dallmo_util_array.remove_item( input_array, target_item );
    assertEquals( result, [2,3,4,5] );
  }); // step

  //---------------------------------------------------------
  // case 3.
  // target item is the last item of the array
  await t.step("step : target item is the last item ", async () => {
    input_array = [1,2,3,4,"abc"];
    target_item = "abc";
    result = dallmo_util_array.remove_item( input_array, target_item );
    assertEquals( result, [1,2,3,4] );
  }); // step

  //---------------------------------------------------------
  // case 4.
  // target item has 2 occurences
  await t.step("step : target item has multiple occurences", async () => {
    input_array = [1,2,2,2,5];
    target_item = 2;
    result = dallmo_util_array.remove_item( input_array, target_item );
    assertEquals( result, [1,2,2,5] );
  }); // step

  //---------------------------------------------------------
  // case 5.
  // target does not exist, even as a substring
  await t.step("step : target item does not exist, even as a substring", async () => {
    input_array = [1,2,3,4,"aabb"];
    target_item = "aa";
    result = dallmo_util_array.remove_item( input_array, target_item );
    assertEquals( result, input_array );
  }); // step


}); // Deno.test 7
//////////////////////////////////////////////////////////////
Deno.test( "test array : 8 : gen_array_by_range", async (t) => {

  let start: any;
  let end: any;
  let result: number[];
  const array_zero: number[] = [0];

  //---------------------------------------------------------
  // case 1.
  // start and end are different natural numbers, start > end
  await t.step("step : start and end are different, start > end", async () => {
    start = 5;
    end = 2;
    result = dallmo_util_array.gen_array_by_range( start, end );
    assertEquals( result, [2,3,4,5] );
  }); // step
  
  //---------------------------------------------------------
  // case 2. 
  // start and end are different natural numbers, start < end
  await t.step("step : start and end are different, start < end", async () => {
    start = 2;
    end = 5;
    result = dallmo_util_array.gen_array_by_range( start, end );
    assertEquals( result, [2,3,4,5] );
  }); // step

  //---------------------------------------------------------
  // case 3.
  // start and end are different natural numbers, start == end
  await t.step("step : start and end are the same, start == end", async () => {
    start = 4;
    end = 4;
    result = dallmo_util_array.gen_array_by_range( start, end );
    assertEquals( result, [4] );
  }); // step

  //---------------------------------------------------------
  // case 4.
  // start is natural number, end == 0
  await t.step("step : start is natural number, end == 0", async () => {
    start = 4;
    end = 0;
    result = dallmo_util_array.gen_array_by_range( start, end );
    assertEquals( result, [0,1,2,3,4] );
  }); // step

  //---------------------------------------------------------
  // case 5.
  // start == 0, end is natural number
  await t.step("step : start == 0, end is natural number", async () => {
    start = 0;
    end = 3;
    result = dallmo_util_array.gen_array_by_range( start, end );
    assertEquals( result, [0,1,2,3] );
  }); // step

  //---------------------------------------------------------
  // case 6.
  // start == 0, end is negative integer
  await t.step("step : start == 0, end < 0", async () => {
    start = 0;
    end = -3;
    result = dallmo_util_array.gen_array_by_range( start, end );
    assertEquals( result, array_zero );
  }); // step

  //---------------------------------------------------------
  // case 7.
  // start is negative integer, end == 0
  await t.step("step : start < 0, end == 0", async () => {
    start = -11;
    end = 0;
    result = dallmo_util_array.gen_array_by_range( start, end );
    assertEquals( result, array_zero );
  }); // step

  //---------------------------------------------------------
  // case 8.
  // start and end are both negative integers
  await t.step("step : start < 0, end < 0", async () => {
    start = -2;
    end = -3;
    result = dallmo_util_array.gen_array_by_range( start, end );
    assertEquals( result, array_zero );
  }); // step

}); // Deno.test 8
//////////////////////////////////////////////////////////////
Deno.test( "test array : 9 : add_all", async (t) => {
  
  //---------------------------------------------------------
  // case 1.
  // pure numeric array, can be added up 
  await t.step("step : pure numeric array with decimals", async () => {

    let input_array: number[] = [ 1, 2.2, 3 ];
    let result: number = dallmo_util_array.add_all( input_array );

    assertEquals( result, ( 1 + 2.2 + 3 ));

    console.log( "result : ", result );

  }); // step
  //.................................................
  // case 2.
  // check with an array with mixed type of items which should not be added up
  await t.step("step : array item of mixed types", async () => {

    let input_array_2: any[] = [1,2,"abc"];

    // if an array of mixed type is given, an error should be thrown 
    assertThrows(() => {
      let result_2: number = dallmo_util_array.add_all( input_array_2 );
      console.log( result_2 );    
    }); // assertThrows

  }); // step
  //---------------------------------------------------------

}); // Deno.test 9
//////////////////////////////////////////////////////////////
Deno.test(" test array : 10 : search", async (t) => {

  const test_array: any[] = ["aa", "abc", "a a", "b b", 123123, "123cc", "真係", "真 係 乜","唔係"];
  
  let search_string: string;
  let search_result: string[];
  let expected_result: string[];

  //---------------------------------------------------------
  await t.step("step : test ascii string, no space", async () => {

    search_string = "a";
    search_result = dallmo_util_array.search( test_array, search_string );
    expected_result = ["aa", "abc", "a a"];

    assertEquals( search_result, expected_result );

  }); // step
  //................................
  await t.step("step : test ascii string, with space", async () => {

    search_string = "a a";
    search_result = dallmo_util_array.search( test_array, search_string );
    expected_result = ["a a"];

    assertEquals( search_result, expected_result );

  }); // step
  //................................
  await t.step("step : test UTF-8 string, no space", async () => {

    search_string = "真係";
    search_result = dallmo_util_array.search( test_array, search_string );
    expected_result = ["真係"];

    assertEquals( search_result, expected_result );

  }); // step
  //................................
  await t.step("step : test UTF-8 string, with space", async () => {

    search_string = "真 係";
    search_result = dallmo_util_array.search( test_array, search_string );
    expected_result = ["真 係 乜"];

    assertEquals( search_result, expected_result );

  }); // step
  //................................
  await t.step("step : test ascii string, nothing matched", async () => {

    search_string = "asdf";
    search_result = dallmo_util_array.search( test_array, search_string );
    expected_result = [];

    assertEquals( search_result, expected_result );

  }); // step
  //---------------------------------------------------------

}); // deno test 10
//////////////////////////////////////////////////////////////

