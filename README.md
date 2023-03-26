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
<img width="839" alt="image" src="https://user-images.githubusercontent.com/63970475/227801770-30d26366-ff54-4684-a62d-a93e5b766fa6.png">

You can press 'Analyze emotions' and you'll get synonyms to the reaction
<img width="852" alt="image" src="https://user-images.githubusercontent.com/63970475/227801677-5b33ab4a-b9bb-44be-a7d9-1a2faad53ea6.png">

You can also put URL with adress to some article and Natural Language Understanding analyse it for you
<img width="809" alt="image" src="https://user-images.githubusercontent.com/63970475/227801721-85518064-2f81-4d07-929f-3921e1c037c0.png">
<img width="865" alt="image" src="https://user-images.githubusercontent.com/63970475/227801733-d75dbc98-4ac5-4063-9068-35bf14f389f9.png">
