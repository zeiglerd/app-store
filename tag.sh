#!/bin/bash

echo -n "Enter a version number "
read version

git tag $version
git push origin $version
