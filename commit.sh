#!/bin/bash

echo -n "Enter a commit message: "
read msg

git add -A
git commit -m "$msg"
git push origin -u
