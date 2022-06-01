import { FontLoader, Font } from "three/examples/jsm/loaders/FontLoader";

const loader = new FontLoader();
class FontManager {
  public regularFont?: Font;
  public boldFont?: Font;
  public isRegularFontLoaded: boolean;
  public isBoldFontLoaded: boolean;

  constructor() {
    this.isBoldFontLoaded = false;
    this.isRegularFontLoaded = false;

    this.appendBoldFont();
    this.appendRegularFont();
  }

  appendBoldFont = () => {
    const fontBold = require('../../assets/font/NanumGothic_Bold.fontjson');

    loader.load(fontBold, (font) => {
      this.boldFont = font;

      this.isBoldFontLoaded = true;
    });
  };

  appendRegularFont = () => {
    const fontRegular = require('../../assets/font/NanumGothic_Regular.fontjson');

    loader.load(fontRegular, (font) => {
      this.regularFont = font;
      this.isRegularFontLoaded = true;
    })

  };
}

// 객체 생성을 통해 최초 페이지 접근시 폰트가 먼저 로드되도록 함
// 폰트 로드가 오래걸리기때문에 대시보드 밖에서 한번만 로드되게 하기 위함
const CommonFonts = new FontManager();
export default CommonFonts;