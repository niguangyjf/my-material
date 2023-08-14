
import { ComponentMetadata, Snippet } from '@alilc/lowcode-types';

const borderTypeSetter = {
  type: 'field',
  name: 'textBorderType',
  title: '描边类型',
  extraProps: {
    display: 'inline',
    defaultValue: 'solid'
  },
  setter: [
    {
      componentName: 'SelectSetter',
      initialValue: 'solid',
      props: {
        options: [
          {
            title: 'solid',
            value: 'solid',
          },
          {
            title: 'dashed',
            value: 'dashed',
          },
          {
            title: 'dotted',
            value: 'dotted',
          },
        ],
      },
    },
    'NumberSetter'
  ],
}

const titleStyleSetter = {
  componentName: 'ObjectSetter',
  display: 'inline',
  props: {
    config: {
      items: [
        {
          type: 'field',
          name: 'color',
          title: '文字颜色',
          extraProps: {
            display: 'inline',
            defaultValue: '#323232',
          },
          setter: 'ColorSetter',
        },
        {
          type: 'field',
          name: 'fontStyle',
          title: '字体风格',
          extraProps: {
            display: 'inline',
            defaultValue: 'normal',
          },
          setter: [
            {
              componentName: 'SelectSetter',
              initialValue: 'normal',
              props: {
                options: [
                  {
                    title: 'normal',
                    value: 'normal',
                  },
                  {
                    title: 'italic',
                    value: 'italic',
                  },
                  {
                    title: 'oblique',
                    value: 'oblique',
                  },
                ],
              },
            },
          ],
        },
        {
          type: 'field',
          name: 'fontWeight',
          title: '字体粗细',
          extraProps: {
            display: 'inline',
            defaultValue: 'bolder',
          },
          setter: [
            {
              componentName: 'SelectSetter',
              initialValue: 'bolder',
              props: {
                options: [
                  {
                    title: 'normal',
                    value: 'normal',
                  },
                  {
                    title: 'bold',
                    value: 'bold',
                  },
                  {
                    title: 'bolder',
                    value: 'bolder',
                  },
                  {
                    title: 'lighter',
                    value: 'lighter',
                  },
                  {
                    title: 100,
                    value: 100,
                  },
                  {
                    title: 200,
                    value: 200,
                  },
                  {
                    title: 300,
                    value: 300,
                  },
                  {
                    title: 400,
                    value: 400,
                  }, {
                    title: 500,
                    value: 500,
                  },
                  {
                    title: 600,
                    value: 600,
                  },
                  {
                    title: 700,
                    value: 700,
                  },
                  {
                    title: 800,
                    value: 800,
                  },
                  {
                    title: 900,
                    value: 900,
                  },
                ],
              },
            },
          ],
        },
        {
          type: 'field',
          name: 'fontFamily',
          title: '字体系列',
          extraProps: {
            display: 'inline',
            defaultValue: 'sans-serif',
          },
          setter: 'StringSetter',
        },
        {
          type: 'field',
          name: 'fontSize',
          title: '字体大小',
          extraProps: {
            display: 'inline',
            defaultValue: 18,
          },
          setter: 'NumberSetter',
        },
        {
          type: 'field',
          name: 'lineHeight',
          title: '行高',
          extraProps: {
            display: 'inline',
          },
          setter: 'NumberSetter',
        },
        {
          type: 'field',
          name: 'width',
          title: '宽度',
          extraProps: {
            display: 'inline',
          },
          setter: 'NumberSetter',
        },
        {
          type: 'field',
          name: 'height',
          title: '高度',
          extraProps: {
            display: 'inline',
          },
          setter: 'NumberSetter',
        },
        {
          type: 'field',
          name: 'textBorderColor',
          title: '描边颜色',
          extraProps: {
            display: 'inline',
          },
          setter: 'ColorSetter',
        },
        {
          type: 'field',
          name: 'textBorderWidth',
          title: '描边宽度',
          extraProps: {
            display: 'inline',
          },
          setter: 'NumberSetter',
        },
        borderTypeSetter,
        {
          type: 'field',
          name: 'overflow',
          title: '超出宽度是否截断或者换行',
          extraProps: {
            display: 'inline',
            defaultValue: 'none'
          },
          setter: {
            componentName: 'SelectSetter',
            initialValue: 'none',
            props: {
              options: [
                {
                  title: 'none',
                  value: 'none',
                },
                {
                  title: 'truncate',
                  value: 'truncate',
                },
                {
                  title: 'break',
                  value: 'break',
                },
                {
                  title: 'breakAll',
                  value: 'breakAll',
                },
              ],
            },
          },
        },
        {
          type: 'field',
          name: 'ellipsis',
          title: '末尾显示文本',
          extraProps: {
            display: 'inline',
            defaultValue: '...'
          },
          setter: 'StringSetter',
        },
      ]
    }
  }
}
const zLevelSetter = {
  type: 'field',
  name: 'zlevel',
  title: '图形层级',
  extraProps: {
    display: 'inline',
    defaultValue: 0,
    min: 0
  },
  setter: 'NumberSetter',
}

