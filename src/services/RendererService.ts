import HtmlService from "./HtmlService";

type SkillKey =
    | keyof TSkills["intellect"]
    | keyof TSkills["motorics"]
    | keyof TSkills["physique"]
    | keyof TSkills["psyche"];

const getSkillAssets = (skill: SkillKey) => {
    const imgBasePath = "img/skills";
    const assetMap: Partial<{ [key in typeof skill]: { label: string; img: string } }> = {
        authority: { label: "Authority", img: `${imgBasePath}/authority.PNG` },
        composure: { label: "Composure", img: `${imgBasePath}/composure.PNG` },
        conceptualization: { label: "Conceptualization", img: `${imgBasePath}/conceptualization.PNG` },
        electrochemistry: { label: "Electro-Chemistry", img: `${imgBasePath}/electrochemistry.PNG` },
        chancyclopedia: { label: "Chan-Cyclopedia", img: `${imgBasePath}/encyclopedia.PNG` },
        endurance: { label: "Endurance", img: `${imgBasePath}/endurance.PNG` },
        espirit_de_dinos: { label: "Espirit De Dinos", img: `${imgBasePath}/espirit_de_dinos.PNG` },
        espirit_de_cavemen: { label: "Espirit De Cavemen", img: `${imgBasePath}/espirit_de_cavemen.PNG` },
        hand_eye_coordination: { label: "Hand-Eye Coordination", img: `${imgBasePath}/hand_eye_coordination.PNG` },
        logic: { label: "Logic", img: `${imgBasePath}/logic.PNG` },
        pain_threshold: { label: "Pain Threshold", img: `${imgBasePath}/pain_threshold.PNG` },
        perception: { label: "Perception", img: `${imgBasePath}/perception.PNG` },
        physical_instrument: { label: "Physical Instrument", img: `${imgBasePath}/physical_instrument.PNG` },
        reaction_speed: { label: "Reaction Speed", img: `${imgBasePath}/reaction_speed.PNG` },
        visual_calculus: { label: "Visual Calculus", img: `${imgBasePath}/visual_calculus.PNG` },
        volition: { label: "Volition", img: `${imgBasePath}/volition.PNG` },
    };

    return assetMap[skill] || null;
};

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
        const renderSkillBadge = (code: SkillKey, valueBase: any) => {
            const value = valueBase.base + valueBase[code];

            const assets = getSkillAssets(code as any);
            if (!assets) throw Error(`Missing assets for skill: ${code}`);

            const html = `
                    <div class="info">
                        <div class="overlay" style="background-image: url('${assets.img}')"></div>
                        <div class="label">${assets.label}</div>
                        <div class="value">${value}</div>
                    </div>
                `;

            return html;
        };

        const html = `
                <div class="row">
                    <div>${intellect.base}</div>
                    <div>${renderSkillBadge("logic", intellect)}</div>
                    <div>${renderSkillBadge("chancyclopedia", intellect)}</div>
                    <div>${renderSkillBadge("conceptualization", intellect)}</div>
                    <div>${renderSkillBadge("visual_calculus", intellect)}</div>
                </div>

                <div class="row">
                    <div>${psyche.base}</div>
                    <div>${renderSkillBadge("volition", psyche)}</div>
                    <div>${renderSkillBadge("authority", psyche)}</div>
                    <div>${renderSkillBadge("espirit_de_cavemen", psyche)}</div>
                    <div>${renderSkillBadge("espirit_de_dinos", psyche)}</div>
                </div>

                <div class="row">
                    <div>${physique.base}</div>
                    <div>${renderSkillBadge("endurance", physique)}</div>
                    <div>${renderSkillBadge("pain_threshold", physique)}</div>
                    <div>${renderSkillBadge("physical_instrument", physique)}</div>
                    <div>${renderSkillBadge("electrochemistry", physique)}</div>
                </div>

                <div class="row">
                    <div>${motorics.base}</div>
                    <div>${renderSkillBadge("hand_eye_coordination", motorics)}</div>
                    <div>${renderSkillBadge("perception", motorics)}</div>
                    <div>${renderSkillBadge("reaction_speed", motorics)}</div>
                    <div>${renderSkillBadge("composure", motorics)}</div>
                </div>
            `;

        HtmlService.skills().innerHTML = html;
    };
}

export default new RendererService();
