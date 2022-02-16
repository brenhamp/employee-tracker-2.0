const app = require('express');
const router = express.Router();

router.use(require('./inquirer/inquirer'));

module.exports = router;