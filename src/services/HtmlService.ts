class HtmlService {
    // @ts-ignore
    private _content: HTMLDivElement;

    // @ts-ignore
    private _scene: HTMLDivElement;

    // @ts-ignore
    private _skills: HTMLDivElement;

    // @ts-ignore
    private _avatar: HTMLDivElement;

    public content = () => this._content;

    public scene = () => this._scene;

    public skills = () => this._skills;

    public avatar = () => this._avatar;

    public init = () => {
        const contentEl = document.querySelector<HTMLDivElement>("body > .content");
        if (!contentEl) throw Error("Content element not found!");

        const sceneEl = contentEl.querySelector<HTMLDivElement>(".scene");
        if (!sceneEl) throw Error("Scene element not found!");

        const skillsEl = contentEl.querySelector<HTMLDivElement>(".skills");
        if (!skillsEl) throw Error("Skills element not found!");

        const avatarEl = contentEl.querySelector<HTMLDivElement>(".avatar");
        if (!avatarEl) throw Error("Avatar element not found!");

        const avatarImgEl = avatarEl.querySelector("img");
        if (!avatarImgEl) throw Error("Avatar img element not found!");
        avatarImgEl.addEventListener("click", this.toggleSkillsWindow);

        this._content = contentEl;
        this._scene = sceneEl;
        this._skills = skillsEl;
        this._avatar = avatarEl;
    };

    private toggleSkillsWindow = () => {
        if (this._skills.style.display === "block") {
            this._skills.style.display = "none";
        } else {
            this._skills.style.display = "block";
        }
    };
}

export default new HtmlService();
