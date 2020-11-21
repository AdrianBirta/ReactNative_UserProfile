Open Android Studio

Start android emulator


    npm install;
    npm start;
    a

---
If it shows this error:
"Failed to construct transformer:  Error: EACCES: permission denied, open '/tmp/haste-map metro-4-36677ec4ffe69a9c48969ce0c6048f0e-05d9595d1f7d32f85d732f06fd3b25e9' "

Changing the permission on your tmp folder will resolve that, try with:

    chmod -R 0777 /tmp;

And then npm start again:

    npm start;
---
