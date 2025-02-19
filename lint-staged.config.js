module.exports = {
    "**/*.(ts|tsx)": () => "yarn tsc --noEmit",

    "**/*.(ts|tsx|js)": filenames => [
        `npx eslint --fix ${filenames.join(" ")}`,
        `npx prettier --write ${filenames.join(" ")}`,
    ],

    "**/*.(md|json)": filenames =>
        `npx prettier --write ${filenames.join(" ")}`,
}
