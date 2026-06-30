#!/usr/bin/env bash

cd ${1}

echo " ~> [hooks\post-checkout.sh] on [${1}, ${2}]"

docker compose up -d --remove-orphans
