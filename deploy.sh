#!/bin/bash

echo "Start deploy"
cd /var/www/chat
git pull
cd /var/www/chat/src-client
ng build --prod=true
rm -rf /var/www/chat/client
mv /var/www/chat/src-client/dist /var/www/chat/client
echo "Deploy end"
