#!/bin/zsh -i

# install node version from .nvmrc
cat $(pwd)/.devcontainer/bashrc-extension >> /home/node/.bashrc

# give good rights
sudo chown node:node node_modules
sudo chown node:node .cache
sudo chown node:node public
