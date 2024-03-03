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

}); // Deno.test
//////////////////////////////////////////////////////////////
Deno.test( "test array : 2 : random_index", () => {

  let input_array: number[] = [1,2,3,4,5];
  let result: number = dallmo_util_array.random_index( input_array );
  let expression: boolean = (( result >= 0 ) && ( result <= 4 )); 

  // expect that to be true
  assert( expression );

}); // Deno.test
//////////////////////////////////////////////////////////////
Deno.test( "test array : 3 : random_item", () => {

  const input_array: number[] = [1,2,3,4,5];
  const result: number = dallmo_util_array.random_item( input_array );
  const expression: boolean = ( input_array.includes( result ) ); 

  // expect that to be true
  assert( expression );

}); // Deno.test
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

}); // Deno.test
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

}); // Deno.test
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

}); // Deno.test
//////////////////////////////////////////////////////////////
Deno.test( "test array : 7 : add_all", async (t) => {
  
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

}); // Deno.test
//////////////////////////////////////////////////////////////
Deno.test(" test array : 8 : search", async (t) => {

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

}); // deno test
//////////////////////////////////////////////////////////////
