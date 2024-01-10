// deno test methods
import { assert, assertEquals } from "../deps.ts";

// the module to be tested
import { 
  test,
  random_index  
} from "../mod.ts";

//////////////////////////////////////////////////////////////
Deno.test( "test array : 1 : reaching dallmo-util-array", () => {

  assertEquals( test(), "ok");

}); // Deno.test
//////////////////////////////////////////////////////////////
Deno.test( "test array : 2 : random_index", () => {

  let array_1: number[] = [1,2,3,4,5];
  let result: number = random_index( array_1 );
  let expression: boolean = (( result >= 0 ) && ( result <= 4 )); 

  // expect that to be true
  assert( expression );

  //console.log( typeof( result )); 

}); // Deno.test
//////////////////////////////////////////////////////////////
Deno.test( "test array : 3 : random_insert", () => {

  let array_1: number[] = [1,2];

}); // Deno.test
//////////////////////////////////////////////////////////////
Deno.test( "test array : 4 : insert_item", () => {

  let array_1: number[] = [1,2];

}); // Deno.test
//////////////////////////////////////////////////////////////
Deno.test( "test array : 5 : update_item", () => {

  let array_1: number[] = [1,2];

}); // Deno.test
//////////////////////////////////////////////////////////////
Deno.test( "test array : 6 : add_all", () => {

  let array_1: number[] = [1,2];

}); // Deno.test
//////////////////////////////////////////////////////////////

