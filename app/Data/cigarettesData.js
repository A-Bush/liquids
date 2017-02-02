"use strict";
var CigarettesData = (function () {
    function CigarettesData() {
    }
    CigarettesData.prototype.createDb = function () {
        var cigarettes = [
            {
                "id": 1,
                "name": "Orange",
                "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, autem consequuntur deleniti distinctio dolore hic ipsam! Asperiores maxime quasi tenetur?",
                "price": "400",
                "amount": "50"
            },
            {
                "id": 2,
                "name": "Banana",
                "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, autem consequuntur deleniti distinctio dolore hic ipsam! Asperiores maxime quasi tenetur?",
                "price": "200",
                "amount": "100"
            },
            {
                "id": 3,
                "name": "Strawberry",
                "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, autem consequuntur deleniti distinctio dolore hic ipsam! Asperiores maxime quasi tenetur?",
                "price": "100",
                "amount": "5"
            }
        ];
        return { cigarettes: cigarettes };
    };
    return CigarettesData;
}());
exports.CigarettesData = CigarettesData;
//# sourceMappingURL=cigarettesData.js.map