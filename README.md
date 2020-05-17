# Example Site - APIs and UIs

We can keep APIs and UIs in sync by having the APIs be part of the same repo. Serverless functions are handy for that.


## Local development

To work on this project locally and explore the code:

```bash
# clone the code repository
git clone git@github.com:philhawksworth/example-api-and-ui.git

# move into the project directory
cd example-api-and-ui

# install the dependencies
npm install

# install the Netlify CLI for local serverless functions
npm install -g netlify-cli

# run the build with netlify dev
# and find the local site at http://localhost:8888
netlify dev

```


### Speedy bootstrap

 To quickly experiment with this example, you can click the button below. Clicking the button will clone <a href="https://github.com/philhawksworth/example-api-and-ui">this site repo</a>, setup a new site <a href="https://netlify.com">on Netlify</a> and deploy the site complete with Netlify's CI/CD pipeline configured and operational.

 [![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/philhawksworth/example-api-and-ui)

