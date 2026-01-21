const db = require('../db/index.js')

const createArtist = async (req, res) => {
  try {
    const { name, genre } = req.body

    const { rows: [artist] } = await db.query(
      'INSERT INTO artists (name, genre) VALUES ($1, $2) RETURNING *',
      [name, genre]
    )

    return res.status(201).json(artist)
  } catch (err) {
    console.error(err)
    return res.status(500).json({ error: err.message })
  }
}

module.exports = { createArtist }