tsc --init

config :
--------
"noImplicitAny" : true

"outDir": "./dist" // folder hasil compile
"rootDir": "/src" // lokasi source file

compile :
----------
tsc

compile and run :
tsc && node dist/index.js