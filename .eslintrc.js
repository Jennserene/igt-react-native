module.exports = {
  root: true,
  extends: ["universe/native", "universe/shared/typescript-analysis"],
  overrides: [
    {
      files: ["*.ts", "*.tsx", "d.ts"],
      parserOptions: {
        project: "./tsconfig.json",
      },
    },
  ],
  rules: {
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": [
      "error",
      { argsIgnorePattern: "^_" }
    ],
    "prettier/prettier": "error",
  }
}