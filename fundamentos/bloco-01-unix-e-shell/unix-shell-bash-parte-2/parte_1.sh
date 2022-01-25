#!bin/sh
#Criando um novo diretório
mkdir unix_tests

#Acessando o diretório
cd unix_tests

#criando um novo arquivo e adicionando linhas
touch skills2.txt

echo -e "Internet\nUnix\nBash" >> skills2.txt

#escrever mais 5 linhas
echo -e "Html\nCSS\nJavascript\nSoft Skills\nJava">> skills2.txt

#contar linhas do arquivo

wc -l skills2.txt

#criar um arquivo que representa as três primeiras linhas em ordem alfabética.
sort < skills2.txt |head -n 3| cat >> top_skills.txt

#continua...