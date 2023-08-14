
import { ComponentMetadata, Snippet } from '@alilc/lowcode-types';

const EnergyBoardSearchFormMeta: ComponentMetadata = {
  "componentName": "EnergyBoardSearchForm",
  "title": "EnergyBoardSearchForm",
  "docUrl": "",
  "screenshot": "",
  "devMode": "proCode",
  "group": "自定义组件",
  "npm": {
    "package": "react-comps",
    "version": "0.1.0",
    "exportName": "EnergyBoardSearchForm",
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
            "en-US": "onChange",
            "zh-CN": "表单事件"
          },
          "tip": "onChange | 表单事件"
        },
        "name": "onChange",
        "description": "表单事件",
        "setter": {
          "componentName": "FunctionSetter"
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
        "setter": {
          "componentName": "StringSetter",
          "isRequired": false,
          "initialValue": ""
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
    "title": "EnergyBoardSearchForm",
    "screenshot": "",
    "schema": {
      "componentName": "EnergyBoardSearchForm",
      "props": {}
    }
  }
];

export default {
  ...EnergyBoardSearchFormMeta,
  snippets
};
