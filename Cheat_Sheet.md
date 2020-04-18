# Cheat Sheet
## Laravel Installation
### Install Composer
``` sh
php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');"
php -r "if (hash_file('sha384', 'composer-setup.php') === 'e0012edf3e80b6978849f5eff0d4b4e4c79ff1609dd1e613307e16318854d24ae64f26d17af3ef0bf7cfb710ca74755a') { echo 'Installer verified'; } else { echo 'Installer corrupt'; unlink('composer-setup.php'); } echo PHP_EOL;"
php composer-setup.php
php -r "unlink('composer-setup.php');"
mv composer.phar /usr/local/bin/composer
```
### Install Laravel
``` bash
composer global require "laravel/installer=~1.1"
PATH="/Users/myriam/.composer/vendor/bin:$PATH"
```
to fix ***RuntimeException The Zip PHP extension is not installed***
``` bash
brew update
brew install php@7.3
brew link php@7.3
brew link php@7.3 --force
```
finally do :
``` bash
composer global update
laravel new
```
### Configuration
...
