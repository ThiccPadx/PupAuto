const puppeteer = require('puppeteer');
const { transport, message } = require('./email.config');

exports.browse = async (callback) => {
    console.log('Starting The Browser');
    try {
      const browser = await puppeteer.launch();
      const page = await browser.newPage();
      await page.setViewport({
          width: 1280,
          height: 720
      })
      callback('starting');
    
      // Israel 150, Brazil 145 ->
      console.log('Go to site 150');
      try{
        callback('goToSite');
        await page.goto('https://secure.e-konsulat.gov.pl/Wizyty/Paszportowe/RejestracjaTerminuWizytyPaszportowej.aspx?IDPlacowki=150');

        console.log('Typing...');
        try{
          callback('typing');
          await page.type('#ddlWersjeJezykowe', "Polska");
        } catch(err){
          callback('error');
        }
  
        try {
            await page.waitForSelector('#cp_ctrlDzieci');
            await page.type('#cp_ctrlDzieci', "1");
            
        } catch (error) {
            console.log('Not found!');
            callback('error');
        }
  
        try {
            await page.waitForSelector('#cp_btnZarejestruj', { timeout: 10000 });
            console.log('Now Im going to send you a msg!!!');
            transport.sendMail(message, function(err, info) {
              if (err) {
                console.log(err)
              } else {
                console.log(info);
              }
          });
  
        } catch (error) {
            console.log('Not exists');
            callback('notExists');
        }
        
      } catch(err){
        callback('blocked');
      }
      
      // await page.screenshot({ path: 'page.png' });
      
      await browser.close();
      console.log('Finished task');
      callback('finishTask');
    } catch(err){
      console.log(err);
      callback('errorRunningBrowser')
    }
};