#!/usr/bin/env node

const program = require('commander');
let pkg = require('./package');

let = urlValue = undefined;
program
  .version(pkg.version)
  .description(pkg.description)
  .usage('link-check <url>')
  .arguments('<url>')
  .action(function(url){
    urlValue = url;
  });
program.parse(process.argv);
if(typeof urlValue === 'undefined'){
  console.error(program.usage());
  process.exit(1);
}
const linkCheck = require('link-check');
linkCheck(urlValue, (err, result)  => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(`${result.link} is ${result.status}`);
});
