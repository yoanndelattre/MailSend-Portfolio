# MailSend
&nbsp;

## Continuous Integration Status Badge with CircleCi on ```master``` branch :

[![CircleCI](https://circleci.com/gh/yoanndelattre/MailSend-Portfolio.svg?style=svg)](https://circleci.com/gh/yoanndelattre/MailSend-Portfolio)

&nbsp;  
&nbsp;


## Branch Method :

&nbsp;

### Structure :
*```"type"/"target"```*

### Example :
```feature/ClientMail```

&nbsp;

#### For ```"type"``` :

* *```dev```* : For the general development of the application (this branch will be created to gather all the changes of the "feature" branch).

* *```feature```* : For the development of a new feature.


#### For ```"target"``` :

* Name of the new feature or bug name resolved (```feature/InfoMail```).

&nbsp;
&nbsp;


## Commit Method :

&nbsp;

### Structure :
*```"type"("scope"):"subject"```*  
*```("issues")```*

### Example :
```feat(InfoMail):add info in client mail```  
```Fixes #45```

&nbsp;

#### For ```"type"``` :

* ```docs``` : Modification of the documentation (for example modification of the file *README<i></i>.md*) .

* ```feat``` : Adding a new feature .

* ```fix``` : Bug fix .

* ```simplification``` : Simplification of a method or code in general .

* ```test``` : Change test strategy .

* ```refactor``` : Change of the code which does not change the functioning (for example delete of spaces) .

* ```issue``` : Github issue.


#### For ```"scope"``` (optional) :

* ```MailAdmin```

* ```MailClientFR```

* ```MailClientUS```

* ```GCP``` *(Strategy of deployment on Google Gloud Platfrom with Cloud Run) .*

* ```Docker``` *(Docker environment) .*

* ```Config``` : *(Modification of the config files) .*

* ```Github``` : *(Modification of configuration files for the Github repository) .*

* ```SEO``` : *(SEO improvement) .*


#### For ```"subject"``` :

* Explanation of the modifications made *(short sentence in English).*


#### For ```"issues"``` (optional) :

* names of closed issues on GitHub.