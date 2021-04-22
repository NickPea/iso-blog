//

import * as config from "../config";

//DATABASE
import "../database/connection";

//AXIOS
import axios from "axios";
axios.defaults.baseURL = `${config.AXIOS_DEFAULTS_BASE_URL}:${config.PORT}`;

