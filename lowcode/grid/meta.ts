
import { ComponentMetadata, Snippet } from '@alilc/lowcode-types';

const GridMeta: ComponentMetadata = {
  "componentName": "Grid",
  "title": "布局",
  "docUrl": "",
  "screenshot": "",
  "devMode": "proCode",
  "group": "自定义组件",
  "npm": {
    "package": "lowcode-comps",
    "version": "0.1.1",
    "exportName": "Grid",
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
            "en-US": "splot",
            "zh-CN": "插槽区"
          },
          "tip": "splot | 插槽区"
        },
        "name": "splot",
        "description": "插槽区",
        "setter": {
          "componentName": "SlotSetter",
          "props": {
            "mode": "node"
          },
          "isRequired": false,
          "initialValue": {
            "type": "JSSlot",
            "value": []
          }
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "cols",
            "zh-CN": "子元素分几列展示，如"
          },
          "tip": "cols | 子元素分几列展示，如果不设置就会自动开启响应式模式"
        },
        "name": "cols",
        "description": "子元素分几列展示，如果不设置就会自动开启响应式模式",
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
            "en-US": "area",
            "zh-CN": "快速描述子元素布局"
          },
          "tip": "area | 快速描述子元素布局"
        },
        "name": "area",
        "description": "快速描述子元素布局",
        "setter": {
          "componentName": "MixedSetter",
          "props": {
            "setters": [
              {
                "componentName": "ArraySetter",
                "props": {
                  "itemSetter": {
                    "componentName": "NumberSetter",
                    "isRequired": false,
                    "initialValue": 0
                  }
                },
                "initialValue": []
              },
              {
                "componentName": "ArraySetter",
                "props": {
                  "itemSetter": {
                    "componentName": "MixedSetter",
                    "props": {}
                  }
                },
                "initialValue": []
              },
              {
                "componentName": "ArraySetter",
                "props": {
                  "itemSetter": {
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
                        }
                      ]
                    }
                  }
                },
                "initialValue": []
              }
            ]
          }
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "columnGap",
            "zh-CN": "列间距"
          },
          "tip": "columnGap | 列间距"
        },
        "name": "columnGap",
        "description": "列间距",
        "defaultValue": 20,
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
            "en-US": "rowGap",
            "zh-CN": "行间距"
          },
          "tip": "rowGap | 行间距"
        },
        "name": "rowGap",
        "description": "行间距",
        "defaultValue": 20,
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
            "en-US": "responsive",
            "zh-CN": "是否开启响应式模式"
          },
          "tip": "responsive | 是否开启响应式模式"
        },
        "name": "responsive",
        "description": "是否开启响应式模式",
        "defaultValue": false,
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
            "en-US": "onColumnChange",
            "zh-CN": "响应式导致列发生改变"
          },
          "tip": "onColumnChange | 响应式导致列发生改变的时候的回调"
        },
        "name": "onColumnChange",
        "description": "响应式导致列发生改变的时候的回调",
        "defaultValue": "() => {}",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "gridItemStyle",
            "zh-CN": "子元素的样式控制"
          },
          "tip": "gridItemStyle | 子元素的样式控制"
        },
        "name": "gridItemStyle",
        "description": "子元素的样式控制",
        "setter": {
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
      }
    ],
    "supports": {
      "className": true,
      "style": true
    },
    "component": {
      isContainer: true
    }
  }
};
const snippets: Snippet[] = [
  {
    "title": "Grid",
    "screenshot": "",
    "schema": {
      "componentName": "Grid",
      "props": {
        "columnGap": 20,
        "rowGap": 20,
        "onColumnChange": "() => {}"
      }
    }
  }
];

export default {
  ...GridMeta,
  snippets
};
