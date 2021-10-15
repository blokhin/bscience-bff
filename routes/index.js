module.exports = {
    head,
    get,
};

async function get(req, res) {
    res.json({ path: 'index' });
}

async function head(req, res) {
    res.sse.send('pong');
    return res.status(204).end();
}