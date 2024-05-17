"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var native_1 = require("@react-navigation/native");
var AuthNavigator_1 = require("./navigation/AuthNavigator");
var SplashScreen = require("expo-splash-screen");
var poppins_1 = require("@expo-google-fonts/poppins");
var dm_sans_1 = require("@expo-google-fonts/dm-sans");
var dm_serif_display_1 = require("@expo-google-fonts/dm-serif-display");
var App = function () {
    var _a = (0, poppins_1.useFonts)({
        Poppins_300Light: poppins_1.Poppins_300Light,
        Poppins_400Regular: poppins_1.Poppins_400Regular,
        Poppins_500Medium: poppins_1.Poppins_500Medium,
        Poppins_700Bold: poppins_1.Poppins_700Bold,
        Poppins_800ExtraBold: poppins_1.Poppins_800ExtraBold,
        DMSans_400Regular: dm_sans_1.DMSans_400Regular,
        DMSerifDisplay_400Regular: dm_serif_display_1.DMSerifDisplay_400Regular,
    }), fontsLoaded = _a[0], error = _a[1];
    SplashScreen.preventAutoHideAsync();
    console.log('Fonts Loaded:', fontsLoaded);
    console.log('Font Loading Error:', error);
    var _b = (0, react_1.useState)(false), appIsReady = _b[0], setAppIsReady = _b[1];
    (0, react_1.useEffect)(function () {
        var prepareApp = function () { return __awaiter(void 0, void 0, void 0, function () {
            var e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, 4, 6]);
                        console.log('Preventing auto hide of SplashScreen...');
                        return [4 /*yield*/, SplashScreen.preventAutoHideAsync()];
                    case 1:
                        _a.sent();
                        // Simulate some loading time
                        console.log('Simulating loading time...');
                        return [4 /*yield*/, new Promise(function (resolve) { return setTimeout(resolve, 3000); })];
                    case 2:
                        _a.sent();
                        // Pode adicionar outras tarefas de inicialização aqui
                        console.log('Setting app as ready...');
                        setAppIsReady(true);
                        return [3 /*break*/, 6];
                    case 3:
                        e_1 = _a.sent();
                        console.warn('Error while preparing app:', e_1);
                        return [3 /*break*/, 6];
                    case 4:
                        console.log('Hiding SplashScreen...');
                        return [4 /*yield*/, SplashScreen.hideAsync()];
                    case 5:
                        _a.sent();
                        return [7 /*endfinally*/];
                    case 6: return [2 /*return*/];
                }
            });
        }); };
        prepareApp();
    }, []);
    if (!fontsLoaded || !appIsReady) {
        console.log('Rendering SplashScreen...');
        return null; // Você pode retornar um componente de carregamento aqui
    }
    console.log('Rendering AuthNavigator...');
    return (<native_1.NavigationContainer>
         <AuthNavigator_1.default />
      </native_1.NavigationContainer>);
};
exports.default = App;
