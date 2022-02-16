const app = require('inquirer');
const router = express.Router();

app.use(require('./inquirer/inquirer'));

module.exports = router;