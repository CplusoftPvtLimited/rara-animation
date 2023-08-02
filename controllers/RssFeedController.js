const express = require('express');
let Parser = require('rss-parser');
let parser = new Parser();

const getAllNews = async (req,res) => {
    try {
    let feedUrl = "https://search.cnbc.com/rs/search/combinedcms/view.xml?partnerId=wrss01&id=10000664"
    const feed = await parser.parseURL(feedUrl);
    feed.items.sort((a, b) => new Date(b.pubDate) - new Date(a.pubDate));
    res.json({ title: feed.title, items: feed.items });
} catch (error){
    console.error('Error fetching and parsing news:', error);
    res.status(500).json({ error: 'Error fetching and parsing news' });
}
}

module.exports = {
    getAllNews
}