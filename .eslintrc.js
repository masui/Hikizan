module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es2021": true
    },
    "extends": [
        "standard"
    ],
    "parserOptions": {
        "ecmaVersion": "latest"
    },
    "rules": {
    },
    "globals": {
        "$": false,
        "kuromoji": false,
	"cy": false,
	"describe": false,
	"it": false
    }
}
