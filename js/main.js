const slider = document.getElementById("slider");

class Theme {
    constructor(bgColor, txtColor, btnColor, btnColorVar, prmColor, prmColorVar, sndColor, sndColorVar, btnPrm, btnSnd, resColor, iptBoxColor) {
        this.bgColor = bgColor
        this.txtColor = txtColor
        this.btnColor = btnColor
        this.btnColorVar = btnColorVar
        this.prmColor = prmColor
        this.prmColorVar = prmColorVar
        this.sndColor = sndColor
        this.sndColorVar = sndColorVar
        this.btnPrm = btnPrm
        this.btnSnd = btnSnd
        this.resColor = resColor
        this.iptBoxColor = iptBoxColor
    }

    setTheme() {
        document.documentElement.style.setProperty('--background-color', this.bgColor);
        document.documentElement.style.setProperty('--text-color', this.txtColor);
        document.documentElement.style.setProperty('--btn-color', this.btnColor);
        document.documentElement.style.setProperty('--btn-color-var', this.btnColorVar);
        document.documentElement.style.setProperty('--primary-color', this.prmColor);
        document.documentElement.style.setProperty('--primary-color-variant', this.prmColorVar);
        document.documentElement.style.setProperty('--secondary-color', this.sndColor);
        document.documentElement.style.setProperty('--secondary-color-variant', this.sndColorVar);
        document.documentElement.style.setProperty('--button-primary-color', this.btnPrm);
        document.documentElement.style.setProperty('--button-secondary-color', this.btnSnd);
        document.documentElement.style.setProperty('--response-color', this.resColor);
        document.documentElement.style.setProperty('--input-box-color', this.iptBoxColor);
    }
}

const themes = [
    new Theme("#3B4664", "#FFFFFF", "#3B4664", "#FFFFFF", "#647299", "#414D75", "#D13F30", "#942417", "#EAE3DB", "#AFA4A2", "#181F32", "#252D44"),
    new Theme("#888", "#37372D", "#37372D", "#FFFFFF", "#388187", "#1A5D65", "#C85401", "#863700", "#EAE3DB", "#AFA4A2", "#EEEEEE", "#D0CECF"),
    new Theme("#17062A", "#FFE33D", "#FFE33D", "#FFFFFF", "#580881", "#A924D7", "#00DECF", "#6EF7EF", "#331B4D", "#71268D", "#1E0836", "#1E0836")
]

function sliderEvent() {
    let actualTheme = slider.value - 1;
    themes[actualTheme].setTheme()
}

slider.addEventListener("change", sliderEvent);
slider.value=1;
themes[0].setTheme();