import { Controller } from "@hotwired/stimulus"
export default class extends Controller {
  
  connect() {
    console.log("turbo connected");
    $(`#${this.element.dataset.modal}`).modal("show");
  }
  close(event) {
    $(`.modal`).modal("hide");
    $(`.modal:not(.custom)`).remove();
    $("#turbo_modal").removeAttr("src");

    if (
      event.target.dataset.refresh == "true" &&
      event.target.dataset.errors == "false"
    ) {
      window.location = window.location.href;
    }
  }

  escClose(event) {
    if (event.key === "Escape") this.close();
  }
 
}
