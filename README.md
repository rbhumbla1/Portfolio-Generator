# Portfolio-Generator

This project builds a command-line tool that generates an HTML portfolio page from user input.

## Description

* The application prompts the user for information like their name, location, bio, LinkedIn URL, and GitHub URL. 

* An HTML document containing the information collected from the prompts is constructed and written to the file system. 

* CSS styling is added to the document.

* The project used the  following tools and technologies to accomplish this:

  * `fs` for writing to the file system

  * `inquirer` version 8.2.4 for collecting user input

  * String template literals for generating a string version of the HTML document before it is written to the file system

  ## Usage

  * Run the application: node index.js
  * you should see [name].html file with the information provided to the application.