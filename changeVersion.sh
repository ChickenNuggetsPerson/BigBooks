#!/bin/bash

# Prompt user for version
read -p "Enter version number (e.g. 1.0.5): " version

# Create the commit
git commit --allow-empty -m "chore: release $version" -m "Release-As: $version"
