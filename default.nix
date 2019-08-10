(with import <nixpkgs-unstable> {}; [ nodejs-12_x (yarn.override {nodejs = nodejs-12_x;}) ])
