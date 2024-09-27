const express = require("express");
const fetch = require("node-fetch");

const app = express();

app.use(express.json());

app.get("/ig-posts", async (req, res) => {
  try {
    const TOKEN = "ae4504abcc2577c1f98227e337aee588";
    const url = `https://graph.instagram.com/v12.0/me/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink,timestamp&access_token=${TOKEN}`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Instagram API Error: ${response.statusText}`);
    }

    const data = await response.json();
    res.json(data.data);
  } catch (error) {
    console.error("Error fetching Instagram posts:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
