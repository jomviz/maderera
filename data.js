var APP_DATA = {
  "scenes": [
    {
      "id": "0-1-vereda",
      "name": "1 Vereda",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.16010347536766467,
          "pitch": 0.12460940298663559,
          "rotation": 0,
          "target": "1-2-estar-comedor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-2-estar-comedor",
      "name": "2 Estar Comedor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.150414246362029,
          "pitch": 0.42385986902828066,
          "rotation": 0,
          "target": "3-4-galeria-parrilla"
        },
        {
          "yaw": -1.024299925589153,
          "pitch": 0.37296116379224387,
          "rotation": 0,
          "target": "4-5-paso"
        },
        {
          "yaw": -2.048570129645828,
          "pitch": 0.38272079748191956,
          "rotation": 0,
          "target": "0-1-vereda"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-3-dormitorio-principal",
      "name": "3 Dormitorio Principal",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.4633179960580227,
          "pitch": 0.7209239218758956,
          "rotation": 0,
          "target": "4-5-paso"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-4-galeria-parrilla",
      "name": "4 Galeria Parrilla",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [],
      "infoHotspots": []
    },
    {
      "id": "4-5-paso",
      "name": "5 Paso",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.0164260102272307,
          "pitch": 0.31861824897247715,
          "rotation": 0,
          "target": "1-2-estar-comedor"
        },
        {
          "yaw": 0.8687930736023226,
          "pitch": 0.33290469389361554,
          "rotation": 0,
          "target": "2-3-dormitorio-principal"
        },
        {
          "yaw": 2.0258333088856073,
          "pitch": 1.119581756119219,
          "rotation": 0,
          "target": "5-6-dormitorio-2"
        },
        {
          "yaw": 2.066139779793258,
          "pitch": 0.7706687995666126,
          "rotation": 0,
          "target": "6-7-dormitorio-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-6-dormitorio-2",
      "name": "6 Dormitorio 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.8752358223645427,
          "pitch": 0.6051387725603252,
          "rotation": 0,
          "target": "4-5-paso"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-7-dormitorio-3",
      "name": "7 Dormitorio 3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.405084524342662,
          "pitch": 0.593621015959906,
          "rotation": 0,
          "target": "4-5-paso"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
