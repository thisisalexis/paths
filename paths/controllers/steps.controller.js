const mockedStep = {
    id: 1,
    name: 'Step Name', 
    description: 'This is the long description',
    createdby: 'Alexis Bravo',
    createdat: null,
    updatedat: null,
    resource: { 
        type: 'link', link: 'https://www.google.com' 
    }
};

module.exports.getByPathId = function(req, res) {

    const pathId = req.pathId;

    console.log(`Quering Steps for Patn ${pathId}`)

    return  res.status(200).json({
        status: 200,
        results: 5,
        data: [mockedStep, mockedStep, mockedStep, mockedStep]
    });

};