const pathsService = require('../services/path.service');

exports.getAllPaths = async (req, res) => {
    
    console.log('[paths.controller][getAllPaths][paths_ini] Starting getting paths');

    const paths = await pathsService.getAllPaths(); 

    console.log('[paths.controller][getAllPaths][paths_ini] Getting paths completed');

    return res.status(200).json(
        {
            status: 'success',
            results: paths == false ? 0 : paths.length,
            data: {
                paths
            }
        }
    );

};

exports.addPath = async (req, res) => {
    
    console.log('[paths.controller][addPath][paths_ini] Starting adding a path');

    const persistedPath = await pathsService.addPath(req.body);

    console.log('[paths.controller][addPath][paths_ini] Path added successfully');

    return res.status(201).json(persistedPath);

};

//TODO Eliminar retorno de body, ya que no es parte de estándar http; cuando se elimina se devuelve body vacío.
exports.deletePath = async (req, res) => {

    console.log(`[paths.controller][deletePath][paths_ini] Deleting path ${req.params.id}`);

    const deletedPath = pathsService.deletePathById(req.params.id);
    
    console.log(`[paths.controller][deletePath][paths_finok] Path ${req.params.id} deleted successfully`);

    res.status(200).json({ 
        status: 'success',
        data: {
            path: deletedPath
        }
     });

};

exports.getPathById = async (req, res) => {

    console.log('[paths.controller][getPathById][paths_ini] Getting path ' + req.params.id);

    const path = await pathsService.getPathById(req.params.id);

    if(path == null) {
        console.log(`[paths.controller][getPathById][paths_finok] Could not find path with id  ${req.params.id}`);
        res.status(404).end();
    } else {
        console.log('[paths.controller][getPathById][paths_finok] Found path successfully');
        res.status(200).json({ 
            status: 'success',
            data: {
                path
            }
        });
    }

};

exports.updatePathById = async (req, res) => {
    
    console.log('[paths.controller][updatePathById][paths_ini] Updating path ' + req.params.id);

    const updatedPath = await pathsService.updatePathById(req.params.id, req.body);

    if(updatedPath == null) {
        console.log(`[paths.controller][updatePathById][paths_finok] Could not find path with id  ${req.params.id}`);
        res.status(404).end();
    } else {
        console.log('[paths.controller][updatePathById][paths_finok] Updated path successfully');
        res.status(200).json({ 
            status: 'success',
            data: {
                path: updatedPath
            }
        });
    }

};
 
exports.searchPaths = (req, res) => {
    //TODO investigar problema con el router de este entpoint /search, que lo mapea a /id siempre. Por eso se deja esto mientras
    console.log(`Searching by request params ${req}`);
    return res.status(200).json([defaultPath]);
;
}
