type TSkills = {
    intellect: {
        //How smart you are
        base: number;
        logic: number; //Analyze the world, connect the dots
        chancyclopedia: number; //Internet culture
        conceptualization: number; //See new perspectives
        visual_calculus: number; //Physics, motion, mathematics
    };
    psyche: {
        //How sensitive you are
        base: number;
        volition: number; //Moral compass, resist temptation
        authority: number; //Be a presence, order people around
        espirit_de_cavemen: number; //Connection to humans
        espirit_de_dinos: number; //Connection to dinos
    };
    physique: {
        //How tough you are (physically)
        base: number;
        endurance: number; //Health, stamina
        pain_threshold: number; //Pain threshold (physical + mental stress)
        physical_instrument: number; //Physical might
        electrochemistry: number; //Aww yeah baby
    };
    motorics: {
        //How flexible you are (physically and mentally)
        base: number;
        hand_eye_coordination: number; //Fine motor skills
        perception: number; //Notice tiny details (material and verbal)
        reaction_speed: number; //Reaction speed (material and verbal)
        composure: number; //Not be a nerdy autist retard
    };
};

type TPlayer = {
    skills: TSkills;
    hp: 0 | 1 | 2;
    mp: 0 | 1 | 2;
};
