# EightTen-Survey-Frontend

### <a name="contents"></a> Contents

[Project Planning Board](#project-planning-board)\
[Wire Frame](#wire-frame)\
[ERD](#erd)\
[Style Guide](#style-guide)\
[Server Routes](#server-routes)\
[Front End Routes](#front-end-routes)\
[Components](#components)\
[Technologies Used](#technologies-used)\

## <a name="project-planning-board"></a> Project Planning Board
[Contents](#contents)

https://trello.com/b/iKFpuvPu/eightten-capstone-project

## <a name="wire-frame"></a> Wire Frame
[Contents](#contents)

![admin_wire](/810/admin_wire.png)

![client_wire](/810/client_wire.png)

## <a name="erd"></a> ERD
[Contents](#contents)

https://www.lucidchart.com/documents/edit/3c9d9ef1-8af0-4a95-89fe-846ac42614e4/0?shared=true

![eight_ten_erd](/810/eight_ten_erd.png)


## <a name="style-guide"></a> Style Guide
[Contents](#contents)

![eight_ten_logo](/810/eight_ten_logo.png)

![eight_ten_palette](/810/eight_ten_palette.png)

![random_grey_variations](/810/random_grey_variations.png)

```
<link href="https://fonts.googleapis.com/css?family=Raleway" rel="stylesheet">

```

## <a name="server-routes"></a> Server Route Planning
[Contents](#contents)

```
Admin Specific Routes:
    - User login (GET): /API/users/login
        - All survey & client info returned
    - GET company score by traits: /API/client/:id
        - Return all client data by ID
    - GET company data pertaining to a particular trait: /API/client/:id/:trait
    - GET surveys: survey
    - POST new question: /API/survey/:id/questions
    - PUT edit question: /API/survey/:id/questions/:id
    - DELETE a question: /API/survey/:id/questions/:id
        - ** marks a value or “archives”
    - GET all trait data: /API/traits
    - PUT change trait response: /API/traits/:id

Client (Users) Specific Routes:
    - Client login (POST): /API/client
    - Client signup (POST): /API/client
    - Client survey setup (GET): /API/questions
    - Save question response (POST): /API/client:/:id/:question_id
    - Retrieve client’s survey results: (GET): /API/client/:id/:survey_id
```

## <a name="front-end-routes"></a> Front End Route Planning
[Contents](#contents)

```
Admin:
  - /login
  - /companies
  - /surveys
  - /traits

Client:
  - /login
  - /results
  ```

## <a name="components"></a> Component Planning
[Contents](#contents)

```
[*General*]
<App/>
<List/> —> Clients, Traits, Surveys, Companies

[*Admin Components*]
<AdminLoginForm/>
<CTSView/> —> Overall view for Client, Trait, Survey pages
<EditTrait/> —> Trait editing view
<CompanyView/> —> <List/> of company’s traits and scores
<SurveyView/>
<SpecificQuestionView/> —> Specific data about a particular question response
<CompanyTraitView/> —> Specific data about a company’s particular trait
<NewQuestionView/>

[*Client Components*]
<ClientLoginForm/>
<ClientIntakeForm/>
<SurveyQuestionView/>
<ClientResultView/>
<TraitResult/>
```

##  <a name="technologies-used"></a> Technologies Used
[Contents](#contents)

- React
- Redux
- React-Materialize
- React-Router
- Moment
