# Layout Laravel-vuejs

![alt text](https://julien-kennel.fr/images/git/table.PNG)

Layout with sidebar for laravel with vuejs (header, sidebar)

- [Laravel installation](#laravel_installation)
- [Auth Installation](#auth_installation)
- [Vuejs Installation](#vuejs_installation)
- [Authentification Configuration](#authentification_configuration)
- [Vuejs Router Installation](#vuejs_router_installation)
- [Modification Htaccess](#modification_htaccess)
- [Components Installation](#installation_composants)


## Laravel installation

Installation Laravel 6 (LTS) (bug-fixes : september 2021 - security fixes : september 2022)

```bash
composer create-project --prefer-dist laravel/laravel NOM_DE_L_APPLICATION "6.*"
```
* php artisan key:generate

## Auth Installation

```bash
composer require laravel/ui "^1.0" --dev

php artisan ui vue --auth
```

## Vuejs Installation

```bash
php artisan ui vue
npm install
```

## Authentification Configuration

* Save the name of the Database in .env

```bash
php artisan optimize:clear
php artisan config:cache
```

=> IMPORTANT : Before migration, go to database -> migrations and modify email in create_users_table and create_password_reset like this :


```php
$table->string('email', 250)
```
```bash
php artisan migrate
```

## Vuejs Router Installation

```bash
npm install vue-router
```

## Modification Htaccess

Copy/paste in .htaccess

```
<IfModule mod_rewrite.c>
    <IfModule mod_negotiation.c>
        Options -MultiViews -Indexes
    </IfModule>

    RewriteEngine On

    # Handle Authorization Header
    RewriteCond %{HTTP:Authorization} .
    RewriteRule .* - [E=HTTP_AUTHORIZATION:%{HTTP:Authorization}]

    # Redirect Trailing Slashes If Not A Folder...
    RewriteCond %{REQUEST_FILENAME} !-d
    RewriteCond %{REQUEST_URI} (.+)/$
    RewriteRule ^ %1 [L,R=301]

    RewriteCond %{REQUEST_FILENAME} !-d
    RewriteCond %{REQUEST_FILENAME} !-f
    RewriteRule ^(/?)(css|js)/([a-z0-9_]*)-v([0-9\.]*)(min\.js|js|css)$ $1$2/$3.$5 [L]

    # Send Requests To Front Controller...
    RewriteCond %{REQUEST_FILENAME} !-d
    RewriteCond %{REQUEST_FILENAME} !-f
    RewriteRule ^ index.php [L]
</IfModule>
```

=> Go to config/app.php and copy/paste this before end of array

```php
'version' => '0.0.1',
```

```bash
php artisan optimize:clear
php artisan config:cache
```


## Components Installation

Copy/paste folder PUBLIC - RESOURCES - ROUTES in your app and replace exists folder

==> IMPORTANT:
```bash
npm run dev
```


ENJOY !