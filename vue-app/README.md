# TDD Practice - Vue

## Project setup

### Install
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Runs test
```
npm run test:unit
```

## Tasks

### Getting the data ready

#### Create a client which fetches an API as follows
```
  Uses standard JWT authentication (service name is 'coding-dojo')
  We want to use the client for multiple requests, so cache the token
  URL: https://www.coding-dojo.gservice.emarsys.net/
  Use axios for network requests
  
  Methods:
 - getCodingDojos(): Promise<Dojo[]>
       Dojo: { id: number, name: String, date: Date, description: String }     
       URL: GET /dojo
       
 - subscribeToDjo(userId: number): Promise<void>
      URL: POST /dojo/:dojo-id/subscribe
      post param: { userId }      
```

#### Fetch data on app loading and save it to the store
```
Use the previously written client and load the data to the store on app loading
```

### Using the data

#### Display the fetched dojos in a visually pleasing way 
(I'll shamelessly steal it because I'm bad at creating UIs without UX)
```
Some idea: https://wireframe.cc/UKuvta
Use the previously written client and load the data to the store on app loading
```

#### Make it possible to subscribe to Dojos with the press of a button
```
When you want to subscribe you need to input your user id in some way (no validation needed)
Send the subscription request with the client
```


### Some nice test data
```
/dojo response
[
{id: 1, name: 'First Coding Dojo', date: '2021-09-17', description: 'Really nice coding dojo for beginners'},
{id: 2, name: 'eXtreme Coding Dojo', date: '2021-09-22', description: 'Most likely you wont event solve the first task'},
{id: 3, name: 'Enterprise Coding Dojo', date: '2021-09-27', description: 'From the best engineers to the best engineers or something like that'},
{id: 4, name: 'Secret Enterprise Coding Dojo', date: '2021-09-28', description: 'Really secret description, also Im running out of time and creativity'}
]
```

