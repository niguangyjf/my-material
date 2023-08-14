
import { ComponentMetadata, Snippet } from '@alilc/lowcode-types';

const CustomEnergyCardMeta: ComponentMetadata = {
  "componentName": "CustomEnergyCard",
  "title": "CustomEnergyCard",
  "docUrl": "",
  "screenshot": "",
  "devMode": "proCode",
  "group": "自定义组件",
  "npm": {
    "package": "react-comps",
    "version": "0.1.0",
    "exportName": "CustomEnergyCard",
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
          "isRequired": false,
          "initialValue": ""
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "dataSource",
            "zh-CN": "数据源"
          },
          "tip": "dataSource | 数据源"
        },
        "name": "dataSource",
        "description": "数据源",
        "setter": {
          "componentName": "MixedSetter",
          "props": {
            "setters": [
              {
                "componentName": "ObjectSetter",
                "props": {
                  "config": {
                    "items": [
                      {
                        "title": {
                          "label": {
                            "type": "i18n",
                            "en-US": "name",
                            "zh-CN": "name"
                          }
                        },
                        "name": "name",
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
                            "zh-CN": "value"
                          }
                        },
                        "name": "value",
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
                                "componentName": "NumberSetter",
                                "isRequired": false,
                                "initialValue": 0
                              }
                            ]
                          },
                          "isRequired": true
                        }
                      },
                      {
                        "title": {
                          "label": {
                            "type": "i18n",
                            "en-US": "unit",
                            "zh-CN": "unit"
                          }
                        },
                        "name": "unit",
                        "setter": {
                          "componentName": "StringSetter",
                          "isRequired": true,
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
              },
              {
                "componentName": "ArraySetter",
                "props": {
                  "itemSetter": {
                    "componentName": "ObjectSetter",
                    "props": {
                      "config": {
                        "items": [
                          {
                            "title": {
                              "label": {
                                "type": "i18n",
                                "en-US": "name",
                                "zh-CN": "name"
                              }
                            },
                            "name": "name",
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
                                "zh-CN": "value"
                              }
                            },
                            "name": "value",
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
                                    "componentName": "NumberSetter",
                                    "isRequired": false,
                                    "initialValue": 0
                                  }
                                ]
                              },
                              "isRequired": true
                            }
                          },
                          {
                            "title": {
                              "label": {
                                "type": "i18n",
                                "en-US": "unit",
                                "zh-CN": "unit"
                              }
                            },
                            "name": "unit",
                            "setter": {
                              "componentName": "StringSetter",
                              "isRequired": true,
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
            "en-US": "columnGap",
            "zh-CN": "列间距"
          },
          "tip": "columnGap | 列间距"
        },
        "name": "columnGap",
        "description": "列间距",
        "defaultValue": "20",
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
        "defaultValue": "20",
        "setter": {
          "componentName": "NumberSetter",
          "isRequired": false,
          "initialValue": 0
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
    "title": "CustomEnergyCard",
    "screenshot": "",
    "schema": {
      "componentName": "CustomEnergyCard",
      "props": {
        "columnGap": "20",
        "rowGap": "20"
      }
    }
  }
];

export default {
  ...CustomEnergyCardMeta,
  snippets
};
