
#!bin/sh
#criando um novo diretório
mkdir unix_tests

#Acessando o novo diretório
cd unix_tests

#Criando um novo arquivo
touch trybe.txt

#Copiando um arquivo e renomeando
cp trybe.txt trybe_backup.txt

#Renomeando o arquivo
mv trybe.txt novonome.txt

#Criando um novo diretório
mkdir backup

#Movendo arquivo para o novo diretório
mv trybe_backup.txt backup

#Criando um novo diretório
mkdir backup2

#movendo arquivo de backup para backup2
mv backup/trybe_backup.txt backup2

#Apagando o diretorio backup
rmdir backup

#Renomeando diretório
mv backup2 backup

#Verificando qual o path completo do diretório atual e seus itens
pwd

ls

#removendo o diretório backup
rm -rf backup


