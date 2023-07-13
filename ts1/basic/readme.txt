source video : https://www.youtube.com/watch?v=4zdBk6wisxc

npm init
tsc --init --sourceMap --rootDir src --outDir dist

npm i --save-dev typescript

watch changing in project :
==========================
1. press F1
2. choose -> Task: Configure Default Build Task
3. choose -> tsc: watch - tsconfig.json

files tasks.json is created.

press F1 again then choose Task: Run Build Task
it creates new instance of terminal to start watching the changes
