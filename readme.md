

# steevanime_api

SteevAnime_api is a webscraped api used to help users stream and download anime without ads.




## Appendix

Please note this project is for educational purposes only.


## Badges

[![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://github.com/tterb/atomic-design-ui/blob/master/LICENSEs)

## Color Reference

| Color             | Hex                                                                |
| ----------------- | ------------------------------------------------------------------ |
| Text | ![#00b48a](https://via.placeholder.com/10/00b48a?text=+) #00b48a |


## Tech Stack

**Server:** NodeJS, ExpressJS, [Cheerio](https://www.npmjs.com/package/cheerio), [Puppeteer](https://www.npmjs.com/package/puppeteer)


## Installation

Install steevanime_api with npm

```bash
  git clone https://github.com/Stephen-Ehiabhi/steevanime_api.git
  cd steevanime_api
  npm install
  npm run dev (to run the server)
  
  -- please note that you to have Node.js and npm installed to your computer to make the project run successfully 
```

## Endpoints

```
GET: /api/v1/search?name={nameofanime} 
--To search for anime

GET: /api/v1/single?id={titleofanime}  
--To get a single anime

```
    
## Authors

- [@steevgr3y](https://www.github.com/stephenehiabhi)


## Contributing

Contributions are always welcome!



## Feedback

If you have any feedback, please reach out to us at stephenehiabhi@gmail.com