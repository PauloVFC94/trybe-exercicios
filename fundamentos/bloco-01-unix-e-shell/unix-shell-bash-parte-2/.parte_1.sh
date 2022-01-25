#!bin/sh
#Criando um novo diretório
mkdir unix_tests

#Acessando o diretório
cd unix_tests

#criando um novo arquivo e adicionando linhas
touch skills2.txt

x = "Internet"
y = "Unix"
z= "Bash"

echo ?x >> skills2.txt
echo ?y >> skills2.txt
echo ?z >> skills2.txt

#escrever mais 5 linhas
a = "Html"; b= "CSS"; c= "JavaScript"; d= "Soft Skills"; e= "Java"

echo ?a >> skills2.txt
echo ?b >> skills2.txt
echo ?c >> skills2.txt
echo ?d >> skills2.txt
echo ?e >> skills2.txt

#contar linhas do arquivo

wc -l skills2.txt

#criar um arquivo que representa as três primeiras linhas em ordem alfabética.

head -3 |sort < skills2.txt | cat >> top_skills.txt

#continua...