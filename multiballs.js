"use strict";
import { animate, stagger } from "https://cdn.skypack.dev/motion";
animate(".ball", { translateY: [null, -400, 0] }, { duration: 1, delay: stagger(0.2), repeat: Infinity });
