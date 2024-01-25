module.exports = {
  root: true,
  extends: "@react-native",
  plugins: ["import"],
  rules: {
    quotes: ["error", "double"],
    semi: ["error", "never"],
    "import/order": [
      "error",
      {
        groups: ["external", "internal", ["sibling", "parent"]],
        pathGroups: [
          {
            pattern: "react**",
            group: "external",
            position: "before",
          },
          {
            pattern: "app/**",
            group: "internal",
            position: "after",
          },
        ],
        pathGroupsExcludedImportTypes: ["internal"],
        alphabetize: {
          order: "asc",
        },
        "newlines-between": "always",
      },
    ],
  },
}
