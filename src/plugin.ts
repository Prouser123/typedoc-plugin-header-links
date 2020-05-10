import { RendererComponent } from "typedoc/dist/lib/output/components";
import { PageEvent } from "typedoc/dist/lib/output/events";
import { JSDOM } from "jsdom";

export class ExtrasPlugin extends RendererComponent {

    initialize() {
        this.listenTo(this.owner, PageEvent.END, this.onRendererEndPage);
    }

    private onRendererEndPage(page: PageEvent) {
        const dom = new JSDOM(page.contents);
        const p = dom.window.document.querySelector("body > div.container.tsd-generator > p");
        const now = new Date();
        p.innerHTML += ` the ${now.toLocaleDateString()} at ${now.toLocaleTimeString()}`;
        page.contents = dom.serialize();
    }
}
