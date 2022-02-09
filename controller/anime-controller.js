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

    searchAnime(data);

    await browser.close();
  } catch (err) {
    console.error(err);
  }
};

async function searchAnime(data) {
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

  console.log(animeresults);
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

    singleAnime(data);

    await browser.close();
  } catch (err) {
    console.error(err);
  }
};

async function singleAnime(data) {
  const $ = cheerio.load(data);
  const listItems = $("#episode_related").children("li");
  listItems.each(function (index, e) {
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

  console.log(singleAnimeResults);
}
