let fs = require("fs");

// let EventEmitter = require("events");
// let eve = new EventEmitter();
// let html = {};

// eve.on("ready", function(key, value) {
//   html[key] = value;
//   if (Object.keys(html).length === 1) {
//     console.log(html);
//   }
// });

// function render() {
//   fs.readFile("info.md", "utf8", function(err, template) {
//     eve.emit("ready", "template", template);
//   });
// }

// render();

// 哨兵模式
let after = function(times, callback) {
  let result = {};
  return function(key, value) {
    result[key] = value;

    if (Object.keys(result).length == times) {
      callback(result);
    }
  };
};

let done = after(1, function(result) {
  console.log(result);
});

function render() {
  fs.readFile("info.md", "utf8", function(err, template) {
    done("ready", template);
  });
}

render();
