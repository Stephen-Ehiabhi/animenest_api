const cheerio = require("cheerio");
const puppeteer = require("puppeteer");
const CronJob = require("cron").CronJob;
const pretty = require("pretty");

//array of all the searched anime
const animeresults = [];
const singleAnimeResults = [];

exports.search = async (req, res) => {
  const url = "https://gogoanime.mom/search/?keyword=";

  //fetch the HTMl of the page
  try {
    const browser = await puppeteer.launch();
    const [page] = await browser.pages();

    await page.goto(`${url}${req.query.name}`, { waitUntil: "networkidle0" });
    const data = await page.evaluate(
      () => document.querySelector("*").outerHTML
    );

    searchAnime(data, res);

    await browser.close();
  } catch (err) {
    res.status(200).json({ message: "error", err });
  }
};

async function searchAnime(data, res) {
  const $ = cheerio.load(data);
  const listItems = $(".items").children("li");
  // console.log(pretty(listItems.html()));
  listItems.each(function (index, e) {
    const $element = $(e);
    const image = $element.find(".img img").attr("src");
    const name = $element.find(".name a").attr("title");
    const $title = $element.find(".name a").attr("href");
    var title = $title.substring(28);
    title = title.replace("/", "");

    const anime = {
      image,
      name,
      title,
    };

    animeresults.push(anime);
  });

  res.status(200).json({ message: "success", animeresults });
}

//single anime controller
exports.singleAnime = async (req, res) => {
  const url = "https://gogoanime.mom/movie/";
  //  const streamLink = $("iframe").attr("src");
  try {
    const browser = await puppeteer.launch();
    const [page] = await browser.pages();

    await page.goto(`${url}${req.query.id}`, { waitUntil: "networkidle0" });
    const data = await page.evaluate(
      () => document.querySelector("*").outerHTML
    );

    singleAnime(data, res);

    await browser.close();
  } catch (err) {
    res.status(200).json({ message: "error", err });
  }
};

async function singleAnime(data, res) {
  const $ = cheerio.load(data);
  const listItems = $("#episode_related").children("li");
  const listPage = $("#episode_page").children("li");
  
  //pagination page
  listPage.each(function (index, e) {
    let i = 0;
    if (index == i) {
    }
    i++;
    console.log(i);
    //const $element = e[index].addClass("active");
    const act = $(".active").text();
  });

  /*listItems.each(function (index, e) {
    const $element = $(e);
    const EP = $element.find(".each_episode").attr("data-order");
    const category = $element.find(".cate").text();
    const link = $element.find(".each_episode").attr("data-src");
    const singleAnime = {
      EP,
      category,
      link,
    };
    singleAnimeResults.push(singleAnime);
  });

  //res.downlo

  res.status(200).json({
    message: "success",
    singleAnimeResults,
  });*/
}
