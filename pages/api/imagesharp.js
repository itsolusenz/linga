
import got from "got";
const sharp = require('sharp');
var url = require('url');

export default function handler(req, res) {
    const queryParams = url.parse(req.url, true).query;
    const getimgurl = queryParams['sharpimg'];
    const getviewtype = queryParams['viewtype'];
    const getimgwidth = queryParams['width'];
    const getimgheight = queryParams['height'];
    // console.log('ress33', getimgheight);
    let resizedPhoto;
    function get_url_extension(url) {
        return url.split(/[#?]/)[0].split('.').pop().trim();
    }
    // console.log('yesssssssss');
    (async function () {
        //let url = "https://www.laabamone.com/LingaChemicals/images/item/64/16969330631163217857.png";


        let buffer = '';
        if (getviewtype == 'server') {
            const fimg = got(getimgurl);
            const fimgb = fimg.buffer();
            [buffer] = await Promise.all([fimgb]);
        }
        else {
            buffer = getimgurl;
        }

        // console.log("shar", buffer)
        /*  .then(response => {
              console.log(response.body)
              response.status(200).json({ message: response.body })
          }
          )
          .catch(error => console.log(error.response.body));*/
        /*  const fimg = await fetch(url)
          const fimgb = await fimg.buffer()
          //const s = await sharp(fimgb)
          // let imageBuffer = await fetch(url).buffer();*/
        //  await sharp(fimgb).toFile("pages/api/ed.jpg");
        const ext = get_url_extension(getimgurl);
        if (ext == 'gif') {
            console.log('yessssssssssss');
            await sharp(buffer, { animated: true })
                .resize({ width: Number(getimgwidth), height: Number(getimgheight), fit: 'contain', background: 'white' })
                .gif({ dither: 0 })
                .toBuffer()
                .then((data) => {
                    // console.log('dataaaaaaaa', data);
                    resizedPhoto = data.toString('base64');
                    // console.log('resizedPhoto', resizedPhoto);
                    res.status(200).json({ message: resizedPhoto })


                })
                .catch((err) => {
                    res.status(200).json({ message: err })
                    //return err;
                })
        }
        else {
            await sharp(buffer)
                .webp({ lossless: true, smartSubsample: true })
                .resize({ width: Number(getimgwidth), height: Number(getimgheight), fit: 'contain', background: 'white' })
                .toBuffer()
                .then((data) => {
                    // console.log('dataaaaaaaa', data);
                    resizedPhoto = data.toString('base64');
                    res.status(200).json({ message: resizedPhoto })


                })
                .catch((err) => {
                    res.status(200).json({ message: err })
                    //return err;
                })
        }


    })();



}



// sharp12;




