"use strict";
// excercise one
// import { animate } from "https://cdn.skypack.dev/motion";

// animate(".ball", { translateX: 400 }, { duration: 2 });
// animate(".ball", { rotate: 200 }, { duration: 2, delay: 0.1 });
// animate(".ball", { scale: [null, 2, 0] }, { duration: 0.1, delay: 1.9 });
// excercise 3

import { timeline } from "https://cdn.skypack.dev/motion";

const sequence = [
  [".ball", { translateX: 400 }, { duration: 2 }],
  [".ball", { rotate: 200 }, { duration: 2, at: "<" }],
  [".ball", { scale: [null, 2, 0] }, { duration: 0.1 }],
  [".ball", { translateX: 2000, translateY: -1000 }, { at: "<" }],
];
timeline(sequence, { duration: 2, delay: 0.1 });
