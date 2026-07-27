#!/bin/bash

for i in ./*.{png,jpg,jpeg}; do
  [ -e "$i" ] || continue  # Skip if no matching files are found
  cwebp "$i" -q 70 -o "${i%.*}.webp"
done