import "./styles/styles.scss";
import HtmlService from "./services/HtmlService";
import GameService from "./services/GameService";
import RendererService from "./services/RendererService";

//TODO: set up game loop
(() => {
    HtmlService.init();

    RendererService.render(GameService.getPlayer());
})();
