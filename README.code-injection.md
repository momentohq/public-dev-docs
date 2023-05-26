# How Code Snippets Get Injected Into These Docs

In the `plugins/example-code-snippets` directory you will find some docusaurus plugins that hook into the
markdown-processing phase of the docs generation and are able to inject code snippets from the SDK repos
into the docs.  This is valuable for a few reasons:

* It means that the code samples can live in the SDK repos, where they are exercised in CI to make sure they work properly.
* It means we don't have to have samples from all the languages in-lined into every place in the docs where we need code
  samples. That approach is a little unwieldy and difficult to manage.
* It means we can re-use the same snippets in more than one place in the docs!
* It means if we want to change the syntax of one of the examples, we only need to do it in one place and the docs will
  get updated in all the places that use that snippet.

So without further ado, let's talk about how this actually works.

## tl;dr

- Define code in example repos
- Add <SdkExampleCodeBlock> or <SdkExampleTabs> blocks to the dev docs
- Run `yarn start` to start a local server hosting the docs and test your changes
- Run `yarn clear && yarn build` to do a complete build of the docs, which will produce output at the end telling you which
  languages are missing examples.

## Defining example code in the repos

The first thing you need to do is to go into the examples dir of the SDK you're working on, and create one or more files
that contain the examples you want to inject. The example code can be defined as functions in a file, like this one:

https://github.com/momentohq/client-sdk-javascript/blob/30fe263642d18f35efa13af2bb7ee93a2abc3f6a/examples/nodejs/doc-examples-js-apis.ts

You can also inject entire files. To do that you just need to create a directory that will contain all the files that you
want to be able to inject, like this:

https://github.com/momentohq/client-sdk-javascript/tree/30fe263642d18f35efa13af2bb7ee93a2abc3f6a/examples/nodejs/doc-example-files

You should also make sure that these files get executed in CI so that the code is being actively validated as changes roll
into the SDK, like this:

https://github.com/momentohq/client-sdk-javascript/blob/30fe263642d18f35efa13af2bb7ee93a2abc3f6a/examples/nodejs/package.json#L17

Once you have made the changes you need in the SDK repo, and they've been merged, you can move on to consuming them in
the docs.

## Setting up injection support for an SDK language for the first time

The first time you want to do injection from a given SDK, or if you need to register a new example file or directory,
you'll have to do a tiny bit of work on the plugin itself.

