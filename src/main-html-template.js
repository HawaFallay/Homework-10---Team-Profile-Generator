
generateHtml = (managerBox, engineerBox, internBox) => {
    let htmlTemp = `<!DOCTYPE html>
   <html lang="en">
   <head>
       <meta charset="UTF-8">
       <meta http-equiv="X-UA-Compatible" content="IE=edge">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossorigin="anonymous">
       <link rel="stylesheet" href="styles.css">
       <title>Employees</title>
   <head>
   <body>
       <header>
           <h1 class="header">My Team</h1>
       </header>
       <div class="flex-container">
           ${managerBox}
           ${engineerBox}
           ${internBox}
       </div>
   </body>
   </html>`
   return htmlTemp;
   };
   
   module.exports = generateHtml;
   