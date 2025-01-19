const config = {
  moduleDirectories: ["node_modules", "src"],
  transform: {
    "^.+\\.[t|j]sx?$": "babel-jest",
  },
  testEnvironment: "node",
};

export default config;
