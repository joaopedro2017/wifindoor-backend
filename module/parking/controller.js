const parkingShema = require('./schema')

const all = async (_, res) => {
    const parkings = await parkingShema.find()
    return res.json(parkings)
}

const findById = async (req, res) => {
    const { id } = req.params
    const model = await parkingShema.findById(id)
    if (!model)
        return res.status(404).send('Parking not found')
    else
        return res.json(model)
}

const save = async (req, res) => {
    const { id } = req.params
    const { body } = req
    if (id) {
        await parkingShema.updateOne({ _id: id }, { $set: body })
        const updated = await parkingShema.findById(id)
        return res.status(202).send(updated)
    } else {
        const parking = new parkingShema(body)
        await parking.save()
        return res.status(201).send(parking)
    }
}

const remove = async (req, res) => {
    const { id } = req.params
    await parkingShema.deleteOne({ _id: id })
    return res.status(204).send('Parking removed success')
}

module.exports = {
    all,
    findById,
    save,
    remove
}