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
Object.defineProperty(exports, "__esModule", { value: true });
exports.OfertasControllers = void 0;
const ofertas_query_1 = require("./ofertas-query");
const send_res_1 = require("../../../helpers/send.res");
class OfertasControllers {
    static getAllOfertas(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const utensilios = yield (0, ofertas_query_1.OfertasManager)("SelectAll");
                return (0, send_res_1.sendRes)(res, 200, true, "Datos Obtenidos", utensilios);
            }
            catch (error) {
                if (error instanceof Error) {
                    return (0, send_res_1.sendRes)(res, 500, false, "Error Grave", error.message);
                }
                else {
                    return (0, send_res_1.sendRes)(res, 500, false, "Error Grave", "");
                }
            }
        });
    }
}
exports.OfertasControllers = OfertasControllers;
