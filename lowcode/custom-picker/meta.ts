
import { ComponentMetadata, Snippet } from '@alilc/lowcode-types';

const CustomPickerMeta: ComponentMetadata = {
  "componentName": "CustomPicker",
  "title": "CustomPicker",
  "docUrl": "",
  "screenshot": "",
  "devMode": "proCode",
  "group": "自定义组件",
  "npm": {
    "package": "react-comps",
    "version": "0.1.0",
    "exportName": "CustomPicker",
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
            "en-US": "selectColor",
            "zh-CN": "选中项颜色"
          },
          "tip": "selectColor | 选中项颜色"
        },
        "name": "selectColor",
        "description": "选中项颜色",
        "setter": {
          "componentName": "StringSetter",
          "isRequired": true,
          "initialValue": ""
        }
      }
    ],
    "supports": {
      "style": true,
      "events": [
        {
          "name": "onPickerChange",
          "description": "选中事件"
        }
      ]
    },
    "component": {}
  }
};
const snippets: Snippet[] = [
  {
    "title": "时间选择器",
    "screenshot": "",
    "schema": {
      "componentName": "CustomPicker",
      "props": {}
    }
  }
];

export default {
  ...CustomPickerMeta,
  snippets
};
