const app = require('inquirer');
const router = express.Router();

router.use(require('./inquirer/inquirer'));

module.exports = router;