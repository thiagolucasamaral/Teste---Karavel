# Teste---Karavel
Teste - Karavel - Front-end

// COLOCAR O PROJETO EM UM SERVIDOR LOCAL WAMP/XAMP. (UTILIZEI O WAMP);
// ALTERAR OS ARQUIVOS VHOSTS(ESSE ARQUIVO CONFIGURA DENTRO DO WAMP(MODELO ABAIXO)) E HOSTS DO WINDOWS

CAMINHO DO WAMP // C:\wamp64\bin\apache\apache2.4.37\conf\extra\HTTPD-VHOSTS.CONF


<VirtualHost *:80>
  ServerName teste
  ServerAlias teste
  DocumentRoot "c:/wamp64/www/teste/public"
  <Directory "c:/wamp64/www/teste/public">
    Options +Indexes +Includes +FollowSymLinks +MultiViews
    AllowOverride All
    Require local
  </Directory>
</VirtualHost>

COLOCAR BLOCO ACIMA NO ARQUIVO



CAMINHO DO WINDOWS // C:\Windows\System32\drivers\etc\HOSTS

INSERIR 

127.0.0.1 teste