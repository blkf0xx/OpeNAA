const resourcesController = {}

resourcesController.getResourcesPage = (req, res) => {
    res.render('resources', {title: 'Resources'})
}

module.exports = resourcesController