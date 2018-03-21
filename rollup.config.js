import babel from "rollup-plugin-babel"
import builtins from "rollup-plugin-node-builtins"
import resolve from "rollup-plugin-node-resolve"
import flow from "rollup-plugin-flow"
import uglify from "rollup-plugin-uglify"

export default {
    input: "src/index.js",
    output: [
        // {
        //     file: "lib/grunt-purgecss.es.js",
        //     format: "es"
        // },
        {
            file: "lib/grunt-purgecss.js",
            format: "cjs"
        }
    ],
    plugins: [builtins(), resolve(), flow(), babel(), uglify()],
    external: ['purgecss']
}
