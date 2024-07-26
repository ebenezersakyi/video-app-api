const express = require("express");
const router = express.Router();
const { default: axios } = require("axios");
const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

router.post("/generate-story", async (req, res) => {
  const { movieDetails } = req.body;

  try {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const chat = model.startChat({
      history: [],
    });

    const msg = `Write a comprehensive, detailed story based on the provided movie details: ${JSON.stringify(
      movieDetails
    )}. Write it in plain text and no formating and no sections.`;

    const result = await chat.sendMessage(msg);
    const response = await result.response;
    const text = response.text();

    return res.status(200).json({
      success: true,
      data: text,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
});

module.exports = router;
