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
          "yaw": 0.14334933261094207,
          "pitch": 0.09302520980440399,
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
          "yaw": 1.1227478791719587,
          "pitch": 0.39565739353470875,
          "rotation": 0,
          "target": "2-3-galeria-parrilla"
        },
        {
          "yaw": -1.0686512522068377,
          "pitch": 0.3810532142773351,
          "rotation": 0,
          "target": "3-4-paso"
        },
        {
          "yaw": -2.031032987968711,
          "pitch": 0.4172487535237721,
          "rotation": 0,
          "target": "0-1-vereda"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-3-galeria-parrilla",
      "name": "3 Galeria Parrilla",
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
          "yaw": -0.01189880928506426,
          "pitch": 0.5661604948012613,
          "rotation": 0,
          "target": "1-2-estar-comedor"
        },
        {
          "yaw": 2.0446990464601225,
          "pitch": 0.11304499355545694,
          "rotation": 0,
          "target": "4-5-dormitorio-principal"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-4-paso",
      "name": "4 Paso",
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
          "yaw": 0.9927225789297651,
          "pitch": 0.7322081448998947,
          "rotation": 0,
          "target": "4-5-dormitorio-principal"
        },
        {
          "yaw": 2.9764000910017154,
          "pitch": 1.2656246721037618,
          "rotation": 0,
          "target": "5-6-dormitorio-2"
        },
        {
          "yaw": 2.5171187703226003,
          "pitch": 0.8496896999030668,
          "rotation": 0,
          "target": "6-7-dormitorio-3"
        },
        {
          "yaw": 2.29489406114525,
          "pitch": 0.5145808573982933,
          "rotation": 0,
          "target": "1-2-estar-comedor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-5-dormitorio-principal",
      "name": "5 Dormitorio Principal",
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
          "yaw": 1.4053993817099126,
          "pitch": 0.8328760065557734,
          "rotation": 0,
          "target": "3-4-paso"
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
          "yaw": 2.841291260907404,
          "pitch": 0.635710869780457,
          "rotation": 0,
          "target": "3-4-paso"
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
          "yaw": -2.462516802422538,
          "pitch": 0.6227534944863962,
          "rotation": 0,
          "target": "3-4-paso"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": false
  }
};
