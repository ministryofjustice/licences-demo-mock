# licences-demo-mock
Nomis mocks for the licences service built in node

# Get Started

1. Install the dependencies required to run the service:

  ```
  $ npm install
  ```  

2. Start the server

  ```   
  $ npm run start
  
  application will run on port 9090
  
  ```   

# Building and pushing docker image

1. Build the image locally
```
docker build -t mojdigitalstudio/licences-nomis-mocks:latest .
```
2. Push the image to the docker repo
```
docker push mojdigitalstudio/licences-nomis-mocks:latest
```
