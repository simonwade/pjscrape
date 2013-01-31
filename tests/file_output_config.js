// configuration for file-writing tests
// Writers and loggers can't be set in .addSuite() - they need to be specified in .config():
pjs.config({
    writer: 'file',
    outFile: '/tmp/pjscrape-out.txt'
});