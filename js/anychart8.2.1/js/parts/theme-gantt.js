if(!_.theme_gantt){_.theme_gantt=1;(function($){$.ta($.ea.anychart.themes.defaultTheme,{defaultDataGrid:{isStandalone:!0,headerHeight:25,backgroundFill:"none",columnStroke:"#cecece",rowHoverFill:$.kH,rowSelectedFill:$.kH,rowStroke:"#cecece",rowOddFill:"#fff",rowEvenFill:"#fff",rowFill:"#fff",onEditStart:function(){return 1>this.columnIndex?{cancelEdit:!0}:{value:this.value}},onEditEnd:function(){return 1==this.columnIndex?{itemMap:{name:this.value}}:{cancelEdit:!0}},buttons:{size:15,padding:[0,0,0,0],cursor:"pointer",normal:{hAlign:"center",vAlign:"middle",
fontColor:"#7c868e",fontSize:"10px"},collapsed:{hAlign:"center",vAlign:"middle",text:"+"},expanded:{hAlign:"center",vAlign:"middle",text:"-"}},zIndex:5,editing:!1,editStructurePreviewFill:{color:"#4285F4",opacity:.2},editStructurePreviewStroke:{color:"#4285F4",thickness:2},editStructurePreviewDashStroke:{color:"#4285F4",dash:"4 4"},headerFill:"#f7f7f7",tooltip:{padding:5,title:{enabled:!0,fontSize:"14px",fontWeight:"normal",fontColor:"#e5e5e5"},separator:{enabled:!0},format:"{%name}"},defaultColumnSettings:{width:90,
buttonCursor:"pointer",labels:{enabled:!0,wordBreak:"break-all",anchor:"left-top",vAlign:"middle",padding:{top:0,right:5,bottom:0,left:5},background:null,fontSize:11,disablePointerEvents:!0},depthPaddingMultiplier:0,collapseExpandButtons:!1,title:{enabled:!0,margin:0,vAlign:"middle",hAlign:"center",background:{enabled:!1},wordWrap:"normal",wordBreak:"normal"}},columns:[{width:50,labels:{format:"{%linearIndex}"},title:{text:"#"}},{width:170,collapseExpandButtons:!0,depthPaddingMultiplier:15,labels:{format:"{%name}"},
title:{text:"Name"}}]},defaultTimeline:{isStandalone:!0,columnStroke:"#cecece",backgroundFill:"none",rowHoverFill:$.kH,rowSelectedFill:$.kH,rowStroke:"#cecece",rowOddFill:"#fff",rowEvenFill:"#fff",rowFill:"#fff",zIndex:5,headerHeight:70,editing:!1,connectorPreviewStroke:{color:"#545f69",dash:"3 3"},editPreviewFill:{color:"#fff",opacity:1E-5},editPreviewStroke:{color:"#aaa",dash:"3 3"},editProgressFill:"#EAEAEA",editProgressStroke:"#545f69",editIntervalThumbFill:"#EAEAEA",editIntervalThumbStroke:"#545f69",
editConnectorThumbFill:"#EAEAEA",editConnectorThumbStroke:"#545f69",editStructurePreviewFill:{color:"#4285F4",opacity:.2},editStructurePreviewStroke:{color:"#4285F4",thickness:2},editStructurePreviewDashStroke:{color:"#4285F4",dash:"4 4"},editStartConnectorMarkerType:"circle",editStartConnectorMarkerSize:10,editStartConnectorMarkerHorizontalOffset:0,editStartConnectorMarkerVerticalOffset:0,editFinishConnectorMarkerType:"circle",editFinishConnectorMarkerSize:10,editFinishConnectorMarkerHorizontalOffset:0,
editFinishConnectorMarkerVerticalOffset:0,editIntervalWidth:3,elements:{anchor:"auto",position:"left-center",offset:0,height:"70%",normal:{fill:$.kH,stroke:$.kH},selected:{fill:$.kH,stroke:$.kH},labels:{enabled:null},rendering:{drawer:function(){$.XA.vector.primitives.roundedRect(this.shapes.path,this.predictedBounds,0)},shapes:[{name:"path",shapeType:"path",zIndex:10,disablePointerEvents:!1}]}},tasks:{progress:{height:"100%",anchor:"left-center",rendering:{shapes:[{name:"path",shapeType:"path",zIndex:11,
disablePointerEvents:!0}]}}},groupingTasks:{rendering:{drawer:function(){var a=this.predictedBounds,b=a.left+a.width,c=a.top+a.height,d=a.top+1.4*a.height;this.shapes.path.moveTo(a.left,a.top).lineTo(b,a.top).lineTo(b,d).lineTo(b-1,d).lineTo(b-1,c).lineTo(a.left+1,c).lineTo(a.left+1,d).lineTo(a.left,d).close()}}},milestones:{rendering:{drawer:function(){var a=this.predictedBounds,b=a.width/2;$.XA.vector.primitives.diamond(this.shapes.path,a.left+b,a.top+b,b)}}},baselines:{above:!1},connectors:{normal:{fill:$.kH,
stroke:$.kH},selected:{fill:$.kH,stroke:$.kH}},tooltip:{padding:5,title:{enabled:!0,fontSize:"14px",fontWeight:"normal",fontColor:"#e5e5e5"},separator:{enabled:!0},zIndex:100},labels:{enabled:!0,anchor:"left-center",position:"right-center",padding:{top:3,right:5,bottom:3,left:5},vAlign:"middle",background:null,fontSize:11,zIndex:40,disablePointerEvents:!0},markers:{anchor:"center-top",zIndex:50,type:"star5",fill:"#ff0",stroke:"2 red"},defaultLineMarkerSettings:{layout:"vertical",zIndex:1.5},defaultRangeMarkerSettings:{layout:"vertical",
zIndex:1},defaultTextMarkerSettings:{layout:"vertical",zIndex:2},header:{background:{enabled:!1,fill:"#f7f7f7"},fill:"#f7f7f7",stroke:"#cecece",anchor:"left-top",fontSize:10,vAlign:"middle",holidays:{padding:{}},padding:{top:0,right:5,bottom:0,left:5},disablePointerEvents:!0}},ganttBase:{defaultRowHoverFill:"#f8fafb",defaultRowSelectedFill:"#ebf1f4",splitterPosition:"30%",headerHeight:70,rowStroke:"#cecece",rowHoverFill:$.kH,rowSelectedFill:$.kH,editing:!1,title:{enabled:!1},legend:{enabled:!1},background:{fill:"#fff"},
margin:0,padding:0,dataGrid:{isStandalone:!1,backgroundFill:"none",tooltip:{zIndex:100}},timeline:{isStandalone:!1,labels:{padding:[0,4,0,4]},header:{enabled:!0,overlay:{enabled:!1},textOverflow:"",stroke:"#ccc",padding:[0,5,0,5],fontSize:10,vAlign:"middle",hAlign:"center",drawTopLine:!1,drawRightLine:!1,drawBottomLine:!1,drawLeftLine:!1}}},ganttResource:{dataGrid:{tooltip:{titleFormat:"{%Name}",format:"Start Date: {%start}\nEnd Date: {%end}"}},timeline:{tooltip:{titleFormat:"{%Name}",format:"Start Date: {%start}\nEnd Date: {%end}"},
labels:{format:"Progress Label",position:"center",anchor:"center",enabled:!1}}},ganttProject:{dataGrid:{tooltip:{titleFormat:"{%Name}",format:"Start Date: {%actualStart}\nEnd Date: {%actualEnd}\nComplete: {%progress}"}},timeline:{tooltip:{titleFormat:"{%Name}",format:"Start Date: {%actualStart}\nEnd Date: {%actualEnd}\nComplete: {%progress}"},elements:{labels:{format:"{%Progress}",position:"right-center",anchor:"left-center",enabled:null}},tasks:{progress:{labels:{format:"{%Progress}",enabled:!1}}},
groupingTasks:{progress:{labels:{format:"{%Progress}",enabled:!1}}},baselines:{labels:{position:"right-center",anchor:"left-center",format:"Baseline Label",enabled:!1}},milestones:{labels:{format:"{%Name}",anchor:"left-center",position:"right-center",enabled:null}}}}});
$.ta($.ea.anychart.themes.defaultTheme.standalones,{projectTimeline:{tooltip:{titleFormat:"{%Name}",format:"Start Date: {%actualStart}\nEnd Date: {%actualEnd}\nComplete: {%progress}"}},resourceTimeline:{tooltip:{titleFormat:"{%Name}",format:"Start Date: {%start}\nEnd Date: {%end}"}},dataGrid:{enabled:!0,zIndex:0}});}).call(this,$)}