const positionSetter = [
  {
    type: 'field',
    name: 'left',
    title: '离容器左侧的距离',
    extraProps: {
      display: 'inline',
      defaultValue: 'auto'
    },
    setter: [
      {
        componentName: 'SelectSetter',
        initialValue: 'auto',
        props: {
          options: [
            {
              title: '自适应',
              value: 'auto',
            },
            {
              title: '居左',
              value: 'left',
            },
            {
              title: '居中',
              value: 'center',
            },
            {
              title: '居右',
              value: 'right',
            },
          ],
        }
      },
      "StringSetter",
      "NumberSetter"
    ]
  },
  {
    type: 'field',
    name: 'top',
    title: '离容器上侧的距离',
    extraProps: {
      display: 'inline',
      defaultValue: 'auto'
    },
    setter: [
      {
        componentName: 'SelectSetter',
        initialValue: 'auto',
        props: {
          options: [
            {
              title: '自适应',
              value: 'auto',
            },
            {
              title: '居上',
              value: 'top',
            },
            {
              title: '居中',
              value: 'middle',
            },
            {
              title: '居下',
              value: 'bottom',
            },
          ],
        }
      },
      "StringSetter",
      "NumberSetter"
    ]
  },
  {
    type: 'field',
    name: 'right',
    title: '离容器右侧的距离',
    extraProps: {
      display: 'inline',
      defaultValue: 'auto'
    },
    setter: [
      "StringSetter",
      "NumberSetter"
    ]
  },
  {
    type: 'field',
    name: 'bottom',
    title: '离容器下侧的距离',
    extraProps: {
      display: 'inline',
      defaultValue: 'auto'
    },
    setter: [
      "StringSetter",
      "NumberSetter"
    ]
  },
]
const paddingSetter = {
  type: 'field',
  name: 'padding',
  title: '内边距',
  extraProps: {
    display: 'inline',
    defaultValue: 5
  },
  setter: [
    "NumberSetter",
    {
      componentName: "ArraySetter",
      props: {
        itemSetter: {
          componentName: "NumberSetter",
        }
      }
    },
  ]
}

