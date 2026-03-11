const https = require('https');
const fs = require('fs');

const download = (url, dest) => {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, (response) => {
      if (response.statusCode >= 300 && response.statusCode < 400 && response.headers.location) {
          https.get(response.headers.location, (res) => {
              res.pipe(file);
              file.on('finish', () => file.close(resolve));
          });
      } else {
          response.pipe(file);
          file.on('finish', () => file.close(resolve));
      }
    }).on('error', (err) => {
      fs.unlink(dest, () => reject(err));
    });
  });
};

const icons = {
  hibernate: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/hibernate/hibernate-original.svg',
  javascript: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  eclipse: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/eclipse/eclipse-original.svg',
  vscode: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg',
  git: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
  github: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
  tomcat: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tomcat/tomcat-original.svg',
  mysql: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
  figma: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
  vercel: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg',
  servlets: 'https://placehold.co/300x300/FFFFFF/000000/svg?text=Servlets',
  jsp: 'https://placehold.co/300x300/FFFFFF/000000/svg?text=JSP',
  jdbc: 'https://placehold.co/300x300/FFFFFF/000000/svg?text=JDBC',
  rest: 'https://placehold.co/300x300/FFFFFF/000000/svg?text=REST+APIs',
  oop: 'https://placehold.co/300x300/FFFFFF/000000/svg?text=OOP',
  datastructures: 'https://placehold.co/300x300/FFFFFF/000000/svg?text=Data+Struct',
  algorithms: 'https://placehold.co/300x300/FFFFFF/000000/svg?text=Algorithms'
};

Promise.all(Object.entries(icons).map(([name, url]) => download(url, `public/images/${name}.svg`)))
  .then(() => console.log('Downloaded all extra icons'))
  .catch(err => console.error('Error downloading icons', err));
