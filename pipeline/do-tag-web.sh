#!/bin/bash

git status|grep modified
if [ $? -eq 0 ]; then
    echo "Please commit your changes before tagging"
    exit 1
fi

set -e
version=`jq '.version' $MDGJX_ROOT/package.json -r` 
tagName=$version
git tag $tagName
git push origin $tagName
