#!/usr/bin/env bash

cd ${1}

echo " ~> [hooks\pre-checkout.sh] on [${1}, ${2}]"

docker compose down
