#!/bin/bash

alias npm-exec='PATH=$(npm bin):$PATH'
npm-exec gulp build:watch
