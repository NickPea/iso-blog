//

import { baseUrl, port } from "../config";

//axios
// - setting the global defaults
import axios from "axios";
axios.defaults.baseURL = `${baseUrl}:${port}`;
