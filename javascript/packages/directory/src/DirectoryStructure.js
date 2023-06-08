export const DirectoryStructure = {
  "dotcontract.json": {
    type: InitFile,
    required: true,
  },
  "README.txt": {
    type: "file",
  },
  commits: {
    type: "directory",
  },
  files: {
    type: "directory",
  }
};

export default DirectoryStructure;
