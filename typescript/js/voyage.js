"use strict";
var Sejour = /** @class */ (function () {
    function Sejour(_nom, _prix) {
        this._nom = _nom;
        this._prix = _prix;
    }
    Object.defineProperty(Sejour.prototype, "nom", {
        get: function () {
            return this._nom;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Sejour.prototype, "prix", {
        get: function () {
            return this._prix;
        },
        enumerable: true,
        configurable: true
    });
    return Sejour;
}());
var SejourService = /** @class */ (function () {
    function SejourService(_sejours) {
        this._sejours = _sejours;
        this._sejours = [new Sejour('Lisbonne', 100), new Sejour('Paris', 90)];
    }
    SejourService.prototype.findByNom = function (nomSejour) {
        return this._sejours.filter(function (s) { return s.nom == nomSejour; });
    };
    return SejourService;
}());
var sejours = [];
var sejourService = new SejourService(sejours);
console.log(sejourService.findByNom('Lisbonne'));
console.log(sejourService.findByNom('Paris'));
