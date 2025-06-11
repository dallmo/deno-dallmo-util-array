#!/usr/bin/bash

# this script update the dependency file ( etc/deps.ts ) 
# for using with deno modules

from_file="../etc/deps.deno.ts"
to_file="../etc/deps.ts"

  rm -f "$to_file"
  cp "$from_file" "$to_file"

