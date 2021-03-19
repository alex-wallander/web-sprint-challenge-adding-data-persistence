const Resource = require('./model')

const uniqueName = async (req, res, next) => {
    try {
        const re = await Resource.getAll()
        const name = req.body.resource_name
        const results = re.filter(r => {
            if(r.resource_name === name) {
                return r;
            }
        })
        if (results.length > 0) {
            return res.status(400).json({ message:'name is already in use'})
        } else {
            next()
        }
    } catch(err) {
        next(err)
    }
}

module.exports = uniqueName;