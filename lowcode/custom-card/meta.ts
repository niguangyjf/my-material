
import { ComponentMetadata, Snippet } from '@alilc/lowcode-types';

const CustomCardMeta: ComponentMetadata = {
  "componentName": "CustomCard",
  "title": "自定义卡片",
  "docUrl": "",
  "screenshot": "",
  "devMode": "proCode",
  "group": "自定义组件",
  "npm": {
    "package": "lowcode-comps",
    "version": "0.1.1",
    "exportName": "CustomCard",
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
            "en-US": "headStyle",
            "zh-CN": "头部的样式"
          },
          "tip": "headStyle | 头部的样式"
        },
        "name": "headStyle",
        "description": "头部的样式",
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
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "bodyStyle",
            "zh-CN": "内容区的样式"
          },
          "tip": "bodyStyle | 内容区的样式"
        },
        "name": "bodyStyle",
        "description": "内容区的样式",
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
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "title",
            "zh-CN": "标题"
          },
          "tip": "title | 标题"
        },
        "name": "title",
        "description": "标题",
        "defaultValue": "title",
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
            "mode": "node",
          },
          "isRequired": false,
          "initialValue": {
            "type": "JSSlot",
            "value": [{componentName:"Box"}]
          }
        }
      },
      // {
      //   "title": {
      //     "label": {
      //       "type": "i18n",
      //       "en-US": "slot",
      //       "zh-CN": "插槽区"
      //     },
      //     "tip": "slot | 插槽区"
      //   },
      //   "name": "slot",
      //   "description": "插槽区",
      //   "setter": {
      //     "componentName": "SlotSetter",
      //     "props": {
      //       "mode": "node"
      //     },
      //     "isRequired": false,
      //     "initialValue": {
      //       "type": "JSSlot",
      //       "value": []
      //     }
      //   }
      // },
    ],
    "supports": {
      "style": true
    },
    "component": {
      isContainer: true
    }
  }
};
const snippets: Snippet[] = [
  {
    "title": "自定义卡片",
    "screenshot": "",
    "schema": {
      "componentName": "CustomCard",
      "props": {
        "title": "title"
      }
    }
  }
];

export default {
  ...CustomCardMeta,
  snippets
};
