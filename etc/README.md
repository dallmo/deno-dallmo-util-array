# overview

all functions are shared via `deps.ts`, which import functions from both : 

- `deps-local.ts`  : local functions to be provided via `/app.ts`, or as protected / internal utilities ; 
- `deps-remote.ts` : import existing packages in jsr ; 
