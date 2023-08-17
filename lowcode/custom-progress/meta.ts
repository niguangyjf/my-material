
import { ComponentMetadata, Snippet } from '@alilc/lowcode-types';

const CustomProgressMeta: ComponentMetadata = {
  "componentName": "CustomProgress",
  "title": "CustomProgress",
  "docUrl": "",
  "screenshot": "",
  "devMode": "proCode",
  "group": "自定义组件",
  "npm": {
    "package": "lowcode-comps",
    "version": "0.1.1",
    "exportName": "CustomProgress",
    "main": "src\\index.tsx",
    "destructuring": true,
    "subName": ""
  },
  "configure": {
    "props": [
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "icon",
            "zh-CN": "图标"
          },
          "tip": "icon | 图标"
        },
        "name": "icon",
        "description": "图标",
        "setter": {
          "componentName": "StringSetter",
          "isRequired": true,
          "initialValue": ""
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "label",
            "zh-CN": "标题"
          },
          "tip": "label | 标题"
        },
        "name": "label",
        "description": "标题",
        "setter": {
          "componentName": "StringSetter",
          "isRequired": true,
          "initialValue": ""
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "quota",
            "zh-CN": "额定量"
          },
          "tip": "quota | 额定量"
        },
        "name": "quota",
        "description": "额定量",
        "setter": {
          "componentName": "NumberSetter",
          "isRequired": true,
          "initialValue": 0
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "unit",
            "zh-CN": "单位"
          },
          "tip": "unit | 单位"
        },
        "name": "unit",
        "description": "单位",
        "setter": {
          "componentName": "StringSetter",
          "isRequired": true,
          "initialValue": ""
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "value",
            "zh-CN": "消耗量"
          },
          "tip": "value | 消耗量"
        },
        "name": "value",
        "description": "消耗量",
        "setter": {
          "componentName": "NumberSetter",
          "isRequired": true,
          "initialValue": 0
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "overValue",
            "zh-CN": "超出量"
          },
          "tip": "overValue | 超出量"
        },
        "name": "overValue",
        "description": "超出量",
        "setter": {
          "componentName": "NumberSetter",
          "isRequired": true,
          "initialValue": 0
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "prefixCls",
            "zh-CN": "prefixCls"
          }
        },
        "name": "prefixCls",
        "setter": {
          "componentName": "StringSetter",
          "isRequired": false,
          "initialValue": ""
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "rootClassName",
            "zh-CN": "rootClassName"
          }
        },
        "name": "rootClassName",
        "setter": {
          "componentName": "StringSetter",
          "isRequired": false,
          "initialValue": ""
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "type",
            "zh-CN": "type"
          }
        },
        "name": "type",
        "setter": {
          "componentName": "RadioGroupSetter",
          "props": {
            "dataSource": [
              {
                "label": "line",
                "value": "line"
              },
              {
                "label": "circle",
                "value": "circle"
              },
              {
                "label": "dashboard",
                "value": "dashboard"
              }
            ],
            "options": [
              {
                "label": "line",
                "value": "line"
              },
              {
                "label": "circle",
                "value": "circle"
              },
              {
                "label": "dashboard",
                "value": "dashboard"
              }
            ]
          },
          "initialValue": "line"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "percent",
            "zh-CN": "percent"
          }
        },
        "name": "percent",
        "setter": {
          "componentName": "NumberSetter",
          "isRequired": false,
          "initialValue": 0
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "format",
            "zh-CN": "format"
          }
        },
        "name": "format",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "status",
            "zh-CN": "status"
          }
        },
        "name": "status",
        "setter": {
          "componentName": "SelectSetter",
          "props": {
            "dataSource": [
              {
                "label": "normal",
                "value": "normal"
              },
              {
                "label": "success",
                "value": "success"
              },
              {
                "label": "exception",
                "value": "exception"
              },
              {
                "label": "active",
                "value": "active"
              }
            ],
            "options": [
              {
                "label": "normal",
                "value": "normal"
              },
              {
                "label": "success",
                "value": "success"
              },
              {
                "label": "exception",
                "value": "exception"
              },
              {
                "label": "active",
                "value": "active"
              }
            ]
          },
          "initialValue": "normal"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "showInfo",
            "zh-CN": "showInfo"
          }
        },
        "name": "showInfo",
        "setter": {
          "componentName": "BoolSetter",
          "isRequired": false,
          "initialValue": false
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "strokeWidth",
            "zh-CN": "strokeWidth"
          }
        },
        "name": "strokeWidth",
        "setter": {
          "componentName": "NumberSetter",
          "isRequired": false,
          "initialValue": 0
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "strokeLinecap",
            "zh-CN": "strokeLinecap"
          }
        },
        "name": "strokeLinecap",
        "setter": {
          "componentName": "RadioGroupSetter",
          "props": {
            "dataSource": [
              {
                "label": "butt",
                "value": "butt"
              },
              {
                "label": "square",
                "value": "square"
              },
              {
                "label": "round",
                "value": "round"
              }
            ],
            "options": [
              {
                "label": "butt",
                "value": "butt"
              },
              {
                "label": "square",
                "value": "square"
              },
              {
                "label": "round",
                "value": "round"
              }
            ]
          },
          "initialValue": "butt"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "strokeColor",
            "zh-CN": "strokeColor"
          }
        },
        "name": "strokeColor",
        "setter": {
          "componentName": "MixedSetter",
          "props": {
            "setters": [
              {
                "componentName": "StringSetter",
                "isRequired": false,
                "initialValue": ""
              },
              {
                "componentName": "ArraySetter",
                "props": {
                  "itemSetter": {
                    "componentName": "StringSetter",
                    "isRequired": false,
                    "initialValue": ""
                  }
                },
                "initialValue": []
              },
              {
                "componentName": "ObjectSetter",
                "props": {
                  "config": {
                    "extraSetter": {
                      "componentName": "StringSetter",
                      "isRequired": false,
                      "initialValue": ""
                    }
                  }
                },
                "initialValue": {}
              },
              {
                "componentName": "ObjectSetter",
                "props": {
                  "config": {
                    "extraSetter": {
                      "componentName": "MixedSetter",
                      "isRequired": false,
                      "props": {}
                    }
                  }
                },
                "isRequired": false,
                "initialValue": {}
              }
            ]
          }
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "trailColor",
            "zh-CN": "trailColor"
          }
        },
        "name": "trailColor",
        "setter": {
          "componentName": "StringSetter",
          "isRequired": false,
          "initialValue": ""
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "width",
            "zh-CN": "@deprecate"
          },
          "tip": "width | @deprecated Use `size` instead"
        },
        "name": "width",
        "description": "@deprecated Use `size` instead",
        "setter": {
          "componentName": "NumberSetter",
          "isRequired": false,
          "initialValue": 0
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "success",
            "zh-CN": "success"
          }
        },
        "name": "success",
        "setter": {
          "componentName": "ObjectSetter",
          "props": {
            "config": {
              "items": [
                {
                  "title": {
                    "label": {
                      "type": "i18n",
                      "en-US": "percent",
                      "zh-CN": "percent"
                    }
                  },
                  "name": "percent",
                  "setter": {
                    "componentName": "NumberSetter",
                    "isRequired": false,
                    "initialValue": 0
                  }
                },
                {
                  "title": {
                    "label": {
                      "type": "i18n",
                      "en-US": "progress",
                      "zh-CN": "progress"
                    }
                  },
                  "name": "progress",
                  "setter": {
                    "componentName": "NumberSetter",
                    "isRequired": false,
                    "initialValue": 0
                  }
                },
                {
                  "title": {
                    "label": {
                      "type": "i18n",
                      "en-US": "strokeColor",
                      "zh-CN": "strokeColor"
                    }
                  },
                  "name": "strokeColor",
                  "setter": {
                    "componentName": "StringSetter",
                    "isRequired": false,
                    "initialValue": ""
                  }
                }
              ],
              "extraSetter": {
                "componentName": "MixedSetter",
                "isRequired": false,
                "props": {}
              }
            }
          }
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "gapDegree",
            "zh-CN": "gapDegree"
          }
        },
        "name": "gapDegree",
        "setter": {
          "componentName": "NumberSetter",
          "isRequired": false,
          "initialValue": 0
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "gapPosition",
            "zh-CN": "gapPosition"
          }
        },
        "name": "gapPosition",
        "setter": {
          "componentName": "SelectSetter",
          "props": {
            "dataSource": [
              {
                "label": "top",
                "value": "top"
              },
              {
                "label": "bottom",
                "value": "bottom"
              },
              {
                "label": "left",
                "value": "left"
              },
              {
                "label": "right",
                "value": "right"
              }
            ],
            "options": [
              {
                "label": "top",
                "value": "top"
              },
              {
                "label": "bottom",
                "value": "bottom"
              },
              {
                "label": "left",
                "value": "left"
              },
              {
                "label": "right",
                "value": "right"
              }
            ]
          },
          "initialValue": "top"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "size",
            "zh-CN": "size"
          }
        },
        "name": "size",
        "setter": {
          "componentName": "MixedSetter",
          "props": {
            "setters": [
              {
                "componentName": "NumberSetter",
                "isRequired": false,
                "initialValue": 0
              },
              {
                "componentName": "MixedSetter",
                "props": {}
              },
              {
                "componentName": "RadioGroupSetter",
                "props": {
                  "dataSource": [
                    {
                      "label": "default",
                      "value": "default"
                    },
                    {
                      "label": "small",
                      "value": "small"
                    }
                  ],
                  "options": [
                    {
                      "label": "default",
                      "value": "default"
                    },
                    {
                      "label": "small",
                      "value": "small"
                    }
                  ]
                },
                "initialValue": "default"
              }
            ]
          }
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "steps",
            "zh-CN": "steps"
          }
        },
        "name": "steps",
        "setter": {
          "componentName": "NumberSetter",
          "isRequired": false,
          "initialValue": 0
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "successPercent",
            "zh-CN": "@deprecate"
          },
          "tip": "successPercent | @deprecated Use `success` instead"
        },
        "name": "successPercent",
        "description": "@deprecated Use `success` instead",
        "setter": {
          "componentName": "NumberSetter",
          "isRequired": false,
          "initialValue": 0
        }
      }
    ],
    "supports": {
      "className": true,
      "style": true
    },
    "component": {}
  }
};
const snippets: Snippet[] = [
  {
    "title": "CustomProgress",
    "screenshot": "",
    "schema": {
      "componentName": "CustomProgress",
      "props": {}
    }
  }
];

export default {
  ...CustomProgressMeta,
  snippets
};
