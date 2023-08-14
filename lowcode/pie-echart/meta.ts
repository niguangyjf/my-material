
import { ComponentMetadata, Snippet } from '@alilc/lowcode-types';

const PieEchartMeta: ComponentMetadata = {
  "componentName": "PieEchart",
  "title": "PieEchart",
  "docUrl": "",
  "screenshot": "",
  "devMode": "proCode",
  "group": "自定义组件",
  "npm": {
    "package": "react-comps",
    "version": "0.1.0",
    "exportName": "PieEchart",
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
            "en-US": "height",
            "zh-CN": "高度"
          },
          "tip": "height | 高度"
        },
        "name": "height",
        "description": "高度",
        "defaultValue": "251",
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
            "en-US": "dataSource",
            "zh-CN": "数据源驱动，如传入 "
          },
          "tip": "dataSource | 数据源驱动，如传入 children，则以 children 优先"
        },
        "name": "dataSource",
        "description": "数据源驱动，如传入 children，则以 children 优先",
        "setter": {
          "componentName": "ArraySetter",
          "props": {
            "itemSetter": {
              "componentName": "MixedSetter",
              "isRequired": false,
              "props": {}
            }
          },
          "initialValue": []
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "titleProps",
            "zh-CN": "titleProps"
          }
        },
        "name": "titleProps",
        "setter": {
          "componentName": "MixedSetter",
          "isRequired": true,
          "props": {}
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "legendProps",
            "zh-CN": "legendProps"
          }
        },
        "name": "legendProps",
        "setter": {
          "componentName": "MixedSetter",
          "isRequired": true,
          "props": {}
        }
      }
    ],
    "supports": {
      "style": true
    },
    "component": {}
  }
};
const snippets: Snippet[] = [
  {
    "title": "PieEchart",
    "screenshot": "",
    "schema": {
      "componentName": "PieEchart",
      "props": {
        "height": "251"
      }
    }
  }
];

export default {
  ...PieEchartMeta,
  snippets
};
