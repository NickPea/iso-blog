//

import { app } from "./app";
import { port } from "../config";

app.listen(port, () => console.log(`-- Express Listening on Port: ${port} --`));
