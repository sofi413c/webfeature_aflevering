import "./style.css";

import { animate, scroll } from "motion";

scroll(animate(".progress-bar", { scaleY: [0, 1] }));

