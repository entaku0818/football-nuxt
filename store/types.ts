export interface RootState {
    version: string;
}

export interface TeamsState {
    teams: Team[]
}

export interface Team {
    // 一意になるかんじのID
    id: number;
    name:string;
    area: Area;
    // やること
    crestUrl: string;
}

export interface Area {
    id: string;
    name: string;
}

// "id": 58,
// "area": {
//     "id": 2072,
//     "name": "England"
// },
// "name": "Aston Villa FC",
// "shortName": "Aston Villa",
// "tla": "AST",
// "crestUrl": "http://upload.wikimedia.org/wikipedia/de/9/9f/Aston_Villa_logo.svg",
// "address": "Villa Park Birmingham B6 6HE",
// "phone": "+44 (0121) 3272299",
// "website": "http://www.avfc.co.uk",
// "email": null,
// "founded": 1872,
// "clubColors": "Claret / Sky Blue",
// "venue": "Villa Park",
// "lastUpdated": "2019-10-17T02:37:21Z"