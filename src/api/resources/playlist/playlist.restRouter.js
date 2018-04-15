import express from 'express'
import playlistController from './playlist.controller'

export const playlistRouter = express.Router()

playlistRouter.get('/', (req, res) => res.json({ location: 'playlistRouter' }));