const EchartMeta: ComponentMetadata = {
  componentName: "Echart",
  title: "Echart",
  docUrl: "",
  screenshot: "",
  devMode: "proCode",
  group: "自定义组件",
  npm: {
    package: "react-comps",
    version: "0.1.0",
    exportName: "Echart",
    main: "src\\index.tsx",
    destructuring: true,
    subName: ""
  },
  configure: {
    props: [
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
              "componentName": "ObjectSetter",
              "props": {
                "config": {
                  "items": [
                    {
                      "title": {
                        "label": {
                          "type": "i18n",
                          "en-US": "label",
                          "zh-CN": "label"
                        }
                      },
                      "name": "label",
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
                        "componentName": "NumberSetter",
                        "isRequired": true,
                        "initialValue": 0
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
      },
      {
        type: 'field',
        name: 'titleProps',
        title: '标题配置',
        extraProps: {
          display: 'accordion',
          defaultCollapsed: true,
        },
        setter: {
          componentName: 'ObjectSetter',
          display: 'inline',
          props: {
            config: {
              items: [
                {
                  type: 'field',
                  name: 'show',
                  title: '标题显隐',
                  extraProps: {
                    display: 'inline',
                    defaultValue: true,
                  },
                  setter: 'BoolSetter',
                },
                {
                  type: 'field',
                  name: 'text',
                  title: '主标题文本',
                  extraProps: {
                    display: 'inline',
                    defaultValue: '',
                  },
                  setter: 'StringSetter',
                },
                {
                  type: 'field',
                  name: 'link',
                  title: '主标题文本超链接',
                  extraProps: {
                    display: 'inline',
                    defaultValue: '',
                  },
                  setter: 'StringSetter',
                },
                {
                  type: 'field',
                  name: 'target',
                  title: '指定窗口打开主标题超链接',
                  extraProps: {
                    display: 'inline',
                  },
                  setter: [
                    {
                      componentName: 'SelectSetter',
                      initialValue: 'blank',
                      props: {
                        options: [
                          {
                            title: '当前窗口打开',
                            value: 'self',
                          },
                          {
                            title: '新窗口打开',
                            value: 'blank',
                          },
                        ],
                      },
                    },
                  ],
                },
                {
                  type: 'field',
                  name: 'textStyle',
                  title: '主标题文本样式',
                  extraProps: {
                    display: 'accordion',
                    defaultCollapsed: true,
                  },
                  setter: titleStyleSetter,
                },
                {
                  type: 'field',
                  name: 'subtext',
                  title: '副标题文本',
                  extraProps: {
                    display: 'inline',
                    defaultValue: '',
                  },
                  setter: 'StringSetter',
                },
                {
                  type: 'field',
                  name: 'sublink',
                  title: '副标题文本超链接',
                  extraProps: {
                    display: 'inline',
                    defaultValue: '',
                  },
                  setter: 'StringSetter',
                },
                {
                  type: 'field',
                  name: 'subtarget',
                  title: '指定窗口打开副标题超链接',
                  extraProps: {
                    display: 'inline',
                  },
                  setter: [
                    {
                      componentName: 'SelectSetter',
                      initialValue: 'blank',
                      props: {
                        options: [
                          {
                            title: '当前窗口打开',
                            value: 'self',
                          },
                          {
                            title: '新窗口打开',
                            value: 'blank',
                          },
                        ],
                      },
                    },
                  ],
                },
                {
                  type: 'field',
                  name: 'subtextStyle',
                  title: '副标题文本样式',
                  extraProps: {
                    display: 'accordion',
                    defaultCollapsed: true,
                  },
                  setter: titleStyleSetter,
                },
                {
                  type: 'field',
                  name: 'textAlign',
                  title: '水平对齐方式',
                  extraProps: {
                    display: 'inline',
                  },
                  setter: [
                    {
                      componentName: 'SelectSetter',
                      initialValue: 'auto',
                      props: {
                        options: [
                          {
                            title: '自适应',
                            value: 'auto',
                          },
                          {
                            title: '左对齐',
                            value: 'left',
                          },
                          {
                            title: '右对齐',
                            value: 'right',
                          },
                          {
                            title: '居中',
                            value: 'center',
                          },
                        ],
                      },
                    },
                  ],
                },
                {
                  type: 'field',
                  name: 'textVerticalAlign',
                  title: '垂直对齐方式',
                  extraProps: {
                    display: 'inline',
                  },
                  setter: [
                    {
                      componentName: 'SelectSetter',
                      initialValue: 'auto',
                      props: {
                        options: [
                          {
                            title: '自适应',
                            value: 'auto',
                          },
                          {
                            title: '居上',
                            value: 'top',
                          },
                          {
                            title: '居下',
                            value: 'bottom',
                          },
                          {
                            title: '居中',
                            value: 'middle',
                          },
                        ],
                      },
                    },
                  ],
                },
                {
                  type: 'field',
                  name: 'triggerEvent',
                  title: '是否触发事件',
                  extraProps: {
                    display: 'inline',
                  },
                  setter: 'BoolSetter',
                },
                paddingSetter,
                {
                  type: 'field',
                  name: 'itemGap',
                  title: '主副标题之间的间距',
                  extraProps: {
                    display: 'inline',
                    defaultValue: 10
                  },
                  setter: 'NumberSetter',
                },
                zLevelSetter,
                ...positionSetter,
                {
                  type: 'field',
                  name: 'backgroundColor',
                  title: '标题背景色',
                  extraProps: {
                    display: 'inline',
                    defaultValue: 'transparent',
                  },
                  setter: 'ColorSetter',
                },
              ],
            },
          },
        },
      },
      {
        type: 'field',
        name: 'legendProps',
        title: '图例配置',
        extraProps: {
          display: 'accordion',
          defaultCollapsed: true,
        },
        setter: {
          componentName: 'ObjectSetter',
          display: 'inline',
          props: {
            config: {
              items: [
                {
                  type: 'field',
                  name: 'type',
                  title: '类型',
                  extraProps: {
                    display: 'inline',
                    // defaultValue: '',
                  },
                  setter: {
                    componentName: 'SelectSetter',
                    props: {
                      options: [
                        {
                          title: '普通图例',
                          value: 'plain',
                        },
                        {
                          title: '滚动图例',
                          value: 'scroll',
                        },
                      ],
                    },
                  },
                },
                {
                  type: 'field',
                  name: 'show',
                  title: '图例显隐',
                  extraProps: {
                    display: 'inline',
                    defaultValue: true,
                  },
                  setter: 'BoolSetter',
                },
                zLevelSetter,
                ...positionSetter,
                {
                  type: 'field',
                  name: 'width',
                  title: '宽度',
                  extraProps: {
                    display: 'inline',
                  },
                  setter: 'NumberSetter',
                },
                {
                  type: 'field',
                  name: 'height',
                  title: '高度',
                  extraProps: {
                    display: 'inline',
                  },
                  setter: 'NumberSetter',
                },
                {
                  type: 'field',
                  name: 'orient',
                  title: '布局朝向',
                  extraProps: {
                    display: 'inline',
                    defaultValue: 'horizontal'
                  },
                  setter: [
                    {
                      componentName: 'SelectSetter',
                      initialValue: 'horizontal',
                      props: {
                        options: [
                          {
                            title: '横向',
                            value: 'horizontal',
                          },
                          {
                            title: '纵向',
                            value: 'top',
                          }
                        ],
                      },
                    },
                  ],
                },
                {
                  type: 'field',
                  name: 'align',
                  title: '图例标记和文本的对齐',
                  extraProps: {
                    display: 'inline',
                    defaultValue: 'auto'
                  },
                  setter: [
                    {
                      componentName: 'SelectSetter',
                      initialValue: 'auto',
                      props: {
                        options: [
                          {
                            title: '自适应',
                            value: 'auto',
                          },
                          {
                            title: '居左',
                            value: 'left',
                          },
                          {
                            title: '居右',
                            value: 'right',
                          }
                        ],
                      },
                    },
                  ],
                },
                paddingSetter,
                {
                  type: 'field',
                  name: 'itemGap',
                  title: '图例之间的间距',
                  extraProps: {
                    display: 'inline',
                    defaultValue: 10
                  },
                  setter: 'NumberSetter',
                },
                {
                  type: 'field',
                  name: 'itemWidth',
                  title: '图例标记的图形宽度',
                  extraProps: {
                    display: 'inline',
                    defaultValue: 25
                  },
                  setter: 'NumberSetter',
                },
                {
                  type: 'field',
                  name: 'itemHeight',
                  title: '图例标记的图形高度',
                  extraProps: {
                    display: 'inline',
                    defaultValue: 14
                  },
                  setter: 'NumberSetter'
                },
                {
                  type: 'field',
                  name: 'itemStyle',
                  title: '图例图形样式',
                  setter: {
                    componentName: 'ObjectSetter',
                    display: 'inline',
                    props: {
                      config: {
                        items: [
                          {
                            type: 'field',
                            name: 'color',
                            title: '图形颜色',
                            extraProps: {
                              display: 'inline',
                              defaultValue: 'inherit'
                            },
                            setter: 'ColorSetter'
                          },
                          {
                            type: 'field',
                            name: 'borderColor',
                            title: '图形描边颜色',
                            extraProps: {
                              display: 'inline',
                              defaultValue: 'inherit'
                            },
                            setter: 'ColorSetter'
                          },
                          {
                            type: 'field',
                            name: 'borderWidth',
                            title: '图形描边宽度',
                            extraProps: {
                              display: 'inline',
                              defaultValue: 'auto'
                            },
                            setter: 'NumberSetter'
                          },
                          borderTypeSetter,
                        ]
                      }
                    }
                  }
                },
                {
                  type: 'field',
                  name: 'lineStyle',
                  title: '图例图形中线的样式',
                  setter: {
                    componentName: 'ObjectSetter',
                    display: 'inline',
                    props: {
                      config: {
                        items: [
                          {
                            type: 'field',
                            name: 'color',
                            title: '图形颜色',
                            extraProps: {
                              display: 'inline',
                              defaultValue: 'inherit'
                            },
                            setter: 'ColorSetter'
                          },
                          {
                            type: 'field',
                            name: 'width',
                            title: '图形描边宽度',
                            extraProps: {
                              display: 'inline',
                              defaultValue: 'auto'
                            },
                            setter: 'NumberSetter'
                          },
                          {
                            type: 'field',
                            name: 'type',
                            title: '线的类型',
                            extraProps: {
                              display: 'inline',
                              defaultValue: 'inherit'
                            },
                            setter: [
                              {
                                componentName: 'SelectSetter',
                                initialValue: 'inherit',
                                props: {
                                  options: [
                                    {
                                      title: '继承',
                                      value: 'inherit'
                                    },
                                    {
                                      title: 'solid',
                                      value: 'solid',
                                    },
                                    {
                                      title: 'dashed',
                                      value: 'dashed',
                                    },
                                    {
                                      title: 'dotted',
                                      value: 'dotted',
                                    },
                                  ],
                                },
                              },
                              'NumberSetter'
                            ],
                          },
                        ]
                      }
                    }
                  }
                },
                {
                  type: 'field',
                  name: 'formatter',
                  title: '格式化图例文本',
                  extraProps: {
                    display: 'inline',
                    defaultValue: ''
                  },
                  setter: [
                    'StringSetter',
                    {
                      componentName: 'FunctionSetter',
                      props: {
                          template: 'onTableChange(value,${extParams}){\n\n}',
                      },
                    }
                  ]
                },
              ],
            },
          },
        },
      },
      {
        type: 'field',
        name: 'gridProps',
        title: '直角坐标系内绘图网格配置',
        extraProps: {
          display: 'accordion',
          defaultCollapsed: true,
        },
        setter: {
          componentName: 'ObjectSetter',
          display: 'inline',
          props: {
            config: {
              items: [
                {
                  type: 'field',
                  name: 'show',
                  title: '显隐',
                  extraProps: {
                    display: 'inline',
                    defaultValue: false,
                  },
                  setter: 'BoolSetter',
                },
                zLevelSetter,
                ...positionSetter,
                {
                  type: 'field',
                  name: 'containLabel',
                  title: 'grid 区域是否包含坐标轴的刻度标签',
                  extraProps: {
                    display: 'inline',
                    defaultValue: false,
                  },
                  setter: 'BoolSetter',
                },
              ],
            },
          },
        },
      },
      {
        type: 'field',
        name: 'xAxisProps',
        title: 'X轴配置',
        extraProps: {
          display: 'accordion',
          defaultCollapsed: true,
        },
        setter: {
          componentName: 'ObjectSetter',
          display: 'inline',
          props: {
            config: {
              items: [
                {
                  type: 'field',
                  name: 'show',
                  title: '显隐',
                  extraProps: {
                    display: 'inline',
                    defaultValue: true,
                  },
                  setter: 'BoolSetter',
                },
                {
                  type: 'field',
                  name: 'data',
                  title: '类目数据',
                  extraProps: {
                    display: 'inline',
                    defaultValue: [],
                  },
                  setter: {
                    componentName: "ArraySetter",
                    props: {
                      itemSetter: [
                        {
                          componentName: "StringSetter"
                        },
                        // {
                        //   componentName: "ObjectSetter",
                        //   props: {
                        //     config: {
                        //       items: [
                        //         {
                        //           title: {
                        //             label: {
                        //               type: "i18n",
                        //               "en-US": "textStyle",
                        //               "zh-CN": "类目标签的文字样式"
                        //             }
                        //           },
                        //           name: "textStyle",
                        //           setter: titleStyleSetter
                        //         },
                        //         {
                        //           title: {
                        //             label: {
                        //               type: "i18n",
                        //               "en-US": "value",
                        //               "zh-CN": "value"
                        //             }
                        //           },
                        //           name: "value",
                        //           setter: {
                        //             componentName: "NumberSetter",
                        //             isRequired: true,
                        //             initialValue: 0
                        //           }
                        //         }
                        //       ],
                        //       extraSetter: {
                        //         componentName: "MixedSetter",
                        //         isRequired: false,
                        //         props: {}
                        //       }
                        //     }
                        //   }
                        // }
                      ]
                    },
                    "initialValue": []
                  }
                },
              ],
            },
          },
        },
      },
      {
        type: 'field',
        name: 'yAxisProps',
        title: 'Y轴配置',
        extraProps: {
          display: 'accordion',
          defaultCollapsed: true,
        },
        setter: {
          componentName: 'ObjectSetter',
          display: 'inline',
          props: {
            config: {
              items: [
                {
                  type: 'field',
                  name: 'show',
                  title: '显隐',
                  extraProps: {
                    display: 'inline',
                    defaultValue: true,
                  },
                  setter: 'BoolSetter',
                },
                {
                  type: 'field',
                  name: 'data',
                  title: '类目数据',
                  extraProps: {
                    display: 'inline',
                    defaultValue: [],
                  },
                  setter: {
                    componentName: "ArraySetter",
                    props: {
                      itemSetter: [
                        {
                          componentName: "StringSetter"
                        },
                      ]
                    },
                    "initialValue": []
                  }
                },
              ],
            },
          },
        },
      },
      {
        type: 'field',
        name: 'tooltipProps',
        title: '提示框组件配置',
        extraProps: {
          display: 'accordion',
          defaultCollapsed: true,
        },
        setter: {
          componentName: 'ObjectSetter',
          display: 'inline',
          props: {
            config: {
              items: [
                {
                  type: 'field',
                  name: 'show',
                  title: '显隐',
                  extraProps: {
                    display: 'inline',
                    defaultValue: true,
                  },
                  setter: 'BoolSetter',
                },
                {
                  type: 'field',
                  name: 'confine',
                  title: '是否将 tooltip 框限制在图表的区域内',
                  extraProps: {
                    display: 'inline',
                    defaultValue: false,
                  },
                  setter: 'BoolSetter',
                },
                {
                  type: 'field',
                  name: 'formatter',
                  title: '提示框浮层内容格式器',
                  extraProps: {
                    display: 'inline',
                  },
                  setter: ["StringSetter", "FunctionSetter"],
                },
              ],
            },
          },
        },
      },
      {
        type: 'field',
        name: 'seriesProps',
        title: '图表数据配置',
        extraProps: {
          display: 'accordion',
          defaultCollapsed: false,
        },
        setter: [
          {
            componentName: 'ObjectSetter',
            display: 'inline',
            props: {
              config: {
                items: [
                  {
                    type: 'field',
                    name: 'type',
                    title: '图表类型',
                    extraProps: {
                      display: 'inline',
                      defaultValue: 'line',
                    },
                    setter: {
                      componentName: 'SelectSetter',
                      props: {
                        options: [
                          {
                            title: '柱状图',
                            value: 'bar',
                          },
                          {
                            title: '折线图',
                            value: 'line',
                          },
                          {
                            title: '饼图',
                            value: 'pie',
                          }
                        ],
                      }
                    }
                  },
                  {
                    type: 'field',
                    name: 'name',
                    title: '系列名称',
                    extraProps: {
                      display: 'inline',
                      defaultValue: '',
                    },
                    setter: 'StringSetter',
                  },
                  {
                    type: 'field',
                    name: 'data',
                    title: '系列中的数据内容数组',
                    extraProps: {
                      display: 'inline',
                    },
                    setter: {
                      componentName: "ArraySetter",
                      props: {
                        itemSetter: {
                          componentName: "NumberSetter",
                        }
                      }
                    },
                  },
                ],
              },
            },
          },
          "FunctionSetter"
        ],
      },
    ],
    "supports": {
      "style": true
    },
    "component": {}
  }
};
const snippets: Snippet[] = [
  {
    "title": "Echart",
    "screenshot": "",
    "schema": {
      "componentName": "Echart",
      "props": {
        "height": "251"
      }
    }
  }
];

export default {
  ...EchartMeta,
  snippets
};