1. Create a SnippetSourceParser for your language if it doesn't already exist.  You can copy/paste the [Javascript one](./plugins/example-code-snippets/src/examples/resolvers/source-parsers/languages/javascript-snippet-source-parser.ts).
2. Initialize the [`wholeFilesExamplesDir`](https://github.com/momentohq/public-dev-docs/blob/04716fc6f508985881cf2c5efef1182bef496617/plugins/example-code-snippets/src/examples/resolvers/source-parsers/languages/javascript-snippet-source-parser.ts#L10) to point to a directory in your SDK repo that you want to be able to inject full files from.
3. Initialize the [`codeSnippetFiles`](https://github.com/momentohq/public-dev-docs/blob/main/plugins/example-code-snippets/src/examples/resolvers/source-parsers/languages/javascript-snippet-source-parser.ts#L11-L13) to define a list of one or more files from which you want to be able to extract examples from functions.
4. Define a [startRegex](https://github.com/momentohq/public-dev-docs/blob/04716fc6f508985881cf2c5efef1182bef496617/plugins/example-code-snippets/src/examples/resolvers/source-parsers/languages/javascript-snippet-source-parser.ts#L26-L29) and an [endRegex](https://github.com/momentohq/public-dev-docs/blob/04716fc6f508985881cf2c5efef1182bef496617/plugins/example-code-snippets/src/examples/resolvers/source-parsers/languages/javascript-snippet-source-parser.ts#L30) that will be used to match the beginning/end of functions that you want to extract examples from.
5. Customize [the number of leading spaces](https://github.com/momentohq/public-dev-docs/blob/04716fc6f508985881cf2c5efef1182bef496617/plugins/example-code-snippets/src/examples/resolvers/source-parsers/languages/javascript-snippet-source-parser.ts#L31) that you want to strip from the code in the function. (We might need something more sophisticated here going forward but this works so far).
6. Register your source parser for the correct SDK language in the [sdk-repo-snippet-resolver.ts file](https://github.com/momentohq/public-dev-docs/blob/04716fc6f508985881cf2c5efef1182bef496617/plugins/example-code-snippets/src/examples/resolvers/sdk-repo-snippet-resolver.ts#L69).

That should be all that you need to do to get things up and running!

## React Tag Syntax in the markdown files

If your markdown file doesn't already have them, you will need to make sure to add the appropriate imports
for the <SdkExampleCodeBlock> and <SdkExampleTabs> components as needed:

https://github.com/momentohq/public-dev-docs/blob/04716fc6f508985881cf2c5efef1182bef496617/docs/develop/api-reference/index.mdx?plain=1#L9-L12

### `SdkExampleTabs`

Use the `<SdkExampleTabs>` component if you want to add a tab view that shows examples for all available languages:

```
<SdkExampleTabs snippetId={'API_DeleteCache'} />
```

https://github.com/momentohq/public-dev-docs/blob/04716fc6f508985881cf2c5efef1182bef496617/docs/develop/api-reference/index.mdx?plain=1#LL41C1-L42C49

The function names in your SDK example code file need to match the `snippetId` specified in this tag.

### `SdkExampleCodeBlock`

Use the `<SdkExampleCodeBlock>` if you want to inject examples for a single language, either from a
function from a complete file.  This will mostly be used in language-specific cheat-sheets and similar
docs.

To inject a language-specific code sample from a function in the SDK:

```
<SdkExampleCodeBlock language={'javascript'} snippetId={'API_CreateCache'} />
```

https://github.com/momentohq/public-dev-docs/blob/04716fc6f508985881cf2c5efef1182bef496617/docs/develop/sdks/nodejs/cheat-sheet.mdx?plain=1#L43

To inject a whole file from an SDK as a code sample:

```
<SdkExampleCodeBlock language={'javascript'} file={'cheat-sheet-main.ts'} />
```

https://github.com/momentohq/public-dev-docs/blob/04716fc6f508985881cf2c5efef1182bef496617/docs/develop/sdks/nodejs/cheat-sheet.mdx?plain=1#L38

## CookBook

### How do I update the example code for an existing code snippet in a given language?

- Go into the examples dir in the SDK
- Find the file(s) that contain example functions
- Find the function that ends with the `snippetId` suffix for the snippet you are trying to update
- Make your changes
- Get your SDK PR reviewed and merged

The next time the docs website is built it should automatically pick up your changes.

### How do I add a new code snippet to the docs, something that doesn't exist in any of the SDK examples yet?

- Decide on a `snippetId` for your example.
- Go into the examples dir in the SDK
- Find the file(s) that contain example functions
- Add a new function to one of the files; make sure the function name matches the existing naming pattern,
  and ends with the `snippetId` you chose above.
- Get your SDK PR reviewed and merged
- In the dev docs repo, add a new `<SdkExampleCodeBlock>` or `<SdkExampleTabs>` tag, using your chosen
  `snippetId`, in the appropriate markdown file.
- Run `yarn start` to test the docs site locally and make sure your change shows up.
- Create a docs PR and get it reviewed and merged. The subsequent build/deploy will include your change.

### How do I see which languages are missing examples?

Run `yarn clear && yarn build`.  The output at the end of the command will list all the languages and the
count of examples they are missing.

### How do I debug if something is going wrong?

Honestly, the easiest thing to do is to go add `console.log` statements to the plugin code in
`plugins/example-code-snippets` and then run `yarn build` to see the output.  Can also be useful to
do `yarn build |tee yarn-build-output.txt` so you can more easily search through the output if your
log statement is in a particularly verbose location.
