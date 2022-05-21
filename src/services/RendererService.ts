import HtmlService from "./HtmlService";

class RendererService {
    public render = (player: TPlayer) => {
        this.renderAvatar();
        this.renderScene();
        this.renderSkills(player.skills);
    };

    private renderScene = () => {
        //TODO
    };

    private renderAvatar = () => {
        //TODO
    };

    private renderSkills = ({ intellect, motorics, physique, psyche }: TSkills) => {
        const renderSkillBadge = (label: string, value: number) => {
            //TODO: gfx

            const html = `
                    <div class="info">
                        <div class="label">${label}</div>
                        <div class="value">${value}</div>
                    </div>
                `;

            return html;
        };

        const html = `
                <div class="row">
                    <div>${intellect.base}</div>
                    <div>${renderSkillBadge('Logic', intellect.logic + intellect.base)}</div>
                    <div>${renderSkillBadge('Chan-cyclopedia', intellect.chancyclopedia + intellect.base)}</div>
                    <div>${renderSkillBadge('Conceptualization', intellect.conceptualization + intellect.base)}</div>
                    <div>${renderSkillBadge('Visual Calculus', intellect.visual_calculus + intellect.base)}</div>
                </div>

                <div class="row">
                    <div>${psyche.base}</div>
                    <div>${renderSkillBadge('Volition', psyche.volition + psyche.base)}</div>
                    <div>${renderSkillBadge('Authority', psyche.authority + psyche.base)}</div>
                    <div>${renderSkillBadge('Espirit De Cavemen', psyche.espirit_de_cavemen + psyche.base)}</div>
                    <div>${renderSkillBadge('Espirit De Dinos', psyche.espirit_de_dinos + psyche.base)}</div>
                </div>

                <div class="row">
                    <div>${physique.base}</div>
                    <div>${renderSkillBadge('Endurance', physique.endurance + physique.base)}</div>
                    <div>${renderSkillBadge('Pain Threshold', physique.pain_threshold + physique.base)}</div>
                    <div>${renderSkillBadge('Physical Instrument', physique.physical_instrument + physique.base)}</div>
                    <div>${renderSkillBadge('Electro-chemistry', physique.electrochemistry + physique.base)}</div>
                </div>

                <div class="row">
                    <div>${motorics.base}</div>
                    <div>${renderSkillBadge('Hand-Eye Coordination', motorics.hand_eye_coordination + motorics.base)}</div>
                    <div>${renderSkillBadge('Perception', motorics.perception + motorics.base)}</div>
                    <div>${renderSkillBadge('Reaction Speed', motorics.reaction_speed + motorics.base)}</div>
                    <div>${renderSkillBadge('Composure', motorics.composure + motorics.base)}</div>
                </div>
            `;

        HtmlService.skills().innerHTML = html;
    };
}

export default new RendererService();
