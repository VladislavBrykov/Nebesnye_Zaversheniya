const express = require("express");
const router = express.Router();

router.post("/submit-phone", (req, res) => {
  const userPhone = req.body;
  console.log("Номер телефона:", userPhone);
  // Здесь может быть логика обработки номера телефона, например, сохранение в базе данных

  res.json({ status: "ok", message: "Номер телефона получен" });
});

module.exports = router;
