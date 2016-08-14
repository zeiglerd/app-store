#!/bin/bash

clear
DIR="src/lib/utilities.js"
echo "Now linting $DIR ..."
echo
eslint $DIR
echo
read -p "Press enter to continue..."

clear
DIR="src/models/app.js"
echo "Now linting $DIR ..."
echo
eslint $DIR
echo
read -p "Press enter to continue..."

clear
DIR="src/models/db.js"
echo "Now linting $DIR ..."
echo
eslint $DIR
echo
read -p "Press enter to continue..."

clear
DIR="eslint src/models/user.js"
echo "Now linting $DIR ..."
echo
eslint $DIR
echo
read -p "Press enter to continue..."

clear
DIR="src/routes/api/app.js"
echo "Now linting $DIR ..."
echo
eslint $DIR
echo
read -p "Press enter to continue..."

clear
DIR="src/routes/api/user.js"
echo "Now linting $DIR ..."
echo
eslint $DIR
echo
read -p "Press enter to continue..."

clear
DIR="src/routes/index.js"
echo "Now linting $DIR ..."
echo
eslint $DIR
echo
read -p "Press enter to continue..."

clear
DIR="src/server.js"
echo "Now linting $DIR ..."
echo
eslint $DIR
echo
read -p "Press enter to continue..."

clear
DIR="test/__models_apps.js"
echo "Now linting $DIR ..."
echo
eslint $DIR
echo
read -p "Press enter to continue..."

clear
DIR="test/__models_users.js"
echo "Now linting $DIR ..."
echo
eslint $DIR
echo
read -p "Press enter to continue..."

clear
DIR="test/__routes_apps.js"
echo "Now linting $DIR ..."
echo
eslint $DIR
echo
read -p "Press enter to continue..."

clear
DIR="test/__routes_users.js"
echo "Now linting $DIR ..."
echo
eslint $DIR
echo
read -p "Press enter to continue..."
