import { Controller } from "@hotwired/stimulus"
import { Button } from "bootstrap"

export default class extends Controller {
  connect() {
    // this.element.textContent = "<br>"+"Excited to create a new post!"
    // this.element.innerHTML = this.element.textContent+"<br><br>"+"<p>Isn't enough <p>there you go<p>thats stimulus</p></p></p>"
    // this.element.prepend ("roziiiii")

    $(document).ready(function(){
      $("#btn1").click(function(){
        $("p").prepend("<b>Prepended text</b>. ");
      });
      $("#btn2").click(function(){
        $("ol").prepend("<li>Prepended item</li>");
      });
    });

    console.log("Apna Controller Connected");
  }

}
