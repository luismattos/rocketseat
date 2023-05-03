# Gerenciador de Aplicacoes Node/Express/Mongoose

## MongoDB

### Run MongoDB instance

`sudo mongod --dbpath ~/data/db`

### Install MongoDB in wsl

#### To install MongoDB (version 5.0) on WSL (Ubuntu 20.04):

1. Open your WSL terminal (ie. Ubuntu) and go to your home directory: `cd ~`
2. Update your Ubuntu packages: `sudo apt update`
3. Import the public key used by the MongoDB package management system: `wget -qO - https://www.mongodb.org/static/pgp/server-5.0.asc | sudo apt-key add -`
4. Create a list file for MongoDB: `echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/5.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-5.0.list`
5. Reload local package database: `sudo apt-get update`
6. Install MongoDB packages: `sudo apt-get install -y mongodb-org`
7. Confirm installation and get the version number: `mongod --version`
8. Make a directory to store data: `mkdir -p ~/data/db`
9. Run a Mongo instance: `sudo mongod --dbpath ~/data/db`
10. Check to see that your MongoDB instance is running with: `ps -e | grep 'mongod'`
11. To exit the MongoDB Shell, use the shortcut keys: Ctrl + C

#### Add the init script to start MongoDB as a service

The installation instructions above install a version of MongoDB that doesn't include a script automatically in `/etc/init.d/`. If you would like to use the service commands, you can download the init.d script for mongodb from this source, place that manually as a file at this path: `/etc/init.d/mongodb` and then you can start Mongo as a service using `sudo service mongodb start`.

1. Download the init.d script for MongoDB: `curl https://raw.githubusercontent.com/mongodb/mongo/master/debian/init.d | sudo tee /etc/init.d/mongodb >/dev/null`
2. Assign that script executable permissions: `sudo chmod +x /etc/init.d/mongodb`
3. Now you can use MongoDB service commands:
   - `sudo service mongodb status` for checking the status of your database. You should see a [Fail] response if no database is running.
   - `sudo service mongodb start` to start running your database. You should see a [Ok] response.
   - `sudo service mongodb stop` to stop running your database.
4. Verify that you are connected to the database server with the diagnostic command: `mongo --eval 'db.runCommand({ connectionStatus: 1 })'` This will output the current database version, the server address and port, and the output of the status command. A value of `1` for the "ok" field in the response indicates that the server is working.

## [`crypto`](https://nodejs.org/api/crypto.html#crypto)

The `node:crypto` module provides cryptographic functionality that includes a set of wrappers for OpenSSL's hash, HMAC, cipher, decipher, sign, and verify functions.

`crypto.randomBytes()`

`crypto.scrypt()`
