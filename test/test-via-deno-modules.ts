// this assumes the latest version
import * as dallmo_util_array from "https://deno.land/x/dallmo_util_array/mod.ts";

const test_array: any[] = ["123","abc", 456, "何ですか"];
console.log( "random_item : ", dallmo_util_array.random_item( test_array ) );
