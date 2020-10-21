const wifiShema = require('./schema')

const all = async (_, res) => {
    const parkings = await wifiShema.find()
    return res.json(parkings)
}

const findById = async (req, res) => {
    const { id } = req.params
    const model = await wifiShema.findById(id)
    if (!model)
        return res.status(404).send('Parking not found')
    else
        return res.json(model)
}

const save = async (req, res) => {
    const { id } = req.params
    const { body } = req
    if (id) {
        await wifiShema.updateOne({ _id: id }, { $set: body })
        const updated = await wifiShema.findById(id)
        return res.status(202).send(updated)
    } else {
        const parking = new wifiShema(body)
        await parking.save()
        return res.status(201).send(parking)
    }
}

const remove = async (req, res) => {
    const { id } = req.params
    await wifiShema.deleteOne({ _id: id })
    return res.status(204).send('Parking removed success')
}

module.exports = {
    all,
    findById,
    save,
    remove
}