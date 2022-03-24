import { Application, ParameterType, PageEvent, Logger } from "typedoc";
import { addLinksToHeader, HeaderLinks } from "./helpers";

const pluginOptions = (app: Application) => ({
  options: () => ({
    outDir: app.options.getValue("out") as string | undefined,
    headerLinks: app.options.getValue("headerLinks") as HeaderLinks,
    relativePathRoot: app.options.getValue("relativePathRoot") as string,
  }),
});

type PluginOptions = ReturnType<typeof pluginOptions>;

export function load(app: Application) {
  app.options.addDeclaration({
    name: "headerLinks",
    help: "The keys are the link texts, the values are the urls. Use $ROOT to refer to the relative path root",
    type: ParameterType.Mixed,
    defaultValue: {},
  });

  app.options.addDeclaration({
    name: "relativePathRoot",
    help: "In case the project is deployed in some subdirectory, this should be that path",
    type: ParameterType.String,
    defaultValue: "",
  });

  const options = pluginOptions(app);

  app.renderer.on(PageEvent.END, onPageRendered.bind(options, app.logger));
}

function onPageRendered(this: PluginOptions, logger: Logger, page: PageEvent) {
  if (!page.contents) return;

  const options = this.options();

  page.contents = addLinksToHeader(
    page.contents,
    options.headerLinks,
    options.relativePathRoot
  );
}
