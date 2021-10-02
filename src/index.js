const axios=require("axios")
const cheerio=require("cheerio")
const express=require("express")




const app=express()//gives the option to use all the express functoins


const url='https://www.ynet.co.il/home/0,7340,L-8,00.html'

//gets the data from the url
axios(url).then(res=> 
    {
        const test=[]
        const html=res.data
        // console.log(html);
        const $=cheerio.load(html)//loads the data so we can pick elements from it
        $('.slotTitle',html).each(function () {
           const titel= $(this).text()
            const link=$(this).find('a').attr('href')
            test.push({titel,link})
             
        console.log(test);
        }) 
    }).catch(err=>console.log(err))

const port=8100
app.listen(port,()=>{console.log(`the server is up and running (${port})`);})