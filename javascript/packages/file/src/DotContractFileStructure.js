export const DotContractFileStructure = {
  "dotcontract.json": {
    type: InitFile,
    required: true
  },
  "status.json": {
    type: StatusFile,
    required: true
  },
  "README.txt": {
    type: "file",
  },
  logic: {
    type: "directory",
    required: true,
    files: {
      "constraints.json": {
        type: ConstraintsFile,
      },
      "state.json": {
        type: StateFile,
      }
    }
  },
  commits: {
    type: "directory",
  },
  files: {
    type: "directory",
  },
};

export default DotContractFileStructure;