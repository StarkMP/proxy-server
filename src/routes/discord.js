const { Router } = require('express');
const router = Router();
const fetch = require('node-fetch');

router.post('/webhook/:id/:token', async (req, res) => {
    try {
        const { id, token } = req.params;

        await fetch(`https://discord.com/api/webhooks/${id}/${token}`, {
            method: 'POST',
            body: JSON.stringify(req.body || {}),
            headers: { 'Content-Type': 'application/json' }
        })
            .then(response => {
                const json = {};

                if (response.error) {
                    json.error = response.error;
                }

                res.status(response.status).json(json);
                res.end();
            });

    } catch (error) {
        res.status(500).json({ error });
        res.end();
    }
});

module.exports = router;