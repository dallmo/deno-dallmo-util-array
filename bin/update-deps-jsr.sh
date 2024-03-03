#!/usr/bin/bash

# this script update the dependency file ( etc/deps.ts ) 
# for using with jsr modules

from_file="../etc/deps.jsr.ts"
to_file="../etc/deps.ts"

  rm -f "$to_file"
  cp "$from_file" "$to_file"

