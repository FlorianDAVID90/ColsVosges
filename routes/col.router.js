const colController = require('../controllers/col.controller')
const router = require('express').Router();

router.get('/', colController.list);
router.get('/col-:id_col/versan-:id_versan', colController.showVersan)
router.get('/cols_dept:id', colController.getColsDept)
router.get('/versan:idV', colController.showOneVersan)

module.exports = router;