# DotContract Demos

While in this directory, direnv will setup the command `contract` to point to the local development version.


## Creating and working with contract files and directories

### Creating a new contract as a file, find info about it and its commits
```
contract create -c example.contract
contract info -c example.contract
contract commit -c example.contract --post / "hello"
contract log -c example.contract
```

### Unpacking a contract file into a directory and committing to it
```
contract unpack -i example.contract --dir example
cd example
contract info
contract commit --post / "hello"
contract log
```

### Packing a contract directory into a contract file
```
cd ..
contract pack --dir example -o example2.contract
```

## Commit

...
