System.config({
  baseURL: "/",
  defaultJSExtensions: true,
  transpiler: false,
  paths: {
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*"
  },

  map: {
    "bootstrap-datepicker": "npm:bootstrap-datepicker@1.6.4",
    "cookies-js": "npm:cookies-js@1.2.3",
    "css": "github:systemjs/plugin-css@0.1.32",
    "es6-shim": "github:es-shims/es6-shim@0.35.3",
    "farbtastic": "github:mattfarina/farbtastic@2.0.0-alpha.1",
    "fullcalendar": "npm:fullcalendar@3.4.0",
    "incremental-dom": "npm:incremental-dom@0.4.1",
    "jquery": "npm:jquery@3.3.1",
    "jquery-treegrid": "npm:jquery-treegrid@0.3.0",
    "jquery.maskedinput": "npm:jquery.maskedinput@1.4.1",
    "jstree": "npm:jstree@3.3.5",
    "moment": "npm:moment@2.18.1",
    "mv-basico": "npm:mv-basico@2.2.0",
    "mv-hosp": "npm:mv-hosp@2.2.0",
    "mv-workspace": "npm:mv-workspace@0.0.81",
    "page": "npm:page@1.8.3",
    "toastr": "github:CodeSeven/toastr@2.1.3",
    "tslib": "npm:tslib@1.7.1",
    "twbs-pagination": "npm:twbs-pagination@1.4.1",
    "github:CodeSeven/toastr@2.1.3": {
      "css": "github:systemjs/plugin-css@0.1.32",
      "jquery": "npm:jquery@3.3.1"
    },
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.4.1"
    },
    "github:jspm/nodelibs-buffer@0.1.1": {
      "buffer": "npm:buffer@5.1.0"
    },
    "github:jspm/nodelibs-path@0.1.0": {
      "path-browserify": "npm:path-browserify@0.0.0"
    },
    "github:jspm/nodelibs-process@0.1.2": {
      "process": "npm:process@0.11.10"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "github:jspm/nodelibs-vm@0.1.0": {
      "vm-browserify": "npm:vm-browserify@0.0.4"
    },
    "npm:assert@1.4.1": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "util": "npm:util@0.10.3"
    },
    "npm:bootstrap-datepicker@1.6.4": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "jquery": "npm:jquery@3.3.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:buffer@5.1.0": {
      "base64-js": "npm:base64-js@1.2.3",
      "ieee754": "npm:ieee754@1.1.8"
    },
    "npm:fullcalendar@3.4.0": {
      "jquery": "npm:jquery@3.3.1",
      "moment": "npm:moment@2.18.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:jquery-treegrid@0.3.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:jquery.maskedinput@1.4.1": {
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:jstree@3.3.5": {
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "jquery": "npm:jquery@3.3.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:page@1.8.3": {
      "path-to-regexp": "npm:path-to-regexp@1.2.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:path-browserify@0.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:path-to-regexp@1.2.1": {
      "isarray": "npm:isarray@0.0.1"
    },
    "npm:process@0.11.10": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "vm": "github:jspm/nodelibs-vm@0.1.0"
    },
    "npm:twbs-pagination@1.4.1": {
      "jquery": "npm:jquery@3.3.1"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:vm-browserify@0.0.4": {
      "indexof": "npm:indexof@0.0.1"
    }
  }
});
