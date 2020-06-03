# NOTE-Taker

  ## Description
  
  This project is an application that can be used to write, save and delete notes. This application uses express backend to save and retrieve note data from a JSON file. 

  ## User Story

 ```
AS A user, I want to be able to write and save notes

I WANT to be able to delete notes I've written before

SO THAT I can organize my thoughts and keep track of tasks I need to complete
 ```

  ## Table Of Contents
  
  * [Installation](#installation)
  
  * [Usage](#usage)
  
  * [Demo of Application](#demo-of-application)
  
  * [Questions](#questions)
  
  ## Installation
  
  To install necessary dependencies, run the following command:
  
  ```
  npm i
  ```
  Once dependencies are installed, the application is ready to run. 


  ## Usage

  To run the application from the command line please run the following command:

  ```
  node server.js
  ``` 
  
  Following the command, the user will be instructed to answer questions regarding their team.

  ![Command line questions preview](Assets/questions-preview.png)

  
  Once the user has submitted information on all employees, the data input is written in the generate HTML file and the user is notifed.

  ![Generated HTML preview](Assets/success-preview.png)
  

  The user can now view the generated HTML in the output directory:

  ```
  $ cd output/
  $ code .
  ``` 

  The following is an example of HTML in browser:

  ![HTML in browswer preview](Assets/HTML-preview.png)




  ## Demo of Application
  ![Command line questions Preview](Assets/command-line-preview.gif)

  *demo of command to run application and generated questions*

  ![Generated HTML Preview](Assets/html-preview.gif)
  
  *demo of generated HTML from command line*


  ## Questions
  
  If you have any questions about this project, please contact ashleydeyoung at ashley.d.deyoung@gmail.com.