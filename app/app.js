http://www.mashape.com/apis/Airbnb
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var xhr = new XMLHttpRequest();
var username = process.argv[2]

function getGithubUser(username) {

    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api.github.com/users/"+ username, false);
    xhr.send();
    if (xhr.status === 200) {
        console.log(xhr.responseText)
    } else {
        console.log("An error occured. Username does not exist")
    }

};

getGithubUser(username)