var config = require('../config.json');
exports.run = (tier, name) => {
    var vaulted = false;
    var vaultedLith = [
        'A1','A2',
        'B1','B2','B3','B4',
        'C1','C2',
        'F1','F2',
        'G1','G2',
        'H1',
        'K1',
        'M1',
        'N1','N2','N3',
        'S1','S2','S3','S4','S5','S6','S7',
        'T1','T2',
        'V1','V2','V3','V4','V5',
        'Z1'
    ];
    var vaultedMeso = [
        'B1',
        'C1','C2','C3',
        'D1','D2',
        'E1',
        'F1','F2','F3',
        'G1',
        'H1',
        'K1',
        'M1',
        'N1','N2','N3','N4','N5','N6',
        'O1','O2',
        'S1','S2','S3','S4','S5','S6','S7',
        'T2',
        'V1','V2','V3','V4','V5'
    ];
    var vaultedNeo = [
        'A1',
        'B1','B2','B3','B4',
        'D1',
        'E1',
        'F1',
        'H1',
        'K1',
        'N1','N2','N3','N4','N5','N6','N7',
        'O1',
        'R1',
        'S1','S2','S3','S4','S5','S6','S8',
        'T1',
        'V1','V2','V3','V4','V5','V6','V7',
        'Z1'
    ];
    var vaultedAxi = [
        'A1','A3',
        'B1','B2',
        'C1','C2',
        'E1',
        'G1',
        'H1','H2','H3',
        'K1','K2','K3',
        'L1',
        'N1','N2','N3','N4','N5',
        'O1','O2','O3',
        'R1',
        'S1','S2','S3',
        'T1',
        'V1','V2','V3','V4','V5','V6','V7','V8'
    ];

    switch(tier){
        case "Lith":
            vaultedLith.forEach((relic) => {
                if(name == relic){
                    vaulted = true;
                }
            });
            break;
        case "Meso":
            vaultedMeso.forEach((relic) => {
                if(name == relic){
                    vaulted = true;
                }
            });
            break;
        case "Neo":
            vaultedNeo.forEach((relic) => {
                if(name == relic){
                    vaulted = true;
                }
            });
            break;
        case "Axi":
            vaultedAxi.forEach((relic) => {
                if(name == relic){
                    vaulted = true;
                }
            });
            break;
        default:
            break;
    }
    return vaulted;
}