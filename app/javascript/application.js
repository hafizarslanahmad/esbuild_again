// Entry point for the build script in your package.json
import "@hotwired/turbo-rails"
import "./libs/jquery";
import "trix"

import "./libs/bootstrap";
import "./controllers";
import "@rails/actiontext";
import "chosen-js";
import "chosen";
// $(".chosen-select").chosen({disable_search_threshold: 10});
$(document).on("turbo:load", () => {
    $(".chosen").chosen();
  
});