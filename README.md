## Natural Language Understanding

1) Run the following command to update npm version:
   npm install npm@latest -s

2) All packages are needed to be installed are listed in package.json. Run npm install -s, to install and save those packages:
   npm install  -s
   
3) Install the ibm-watson package in your server side using the following command:
   npm install  -s ibm-watson@6.1.1
   
4) Create Natural Language Understanding in IBM Cloud:
<img width="1787" alt="image" src="https://user-images.githubusercontent.com/63970475/218251095-93b77725-f9bd-44b6-8350-df96e2ee3ce1.png">

5) Create new credentials in Natural Language Understanding
<img width="1792" alt="image" src="https://user-images.githubusercontent.com/63970475/218251209-bf19576d-ebdf-4f64-8f72-da19733281a6.png">

6) Copy new credentials ( API key and URL )
<img width="1792" alt="image" src="https://user-images.githubusercontent.com/63970475/218251231-de802a43-99e8-400e-81fb-1266f7118fb8.png">

7) Run npm run-script build. Please note this is customized in package.json to generate and copy the client code to the server.
    
You can type your text inside input box and press 'Analyze sentiment' and you will see reaction like 'negative', 'positive' or 'neutral'
![image](https://user-images.githubusercontent.com/63970475/218251357-41878bf6-0270-42f7-9cd0-042e354d42ea.png)

You can press 'Analyze emotions' and you'll get synonyms to the reaction
![image](https://user-images.githubusercontent.com/63970475/218251403-d98d16af-6249-44ca-aa5b-633da9da62fb.png)

You can also put URL with adress to some article and Natural Language Understanding analyse it for you
![image](https://user-images.githubusercontent.com/63970475/218251442-be376785-6874-4719-97c0-b356bcb224d5.png)
![image](https://user-images.githubusercontent.com/63970475/218251451-3dd44504-4a53-4d36-af9c-9822eed6db96.png)
