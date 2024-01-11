// deno test methods and util methods
import { 
  assert, 
  assertEquals, 
  assertThrows,
  dallmo_math_util
} from "../deps.ts";

// the module methods to be tested
import { 
  test,
  random_index,
  random_item,
  random_insert,
  insert_item,
  update_item,
  add_all
} from "../mod.ts";

//////////////////////////////////////////////////////////////
Deno.test( "test array : 1 : reaching dallmo-util-array", () => {

  assertEquals( test(), "ok");

}); // Deno.test
//////////////////////////////////////////////////////////////
Deno.test( "test array : 2 : random_index", () => {

  let input_array: number[] = [1,2,3,4,5];
  let result: number = random_index( input_array );
  let expression: boolean = (( result >= 0 ) && ( result <= 4 )); 

/*
  console.log("input array : ", input_array );
  console.log("random_index : ", result );
*/

  // expect that to be true
  assert( expression );

}); // Deno.test
//////////////////////////////////////////////////////////////
Deno.test( "test array : 3 : random_item", () => {

  const input_array: number[] = [1,2,3,4,5];
  const result: number = random_item( input_array );
  const expression: boolean = ( input_array.includes( result ) ); 

/*  
  console.log("input array : ", input_array );
  console.log("random_item : ", result );
*/

  // expect that to be true
  assert( expression );

}); // Deno.test
//////////////////////////////////////////////////////////////
Deno.test( "test array : 4 : random_insert", () => {

  const input_array: number[] = [1,2,3,4,5];
  const rand_1: number = Math.random();
  const new_array: number[] = random_insert( input_array, rand_1 );
  const expression: boolean = ( new_array.includes( rand_1 ) ); 

/*
  console.log("random num : ", rand_1 );
  console.log("input array : ", input_array );
  console.log("new array : ", new_array );
*/
 
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
        result = insert_item( input_array, item_index, new_item ); 
    
        assertEquals( result, [99,1,2,3]);
  }); // step
  //.................................................
  // after the tail / appending
  await t.step("step : insert after the tail", async () => {

    let item_index: number = 3;
        result = insert_item( input_array, item_index, new_item ); 
    
        assertEquals( result, [1,2,3,99]);
  }); // step
  //.................................................
  // somewhere in-between
  await t.step("step : insert somewhere in-between", async () => {

    let item_index: number = 1;
        result = insert_item( input_array, item_index, new_item ); 
    
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
        result = update_item( input_array, item_index, new_item ); 
    
        assertEquals( result, input_array);
  }); // step
  //.................................................
  // case 2.
  await t.step("step : item index out of range, > array.length", async () => {

    let item_index: number = input_array.length+1;
        result = update_item( input_array, item_index, new_item ); 
    
        assertEquals( result, input_array);
  }); // step
  //.................................................
  // case 1.
  await t.step("step : item index within range", async () => {

    let item_index: number = 0;
        result = update_item( input_array, item_index, new_item ); 
    
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
    let result: number = add_all( input_array );

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
      let result_2: number = add_all( input_array_2 );
      console.log( result_2 );    
    }); // assertThrows

  }); // step
  //---------------------------------------------------------

}); // Deno.test
//////////////////////////////////////////////////////////////

