Hello and welcome to the first of what I hope to be many AngularJS Learning sessions. Throughout these sessions, I'm hoping to record the many lessons I learn while getting familiar with AngularJS.

In this session, we are just going to be configuring the boiler plate for the template we will be using throughout the rest of the sessions. While I'm using visual studio as my html editor, my goal is to run these sessions so that people on any platform can follow along. With that in mind, what we will be doing in this session is installing bower and grunt so that we can download and configure the dependencies for our project. In order to install these components, though, it is assumed that NodeJS is already installed on your computer.

Let's get started.

In order to install bower, we need to be in a terminal window and type npm install -g bower. You can see I'm using the command line switch of -g to install this globally since I plan on using bower on more than just this project.

Next, we will need to install the command line interface for grunt. This will allow us to run grunt commands from the command line, so again I'm going to install this globally by typing npm install -g grunt-cli

Finally, we will be installing grunt and grunt bower task at the project level. I found out that grunt itself can't be installed globally anymore, so that is why we are installing in at this level even though we will most likely use it on more projects than just this one. To install these utilities, we will need to create a package.json file, which is a file that is used by nodejs and it's packaging system to install local project dependencies.

```
{  
  "name": "AngularJSSite",  
  "version": "0.0.0",  
  "devDependencies": {  
    "grunt": "~0.4.5",  
    "grunt-bower-task": "^0.4.0"  
  }  
}  
```

In order to now install these dependencies, we just need to run npm install from the same location where this package.json file lives. In my case, this is in the same directory as the solution of my project.

Now that we have tools installed, we can finally get to installing our actual dependency files that we care about. To start out with, we will be installing bootstrap, angularjs and angularjs-bootstrap. I prefer to use the angularjs-bootstrap project since it eliminates us from having to install jquery. I love jquery, but I feel that if the only reason I'm including it is so that I can use bootstrap, it feels like unnecessary overhead. To install these three packages via bower, we need to run:

bower install bootstrap  
bower install angular#1.3.0  
bower install angular-bootstrap  

This is great, but this won't get our dependencies to the proper location in our project file, so we need to add a bower.json that we can execute to do our lifting for us. In order to create this .json file, we will run bower init, accept the defaults, and then add this file to our solution. We need to copy the following rules into the newly created json file so that bower knows what we want it to do with the assets we downloaded earlier.

```
"exportsOverride": {  
        "jquery": { },  
        "bootstrap": {  
            "styles": [ "dist/css/bootstrap.css", "dist/css/bootstrap.min.css" ],  
            "fonts": "dist/fonts/*.*"  
        },  
        "angular": {  
            "Scripts": [ "angular.js", "angular.min.js" ]  
        },  
        "angular-bootstrap": {  
            "Scripts": [ "ui-bootstrap.min.js", "ui-bootstrap.js" ]  
        }  
    }  
```

We also now need to create a file called gruntfile.js that will be invoked when we run our grunt command. This file is created manually and needs to contain the following lines:

```
module.exports = function (grunt) {  
    grunt.config.set('bower', {  
        install: {  
            options: {  
                targetDir: './AngularJSSite'  
            }  
        }  
    });  
    grunt.loadNpmTasks('grunt-bower-task');  
};  
```

Together, the gruntfile.js and the bower.json file will copy the assets to the proper locations within our project directory. The targetDir in the gruntfile.js file tells the system what our "default root" directory should be for where we want the assets copied. The individual entries in the bower.json file say that when you find the bower component with this name, here is where I want you to copy the specified files. In my case, I want to copy all the javascript files to a scripts directory, I want the css to live in the styles directory, and I want to copy the fonts off to a fonts directory and these directories should be created as subdirectories under a directory named AngularJSSite

Lets run grunt bower:install and see what happens. As you can see the directories were created and the files were copied into them, so now we just need to tell visual studio to include them in our project (of course if you are not using visual studio, you won't need to perform this step).

To make sure we have things configured properly, let's create an html file and verify everything is where it needs to be. This file will have elements in it that look foreign to you if you have never used AngularJS before, but that is ok, we will be going over these elements in a future recording.

Ok, good, things look like they are configured correctly and we have a working site to build off of now. I hope to see you in a future recording where we actually dig into "what is angular"