#!/usr/bin/env bash

set -e
set -x

pushd plugins/example-code-snippets
   npm run prepare-git-repos
popd
