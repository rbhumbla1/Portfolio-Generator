const inquirer = require('inquirer');
const fs = require('fs');

function writeHTMLHeader(filename) {

    let header = "";

    let str1 = "<!DOCTYPE html>\n<html lang=\"en\">\n";

    let str2 = "<head>\n<meta charset=\"UTF-8\">\n<meta http-equiv\X-UA-Compatible\" content=\"IE=edge\">\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n<title> Portfolio</title>\n<link rel=\"stylesheet\" href=\"https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css\"/>\n<link rel=\"stylesheet\" href=\"https://use.fontawesome.com/releases/v5.8.1/css/all.css\" integrity=\"sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf\" crossorigin=\"anonymous\"/>\n<link href=\"https://fonts.googleapis.com/css?family=Open+Sans&display=swap\" rel=\"stylesheet\"/>\n<link rel=\"stylesheet\" href=\"./assets/css/style.css\"/>\n</head>\n";

    let str3 = "<body>\n<header class=\"p-5 mb-4 border-5 border-bottom border-dark text-center\">\n<h1 class=\"display-3\">Portfolio</h1>\n</header>\n<div class=\"container-lg m-0 p-0\" id=\"mainContainer\"></div>\n";

    header = str1 + str2 + str3;

    fs.appendFileSync(filename, header, (err) =>
        err ? console.log(err) : console.log('Header success!')
    );
}

function writeHTMLContent(filename, data){
    let content = `<h2 class="display-3 px-5"><b>Name:</b>${data.name}</h2>\n
    <h2 class="display-3 px-5"><b>Location:</b>${data.location}</h2>\n
    <h2 class="display-3 px-5"><b>Biodata:</b> ${data.bio}</h2>\n
    <h2 class="display-3 px-5"><b>LinkedIn:</b>${data.linkedinurl}</h2>\n
    <h2 class="display-3 px-5"><b>Github</b> ${data.githuburl}</h2>\n`;


    fs.appendFileSync(filename, content, (err) =>
        err ? console.log(err) : console.log('Header success!')
    );

}

function writeHTMLFooter(filename){
    let footer = "</div>\n<script src=\"https://code.jquery.com/jquery-3.4.1.min.js\"></script>\n<script src=\"https://cdn.jsdelivr.net/npm/dayjs@1.11.3/dayjs.min.js\" integrity=\"sha256-iu/zLUB+QgISXBLCW/mcDi/rnf4m4uEDO0wauy76x7U=\" crossorigin=\"anonymous\"></script>\n<script src=\"./assets/js/script.js\"></script>\n</body>\n</html>";


    fs.appendFileSync(filename, footer, (err) =>
        err ? console.log(err) : console.log('Header success!')
    );

    
}


inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?',
        },
        {
            type: 'input',
            name: 'location',
            message: 'Where are you located?',
        },
        {
            type: 'input',
            name: 'bio',
            message: 'Please summarize your expereince in few lines:',
        },
        {
            type: 'input',
            name: 'linkedinurl',
            message: 'Please provideyorlinkedIn URL:',
        },
        {
            type: 'input',
            name: 'githuburl',
            message: 'Please provide your GitHub URL:',
        },
    ])
    .then((data) => {
        const filename = `index.html`;

        fs.writeFile(filename, "<!--This file is generator by Node.js-->\n", (err) =>
            err ? console.log(err) : console.log('Success!')
        );

        writeHTMLHeader(filename);

        writeHTMLContent(filename, data);

        writeHTMLFooter(filename);

    });
