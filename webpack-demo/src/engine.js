import { writeToScreen } from "./text";
import { writeToH1 } from "./text";

writeToScreen('Hello World from Webpack!!!')
writeToH1('hotreload!!123134')

if (module && module.hot) module.hot.accept()