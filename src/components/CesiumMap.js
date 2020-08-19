import React,  { Component } from 'react';
import 'cesium/Source/Widgets/widgets.css'
import '../style/CesiumMap.css'
import { Viewer, 
  Clock, 
  EllipsoidTerrainProvider, 
  WebMercatorProjection, 
  DataSourceCollection, 
  UrlTemplateImageryProvider,
  SceneMode,
  createDefaultImageryProviderViewModels,
  Cartesian3,
  Math,
  createDefaultTerrainProviderViewModels} from "cesium";
  import Menu from './menu/Menu';


class CesiumMap extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      viewer:{}
     }
  }
  componentDidMount(){
    const viewer = new Viewer("cesiumContainer",{
      animation: false, //是否创建动画小器件，左下角仪表
      baseLayerPicker: false, //是否显示图层选择器
      fullscreenButton: false, //是否显示全屏按钮
      geocoder: false, //是否显示geocoder小器件，右上角查询按钮
      homeButton: false, //是否显示Home按钮
      infoBox: false, //是否显示信息框
      sceneModePicker: false, //是否显示3D/2D选择器
      selectionIndicator: false, //是否显示选取指示器组件
      timeline: false, //是否显示时间轴
      navigationHelpButton: false, //是否显示右上角的帮助按钮
      scene3DOnly: true, //如果设置为true，则所有几何图形以3D模式绘制以节约GPU资源
      clock: new Clock(), //用于控制当前时间的时钟对象
      selectedImageryProviderViewModel: undefined, //当前图像图层的显示模型，仅baseLayerPicker设为true有意义
      imageryProviderViewModels: createDefaultImageryProviderViewModels(), //可供BaseLayerPicker选择的图像图层ProviderViewModel数组
      selectedTerrainProviderViewModel: undefined, //当前地形图层的显示模型，仅baseLayerPicker设为true有意义
      terrainProviderViewModels:createDefaultTerrainProviderViewModels(), //可供BaseLayerPicker选择的地形图层ProviderViewModel数组
      terrainProvider: new EllipsoidTerrainProvider(), //地形图层提供者，仅baseLayerPicker设为false有意义
      fullscreenElement: document.body, //全屏时渲染的HTML元素,
      useDefaultRenderLoop: true, //如果需要控制渲染循环，则设为true
      targetFrameRate: undefined, //使用默认render loop时的帧率
      showRenderLoopErrors: false, //如果设为true，将在一个HTML面板中显示错误信息
      automaticallyTrackDataSourceClocks: true, //自动追踪最近添加的数据源的时钟设置
      contextOptions: undefined, //传递给Scene对象的上下文参数（scene.options）
      sceneMode: SceneMode.SCENE3D, //初始场景模式
      mapProjection: new WebMercatorProjection(), //地图投影体系
      dataSources: new DataSourceCollection(),
      imageryProvider: new UrlTemplateImageryProvider({
        url:
          "https://webst02.is.autonavi.com/appmaptile?style=6&x={x}&y={y}&z={z}"
      })
    });
    viewer.scene.camera.setView({
      // 初始化相机经纬度
      destination : new Cartesian3.fromDegrees(104.071738, 30.560983, 10000000),
      orientation: {
          heading : 0,
          pitch : Math.toRadians(-90.0),//从上往下看为-90
          roll : 0
      }
  });
    this.setState({
      viewer: viewer
    })
  }
  viewFlyto(){
    console.log("fly")
  }
  render() { 
    return ( <div id="cesiumContainer">
      <Menu viewFlyto={this.viewFlyto}></Menu>
    </div>);
  }
}
 
export default CesiumMap;