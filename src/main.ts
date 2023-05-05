import express from 'express';
import pgp from 'pg-promise'
import BoardService from './service/BoardService';

const app = express()
const connection = pgp()("postgres://postgres:root@localhost:5432/app")

app.get('/boards', async (req, res) => {
    const boardService = new BoardService();
    const boards = await boardService.getBoards()
    res.json(boards)
})

app.get('/boards/:idBoard/columns', async (req, res) => {
    const columns = await connection.query("select * from branas.column where id_board = $1", [req.params.idBoard])
    res.json(columns)
})

app.get('/boards/:idBoard/columns/:idColumns/cards', async (req, res) => {
    const cards = await connection.query(`
        select * 
          from branas.card
         where id_column = $1`, [req.params.idColumns])
    res.json(cards)
})
app.listen(3000);
