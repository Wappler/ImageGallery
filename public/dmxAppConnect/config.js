dmx.config({
  "galleries": {
    "ddGallery": {
      "meta": [
        {
          "type": "number",
          "name": "id"
        },
        {
          "type": "text",
          "name": "gallery"
        },
        {
          "type": "text",
          "name": "description"
        },
        {
          "name": "images",
          "type": "array",
          "sub": [
            {
              "type": "number",
              "name": "id"
            },
            {
              "type": "text",
              "name": "image"
            },
            {
              "type": "number",
              "name": "index"
            },
            {
              "type": "number",
              "name": "gallery_id"
            }
          ]
        }
      ],
      "outputType": "array"
    },
    "ddImage": {
      "meta": [
        {
          "type": "number",
          "name": "id"
        },
        {
          "type": "text",
          "name": "image"
        },
        {
          "type": "number",
          "name": "index"
        },
        {
          "type": "number",
          "name": "gallery_id"
        }
      ],
      "outputType": "array"
    }
  },
  "index": {
    "repeatGalleries": {
      "meta": [
        {
          "type": "number",
          "name": "id"
        },
        {
          "type": "text",
          "name": "gallery"
        },
        {
          "type": "text",
          "name": "description"
        },
        {
          "name": "images",
          "type": "array",
          "sub": [
            {
              "type": "number",
              "name": "id"
            },
            {
              "type": "text",
              "name": "image"
            },
            {
              "type": "number",
              "name": "index"
            },
            {
              "type": "number",
              "name": "gallery_id"
            }
          ]
        }
      ],
      "outputType": "array"
    }
  },
  "gallery": {
    "dvGallery": {
      "meta": [
        {
          "type": "number",
          "name": "id"
        },
        {
          "type": "text",
          "name": "gallery"
        },
        {
          "type": "text",
          "name": "description"
        },
        {
          "name": "images",
          "type": "array",
          "sub": [
            {
              "type": "number",
              "name": "id"
            },
            {
              "type": "text",
              "name": "image"
            },
            {
              "type": "number",
              "name": "gallery_id"
            }
          ]
        }
      ],
      "outputType": "array"
    },
    "query": [
      {
        "type": "number",
        "name": "id"
      }
    ],
    "repeatImages": {
      "meta": [
        {
          "type": "number",
          "name": "id"
        },
        {
          "type": "text",
          "name": "image"
        },
        {
          "type": "number",
          "name": "gallery_id"
        }
      ],
      "outputType": "array"
    }
  },
  "main": {
    "query": [
      {
        "type": "text",
        "name": "id"
      }
    ]
  }
});
