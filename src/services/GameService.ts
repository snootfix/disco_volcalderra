const initialPlayerState: TPlayer = {
    hp: 2,
    mp: 2,
    skills: {
        intellect: {
            base: 3,
            logic: 0,
            chancyclopedia: 0,
            conceptualization: 0,
            visual_calculus: 0,
        },
        psyche: {
            base: 3,
            volition: 0,
            authority: 0,
            espirit_de_cavemen: 0,
            espirit_de_dinos: 0,
        },
        physique: {
            base: 3,
            endurance: 0,
            pain_threshold: 0,
            physical_instrument: 0,
            electrochemistry: 0,
        },
        motorics: {
            base: 3,
            hand_eye_coordination: 0,
            perception: 0,
            reaction_speed: 0,
            composure: 0,
        },
    },
};

class GameService {
    private player: TPlayer = { ...initialPlayerState };

    public getPlayer = () => ({ ...this.player });
}

export default new GameService();
