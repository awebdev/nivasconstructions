#!/bin/bash

echo 'Started backup'

mkdir tmp

echo 'Copying files...'
cp -r ~/web/vhosts/default/app ~/web/customadmin/snapshots/tmp
cp ~/web/vhosts/default/server.js ~/web/customadmin/snapshots/tmp

filename="$(date +%Y%m%d).tar.gz"

echo 'tar files...'
tar -czf $filename tmp

rm -rf tmp

echo 'Completed'

