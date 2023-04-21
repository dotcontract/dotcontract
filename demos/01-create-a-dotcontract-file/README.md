# Create a DotContract file

```bash
contract create -c example.contract
```

```markdown
Contract created successfully
.contract file at: example.contract
```

```bash
contract info -c example.contract
```
```markdown
# Contract Info
* ID = 12D3KooWPkUBNVmqfcHVZcjH38G1wocddjLeosfQYViXWtbwRwhZ

## Local Status
* Status = VALID
* Commit Count = 0
```

```bash
contract commit -c example.contract --post /welcome.text "hello"
```
```bash
contract log -c example.contract
```
```markdown
# Contract Commit Log

## Commit #1 => 4613380db8050b3d7e0fb687a2d888a55ab05f3484bb5c7b7ea98b7039b15f94

### Actions
POST    /welcome.text                   hello

```
