// We need to import the CSS so that webpack will load it.
// The MiniCssExtractPlugin is used to separate it out into
// its own CSS file.
import css from "../css/app.scss"

// webpack automatically bundles all modules in your
// entry points. Those entry points can be configured
// in "webpack.config.js".
//
// Import dependencies
//
import "phoenix_html"

// Import local files
//
// Local files can be imported directly using relative paths, for example:
// import socket from "./socket"
import 'bootstrap'
import 'jquery-colorbox'
import 'jquery.easing'
import {ScrollToPlugin, TimelineMax, TweenMax} from "gsap"
import ScrollMagic from 'scrollmagic'
import 'imports-loader?define=>false!scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap'
import 'jquery-datepicker';
import 'jquery-timepicker/jquery.timepicker.css'
import 'jquery-timepicker/jquery.timepicker.js'
import 'owl.carousel/dist/assets/owl.carousel.css'
import 'owl.carousel/dist/assets/owl.theme.default.css'
import 'owl.carousel'
import 'jquery-parallax.js'
import 'progressbar.js'
import './template/custom.js'
