console.error("SyntaxError: {\n  \"name\": \"connect-fun\",\n  \"version\": \"1.0.0\",\n  \"description\": \"it's a real sweet app\",\n  \"main\": \"index.js\",\n  \"scripts\": {\n    \"start\": \"budo . -d --serve bundle.js --live\",\n<<<<<<< HEAD\n    \"build\": \"watchify . -o public/bundle.js -g uglifyify\",\n=======\n    \"build\": \"watchify . -o bundle.js -g uglifyify\",\n>>>>>>> 98989746263ca7421ffa94474c3777587b2162fe\n    \"test\": \"browserify test/index.js | node | tap-spec\",\n    \"dist\": \"mkdir -p dist && bash -c 'cp *.{js,html,css} dist'\",\n    \"push\": \"gh-pages -d dist\",\n    \"deploy\": \"npm run build && npm run dist && npm run push\"\n  },\n  \"browserify\": {\n    \"transform\": [\n      \"babelify\"\n    ]\n  },\n  \"repository\": {\n    \"type\": \"git\",\n    \"url\": \"https://github.com/pietgeursen/connect-fun\"\n  },\n  \"author\": \"pietgeursen\",\n  \"license\": \"MIT\",\n  \"bugs\": {\n    \"url\": \"https://github.com/pietgeursen/connect-fun/issues\"\n  },\n  \"homepage\": \"https://github.com/pietgeursen/connect-fun\",\n  \"dependencies\": {\n    \"express\": \"^4.14.0\",\n    \"path\": \"^0.12.7\",\n    \"react-redux\": \"^4.4.5\",\n    \"redux\": \"^3.5.2\"\n  },\n  \"devDependencies\": {\n    \"babel-preset-es2015\": \"^6.5.0\",\n    \"babel-preset-react\": \"^6.5.0\",\n    \"babelify\": \"^7.2.0\",\n    \"browserify\": \"^13.0.0\",\n    \"budo\": \"^8.2.0\",\n    \"gh-pages\": \"^0.11.0\",\n    \"react\": \"^15.0.1\",\n    \"react-dom\": \"^15.0.1\",\n    \"tap-spec\": \"^4.1.1\",\n    \"tape\": \"^4.5.1\",\n    \"uglifyify\": \"^3.0.1\",\n    \"watchify\": \"^3.7.0\"\n  }\n}\n : Unexpected token < in JSON at position 179");