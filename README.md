# Test Technique
*Utiliser Laravel et Angular pour créer un blog*
## Sujet
### Objectif
Ce test vise à créer une liste d'articles de blog stockés dans une base de données avec la contrainte d'utilisation des frameworks suivants :
- Angular 9
- Laravel 6/7
  
Pour modèle, on prendra la page de blog de Digital Ocean : https://blog.digitalocean.com/
  
### De quoi se compose un article de blog ?
Dans ce test, un article de blog sera composé des éléments suivants :
- un titre
- un auteur
- une date
- un corps de texte 
- une image
### Comment communiquent Angular et la BDD ?
Angular doit communiquer avec la BDD grâce à une API REST développée avec Laravel. On mettra en place un endpoint /articles qui renverra une réponse de ce type :
``` JSON
[  
  {  
    "id": 1,  
    "title": "It's all about the bandwidth: why many network-intensive services run on DigitalOcean",  
    "author": "Ryan Pollock",  
    "date": "19832784783",  
    "content": "For many developers, network transfer is something of an afterthought. While you undoubtedly spend a great deal of time developing your application, cloud computing means you don’t have to build network infrastructure to connect your application to the Internet. These days, you sort of take a high-speed Internet connection…",  
    "image": "https://assets.digitalocean.com/ghost/2020/04/5_Deliverables_Social-Media_Twitter_Twitter_graphic.png"  
  },  
	...  
]  
```

### Bonus : créer la page de détail de l'article
Si le temps le permet, il sera apprécié de disposer de la page de détail de l'article accessible via un lien "Voir la suite de l'article" dans la page de listing. Un autre endpoint : /articles/{id} sera alors nécessaire pour aller chercher les infos de cet article.

## Téléchargement

``` bash
git clone https://github.com/manki23/test_technique ; cd test_technique
```
