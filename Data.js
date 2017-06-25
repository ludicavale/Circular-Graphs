function init() {
    root = {
 label: "flare", children: [ {
   label: "analytics", children: [ {
     label: "cluster", children: [
      {label: "AgglomerativeCluster", x:0,y:0, data:0,leaves:1,height:2, children:[], size: 3938},
      {label: "CommunityStructure", x:0,y:0, data:0,leaves:1,height:2, children:[], size: 3812},
      {label: "HierarchicalCluster", x:0,y:0, data:0,leaves:1,height:2, children:[], size: 6714},
      {label: "MergeEdge", x:0,y:0, data:0,leaves:1,height:2, children:[], size: 743}
     ], x:0,y:0, data:0,leaves:4,height:3,
    },
    {
     label: "graph", children: [
      {label: "BetweennessCentrality", x:0,y:0, data:0,leaves:1,height:2, children:[], size: 3534},
      {label: "LinkDistance", x:0,y:0, data:0,leaves:1,height:2, children:[], size: 5731},
      {label: "MaxFlowMinCut", x:0,y:0, data:0,leaves:1,height:2, children:[], size: 7840},
      {label: "ShortestPaths", x:0,y:0, data:0,leaves:1,height:2, children:[], size: 5914},
      {label: "SpanningTree", x:0,y:0, data:0,leaves:1,height:2, children:[], size: 3416}
     ], x:0,y:0, data:0,leaves:4,height:3,
    },
    {
     label: "optimization", children: [
      {label: "AspectRatioBanker", x:0,y:0, data:0,leaves:1,height:1, children:[], size: 7074}
     ], x:0,y:0, data:0,leaves:1,height:2,
    }
   ], x:0,y:0, data:0,leaves:9,height:3, //9
  },
  {
   label: "animate",
   children: [
    {label: "Easing", x:0,y:0, data:0,leaves:1,height:2, children:[], size: 17010},
    {label: "FunctionSequence", x:0,y:0, data:0,leaves:1,height:2, children:[], size: 5842},
    {
     label: "interpolate",
     children: [
      {label: "ArrayInterpolator", x:0,y:0, data:0,leaves:1,height:1, children:[], size: 1983},
      {label: "ColorInterpolator", x:0,y:0, data:0,leaves:1,height:1, children:[], size: 2047},
      {label: "DateInterpolator", x:0,y:0, data:0,leaves:1,height:1, children:[], size: 1375},
      {label: "Interpolator", x:0,y:0, data:0,leaves:1,height:1, children:[], size: 8746},
      {label: "MatrixInterpolator", x:0,y:0, data:0,leaves:1,height:1, children:[], size: 2202},
      {label: "NumberInterpolator", x:0,y:0, data:0,leaves:1,height:1, children:[], size: 1382},
      {label: "ObjectInterpolator", x:0,y:0, data:0,leaves:1,height:1, children:[], size: 1629},
      {label: "PointInterpolator", x:0,y:0, data:0,leaves:1,height:1, children:[], size: 1675},
      {label: "RectangleInterpolator", x:0,y:0, data:0,leaves:1,height:1, children:[], size: 2042}
     ], x:0,y:0, data:0,leaves:9,height:2,
    },
    {label: "ISchedulable", x:0,y:0, data:0,leaves:1,height:2, children:[], size: 1041},
    {label: "Parallel", x:0,y:0, data:0,leaves:1,height:2, children:[], size: 5176},
    {label: "Pause", x:0,y:0, data:0,leaves:1,height:2, children:[], size: 449},
    {label: "Scheduler", x:0,y:0, data:0,leaves:1,height:2, children:[], size: 5593},
    {label: "Sequence", x:0,y:0, data:0,leaves:1,height:2, children:[], size: 5534},
    {label: "Transition", x:0,y:0, data:0,leaves:1,height:2, children:[], size: 9201},
    {label: "Transitioner", x:0,y:0, data:0,leaves:1,height:2, children:[], size: 19975},
    {label: "TransitionEvent", x:0,y:0, data:0,leaves:1,height:2, children:[], size: 1116},
    {label: "Tween", x:0,y:0, data:0,leaves:1,height:2, children:[], size: 6006}
   ], x:0,y:0, data:0,leaves:18,height:3,
  }, //27
  {
   label: "data",
   children: [
    {
     label: "converters",
     children: [
      {label: "Converters", x:0,y:0, data:0,leaves:1,height:1, children:[], size: 721},
      {label: "DelimitedTextConverter", x:0,y:0, data:0,leaves:1,height:1, children:[], size: 4294},
      {label: "GraphMLConverter", x:0,y:0, data:0,leaves:1,height:1, children:[], size: 9800},
      {label: "IDataConverter", x:0,y:0, data:0,leaves:1,height:1, children:[], size: 1314},
      {label: "JSONConverter", x:0,y:0, data:0,leaves:1,height:1, children:[], size: 2220}
     ], x:0,y:0, data:0,leaves:5,height:2,
    },
    {label: "DataField", x:0,y:0, data:0,leaves:1,height:2, children:[], size: 1759},
    {label: "DataSchema", x:0,y:0, data:0,leaves:1,height:2, children:[], size: 2165},
    {label: "DataSet", x:0,y:0, data:0,leaves:1,height:2, children:[], size: 586},
    {label: "DataSource", x:0,y:0, data:0,leaves:1,height:2, children:[], size: 3331},
    {label: "DataTable", x:0,y:0, data:0,leaves:1,height:2, children:[], size: 772},
    {label: "DataUtil", x:0,y:0, data:0,leaves:1,height:2, children:[], size: 3322}
   ], x:0,y:0, data:0,leaves:11,height:3,
  },//38
  {
   label: "display",
   children: [
    {label: "DirtySprite", x:0,y:0, data:0,leaves:1,height:2, children:[], size: 8833},
    {label: "LineSprite", x:0,y:0, data:0,leaves:1,height:2, children:[], size: 1732},
    {label: "RectSprite", x:0,y:0, data:0,leaves:1,height:2, children:[], size: 3623},
    {label: "TextSprite", x:0,y:0, data:0,leaves:1,height:2, children:[], size: 10066}
   ], x:0,y:0, data:0,leaves:4,height:3,
  },//42
  {
   label: "flex",
   children: [
    {label: "FlareVis", x:0,y:0, data:0,leaves:1,height:2, children:[], size: 4116}
   ], x:0,y:0, data:0,leaves:1,height:3,
  },//43
  {
   label: "physics",
   children: [
    {label: "DragForce", x:0,y:0, data:0,leaves:1,height:2, children:[], size: 1082},
    {label: "GravityForce", x:0,y:0, data:0,leaves:1,height:2, children:[], size: 1336},
    {label: "IForce", x:0,y:0, data:0,leaves:1,height:2, children:[], size: 319},
    {label: "NBodyForce", x:0,y:0, data:0,leaves:1,height:2, children:[], size: 10498},
    {label: "Particle", x:0,y:0, data:0,leaves:1,height:2, children:[], size: 2822},
    {label: "Simulation", x:0,y:0, data:0,leaves:1,height:2, children:[], size: 9983},
    {label: "Spring", x:0,y:0, data:0,leaves:1,height:2, children:[], size: 2213},
    {label: "SpringForce", x:0,y:0, data:0,leaves:1,height:2, children:[], size: 1681}
   ], x:0,y:0, data:0,leaves:8,height:3,
  },//51
  {
   label: "query",
   children: [
    {label: "AggregateExpression", x:0,y:0, data:0,leaves:1,height:2, children:[], size: 1616},
    {label: "And", x:0,y:0, data:0,leaves:1,height:2, children:[], size: 1027},
    {label: "Arithmetic", x:0,y:0, data:0,leaves:1,height:2, children:[], size: 3891},
    {label: "Average", x:0,y:0, data:0,leaves:1,height:2, children:[], size: 891},
    {label: "BinaryExpression", x:0,y:0, data:0,leaves:1,height:2, children:[], size: 2893},
    {label: "Comparison", x:0,y:0, data:0,leaves:1,height:2, children:[], size: 5103},
    {label: "CompositeExpression", x:0,y:0, data:0,leaves:1,height:2, children:[], size: 3677},
    {label: "Count", x:0,y:0, data:0,leaves:1,height:2, children:[], size: 781},
    {label: "DateUtil", x:0,y:0, data:0,leaves:1,height:2, children:[], size: 4141},
    {label: "Distinct", x:0,y:0, data:0,leaves:1,height:2, children:[], size: 933},
    {label: "Expression", x:0,y:0, data:0,leaves:1,height:2, children:[], size: 5130},
    {label: "ExpressionIterator", x:0,y:0, data:0,leaves:1,height:2, children:[], size: 3617},
    {label: "Fn", x:0,y:0, data:0,leaves:1,height:2, children:[], size: 3240},
    {label: "If", x:0,y:0, data:0,leaves:1,height:2, children:[], size: 2732},
    {label: "IsA", x:0,y:0, data:0,leaves:1,height:2, children:[], size: 2039},
    {label: "Literal", x:0,y:0, data:0,leaves:1,height:2, children:[], size: 1214},
    {label: "Match", x:0,y:0, data:0,leaves:1,height:2, children:[], size: 3748},
    {label: "Maximum", x:0,y:0, data:0,leaves:1,height:2, children:[], size: 843},
    {
     label: "methods",
     children: [
      {label: "add", x:0,y:0, data:0,leaves:1,height:1, children:[], size: 593},
      {label: "and", x:0,y:0, data:0,leaves:1,height:1, children:[], size: 330},
      {label: "average", x:0,y:0, data:0,leaves:1,height:1, children:[], size: 287},
      {label: "count", x:0,y:0, data:0,leaves:1,height:1, children:[], size: 277},
      {label: "distinct", x:0,y:0, data:0,leaves:1,height:1, children:[], size: 292},
      {label: "div", x:0,y:0, data:0,leaves:1,height:1, children:[], size: 595},
      {label: "eq", x:0,y:0, data:0,leaves:1,height:1, children:[], size: 594},
      {label: "fn", x:0,y:0, data:0,leaves:1,height:1, children:[], size: 460},
      {label: "gt", x:0,y:0, data:0,leaves:1,height:1, children:[], size: 603},
      {label: "gte", x:0,y:0, data:0,leaves:1,height:1, children:[], size: 625},
      {label: "iff", x:0,y:0, data:0,leaves:1,height:1, children:[], size: 748},
      {label: "isa", x:0,y:0, data:0,leaves:1,height:1, children:[], size: 461},
      {label: "lt", x:0,y:0, data:0,leaves:1,height:1, children:[], size: 597},
      {label: "lte", x:0,y:0, data:0,leaves:1,height:1, children:[], size: 619},
      {label: "max", x:0,y:0, data:0,leaves:1,height:1, children:[], size: 283},
      {label: "min", x:0,y:0, data:0,leaves:1,height:1, children:[], size: 283},
      {label: "mod", x:0,y:0, data:0,leaves:1,height:1, children:[], size: 591},
      {label: "mul", x:0,y:0, data:0,leaves:1,height:1, children:[], size: 603},
      {label: "neq", x:0,y:0, data:0,leaves:1,height:1, children:[], size: 599},
      {label: "not", x:0,y:0, data:0,leaves:1,height:1, children:[], size: 386},
      {label: "or", x:0,y:0, data:0,leaves:1,height:1, children:[], size: 323},
      {label: "orderby", x:0,y:0, data:0,leaves:1,height:1, children:[], size: 307},
      {label: "range", x:0,y:0, data:0,leaves:1,height:1, children:[], size: 772},
      {label: "select", x:0,y:0, data:0,leaves:1,height:1, children:[], size: 296},
      {label: "stddev", x:0,y:0, data:0,leaves:1,height:1, children:[], size: 363},
      {label: "sub", x:0,y:0, data:0,leaves:1,height:1, children:[], size: 600},
      {label: "sum", x:0,y:0, data:0,leaves:1,height:1, children:[], size: 280},
      {label: "update", x:0,y:0, data:0,leaves:1,height:1, children:[], size: 307},
      {label: "variance", x:0,y:0, data:0,leaves:1,height:1, children:[], size: 335},
      {label: "where", x:0,y:0, data:0,leaves:1,height:1, children:[], size: 299},
      {label: "xor", x:0,y:0, data:0,leaves:1,height:1, children:[], size: 354},
      {label: "_", x:0,y:0, data:0,leaves:1,height:1, children:[], size: 264}
     ], x:0,y:0, data:0,leaves:32,height:2,
    },
    {label: "Minimum", x:0,y:0, data:0,leaves:1,height:2, children:[], size: 843},
    {label: "Not", x:0,y:0, data:0,leaves:1,height:2, children:[], size: 1554},
    {label: "Or", x:0,y:0, data:0,leaves:1,height:2, children:[], size: 970},
    {label: "Query", x:0,y:0, data:0,leaves:1,height:2, children:[], size: 13896},
    {label: "Range", x:0,y:0, data:0,leaves:1,height:2, children:[], size: 1594},
    {label: "StringUtil", x:0,y:0, data:0,leaves:1,height:2, children:[], size: 4130},
    {label: "Sum", x:0,y:0, data:0,leaves:1,height:2, children:[], size: 791},
    {label: "Variable", x:0,y:0, data:0,leaves:1,height:2, children:[], size: 1124},
    {label: "Variance", x:0,y:0, data:0,leaves:1,height:2, children:[], size: 1876},
    {label: "Xor", x:0,y:0, data:0,leaves:1,height:2, children:[], size: 1101}
   ], x:0,y:0, data:0,leaves:61,height:3,
  },//112
  {
   label: "scale",
   children: [
    {label: "IScaleMap", x:0,y:0, data:0,leaves:1,height:2, children:[], size: 2105},
    {label: "LinearScale", x:0,y:0, data:0,leaves:1,height:2, children:[], size: 1316},
    {label: "LogScale", x:0,y:0, data:0,leaves:1,height:2, children:[], size: 3151},
    {label: "OrdinalScale", x:0,y:0, data:0,leaves:1,height:2, children:[], size: 3770},
    {label: "QuantileScale", x:0,y:0, data:0,leaves:1,height:2, children:[], size: 2435},
    {label: "QuantitativeScale", x:0,y:0, data:0,leaves:1,height:2, children:[], size: 4839},
    {label: "RootScale", x:0,y:0, data:0,leaves:1,height:2, children:[], size: 1756},
    {label: "Scale", x:0,y:0, data:0,leaves:1,height:2, children:[], size: 4268},
    {label: "ScaleType", x:0,y:0, data:0,leaves:1,height:2, children:[], size: 1821},
    {label: "TimeScale", x:0,y:0, data:0,leaves:1,height:2, children:[], size: 5833}
   ], x:0,y:0, data:0,leaves:10,height:3,
  },//122
  {
   label: "util",
   children: [
    {label: "Arrays", x:0,y:0, data:0,leaves:1,height:2, children:[], size: 8258},
    {label: "Colors", x:0,y:0, data:0,leaves:1,height:2, children:[], size: 10001},
    {label: "Dates", x:0,y:0, data:0,leaves:1,height:2, children:[], size: 8217},
    {label: "Displays", x:0,y:0, data:0,leaves:1,height:2, children:[], size: 12555},
    {label: "Filter", x:0,y:0, data:0,leaves:1,height:2, children:[], size: 2324},
    {label: "Geometry", x:0,y:0, data:0,leaves:1,height:2, children:[], size: 10993},
    {
     label: "heap",
     children: [
      {label: "FibonacciHeap", x:0,y:0, data:0,leaves:1,height:1, children:[], size: 9354},
      {label: "HeapNode", x:0,y:0, data:0,leaves:1,height:1, children:[], size: 1233}
     ], x:0,y:0, data:0,leaves:2,height:2,
    },
    {label: "IEvaluable", x:0,y:0, data:0,leaves:1,height:2, children:[], size: 335},
    {label: "IPredicate", x:0,y:0, data:0,leaves:1,height:2, children:[], size: 383},
    {label: "IValueProxy", x:0,y:0, data:0,leaves:1,height:2, children:[], size: 874},
    {
     label: "math",
     children: [
      {label: "DenseMatrix", x:0,y:0, data:0,leaves:1,height:1, children:[], size: 3165},
      {label: "IMatrix", x:0,y:0, data:0,leaves:1,height:1, children:[], size: 2815},
      {label: "SparseMatrix", x:0,y:0, data:0,leaves:1,height:1, children:[], size: 3366}
     ], x:0,y:0, data:0,leaves:3,height:2,
    },
    {label: "Maths", x:0,y:0, data:0,leaves:1,height:2, children:[], size: 17705},
    {label: "Orientation", x:0,y:0, data:0,leaves:1,height:2, children:[], size: 1486},
    {
     label: "palette",
     children: [
      {label: "ColorPalette", x:0,y:0, data:0,leaves:1,height:1, children:[], size: 6367},
      {label: "Palette", x:0,y:0, data:0,leaves:1,height:1, children:[], size: 1229},
      {label: "ShapePalette", x:0,y:0, data:0,leaves:1,height:1, children:[], size: 2059},
      {label: "SizePalette", x:0,y:0, data:0,leaves:1,height:1, children:[], size: 2291}
     ], x:0,y:0, data:0,leaves:4,height:2,
    },
    {label: "Property", x:0,y:0, data:0,leaves:1,height:2, children:[], size: 5559},
    {label: "Shapes", x:0,y:0, data:0,leaves:1,height:2, children:[], size: 19118},
    {label: "Sort", x:0,y:0, data:0,leaves:1,height:2, children:[], size: 6887},
    {label: "Stats", x:0,y:0, data:0,leaves:1,height:2, children:[], size: 6557},
    {label: "Strings", x:0,y:0, data:0,leaves:1,height:2, children:[], size: 22026}
   ], x:0,y:0, data:0,leaves:29,height:3,
  },//151
  {
   label: "vis",
   children: [
    {
     label: "axis",
     children: [
      {label: "Axes", x:0,y:0, data:0,leaves:1,height:1, children:[], size: 1302},
      {label: "Axis", x:0,y:0, data:0,leaves:1,height:1, children:[], size: 24593},
      {label: "AxisGridLine", x:0,y:0, data:0,leaves:1,height:1, children:[], size: 652},
      {label: "AxisLabel", x:0,y:0, data:0,leaves:1,height:1, children:[], size: 636},
      {label: "CartesianAxes", x:0,y:0, data:0,leaves:1,height:1, children:[], size: 6703}
     ], x:0,y:0, data:0,leaves:5,height:2,
    },
    {
     label: "controls",
     children: [
      {label: "AnchorControl", x:0,y:0, data:0,leaves:1,height:1, children:[], size: 2138},
      {label: "ClickControl", x:0,y:0, data:0,leaves:1,height:1, children:[], size: 3824},
      {label: "Control", x:0,y:0, data:0,leaves:1,height:1, children:[], size: 1353},
      {label: "ControlList", x:0,y:0, data:0,leaves:1,height:1, children:[], size: 4665},
      {label: "DragControl", x:0,y:0, data:0,leaves:1,height:1, children:[], size: 2649},
      {label: "ExpandControl", x:0,y:0, data:0,leaves:1,height:1, children:[], size: 2832},
      {label: "HoverControl", x:0,y:0, data:0,leaves:1,height:1, children:[], size: 4896},
      {label: "IControl", x:0,y:0, data:0,leaves:1,height:1, children:[], size: 763},
      {label: "PanZoomControl", x:0,y:0, data:0,leaves:1,height:1, children:[], size: 5222},
      {label: "SelectionControl", x:0,y:0, data:0,leaves:1,height:1, children:[], size: 7862},
      {label: "TooltipControl", x:0,y:0, data:0,leaves:1,height:1, children:[], size: 8435}
     ], x:0,y:0, data:0,leaves:11,height:2,
    },
    {
     label: "data",
     children: [
      {label: "Data", x:0,y:0, data:0,leaves:1,height:1, children:[], size: 20544},
      {label: "DataList", x:0,y:0, data:0,leaves:1,height:1, children:[], size: 19788},
      {label: "DataSprite", x:0,y:0, data:0,leaves:1,height:1, children:[], size: 10349},
      {label: "EdgeSprite", x:0,y:0, data:0,leaves:1,height:1, children:[], size: 3301},
      {label: "NodeSprite", x:0,y:0, data:0,leaves:1,height:1, children:[], size: 19382},
      {
       label: "render",
       children: [
        {label: "ArrowType", x:0,y:0, data:0,leaves:1,height:0, children:[], size: 698},
        {label: "EdgeRenderer", x:0,y:0, data:0,leaves:1,height:0, children:[], size: 5569},
        {label: "IRenderer", x:0,y:0, data:0,leaves:1,height:0, children:[], size: 353},
        {label: "ShapeRenderer", x:0,y:0, data:0,leaves:1,height:0, children:[], size: 2247}
       ], x:0,y:0, data:0,leaves:4,height:1,
      },
      {label: "ScaleBinding", x:0,y:0, data:0,leaves:1,height:1, children:[], size: 11275},
      {label: "Tree", x:0,y:0, data:0,leaves:1,height:1, children:[], size: 7147},
      {label: "TreeBuilder", x:0,y:0, data:0,leaves:1,height:1, children:[], size: 9930}
     ], x:0,y:0, data:0,leaves:12,height:2,
    },
    {
     label: "events",
     children: [
      {label: "DataEvent", x:0,y:0, data:0,leaves:1,height:1, children:[], size: 2313},
      {label: "SelectionEvent", x:0,y:0, data:0,leaves:1,height:1, children:[], size: 1880},
      {label: "TooltipEvent", x:0,y:0, data:0,leaves:1,height:1, children:[], size: 1701},
      {label: "VisualizationEvent", x:0,y:0, data:0,leaves:1,height:1, children:[], size: 1117}
     ], x:0,y:0, data:0,leaves:4,height:2,
    },
    {
     label: "legend",
     children: [
      {label: "Legend", x:0,y:0, data:0,leaves:1,height:1, children:[], size: 20859},
      {label: "LegendItem", x:0,y:0, data:0,leaves:1,height:1, children:[], size: 4614},
      {label: "LegendRange", x:0,y:0, data:0,leaves:1,height:1, children:[], size: 10530}
     ], x:0,y:0, data:0,leaves:3,height:2,
    },
    {
     label: "operator",
     children: [
      {
       label: "distortion",
       children: [
        {label: "BifocalDistortion", x:0,y:0, data:0,leaves:1,height:0, children:[], size: 4461},
        {label: "Distortion", x:0,y:0, data:0,leaves:1,height:0, children:[], size: 6314},
        {label: "FisheyeDistortion", x:0,y:0, data:0,leaves:1,height:0, children:[], size: 3444}
       ], x:0,y:0, data:0,leaves:3,height:2,
      },
      {
       label: "encoder",
       children: [
        {label: "ColorEncoder", x:0,y:0, data:0,leaves:1,height:1, children:[], size: 3179},
        {label: "Encoder", x:0,y:0, data:0,leaves:1,height:1, children:[], size: 4060},
        {label: "PropertyEncoder", x:0,y:0, data:0,leaves:1,height:1, children:[], size: 4138},
        {label: "ShapeEncoder", x:0,y:0, data:0,leaves:1,height:1, children:[], size: 1690},
        {label: "SizeEncoder", x:0,y:0, data:0,leaves:1,height:1, children:[], size: 1830}
       ], x:0,y:0, data:0,leaves:5,height:2,
      },
      {
       label: "filter",
       children: [
        {label: "FisheyeTreeFilter", x:0,y:0, data:0,leaves:1,height:1, children:[], size: 5219},
        {label: "GraphDistanceFilter", x:0,y:0, data:0,leaves:1,height:1, children:[], size: 3165},
        {label: "VisibilityFilter", x:0,y:0, data:0,leaves:1,height:1, children:[], size: 3509}
       ], x:0,y:0, data:0,leaves:3,height:2,
      },
      {label: "IOperator", x:0,y:0, data:0,leaves:1,height:2, children:[], size: 1286},
      {
       label: "label",
       children: [
        {label: "Labeler", x:0,y:0, data:0,leaves:1,height:1, children:[], size: 9956},
        {label: "RadialLabeler", x:0,y:0, data:0,leaves:1,height:1, children:[], size: 3899},
        {label: "StackedAreaLabeler", x:0,y:0, data:0,leaves:1,height:1, children:[], size: 3202}
       ], x:0,y:0, data:0,leaves:3,height:2, 
      },
      {
       label: "layout",
       children: [
        {label: "AxisLayout", x:0,y:0, data:0,leaves:1,height:1, children:[], size: 6725},
        {label: "BundledEdgeRouter", x:0,y:0, data:0,leaves:1,height:1, children:[], size: 3727},
        {label: "CircleLayout", x:0,y:0, data:0,leaves:1,height:1, children:[], size: 9317},
        {label: "CirclePackingLayout", x:0,y:0, data:0,leaves:1,height:1, children:[], size: 12003},
        {label: "DendrogramLayout", x:0,y:0, data:0,leaves:1,height:1, children:[], size: 4853},
        {label: "ForceDirectedLayout", x:0,y:0, data:0,leaves:1,height:1, children:[], size: 8411},
        {label: "IcicleTreeLayout", x:0,y:0, data:0,leaves:1,height:1, children:[], size: 4864},
        {label: "IndentedTreeLayout", x:0,y:0, data:0,leaves:1,height:1, children:[], size: 3174},
        {label: "Layout", x:0,y:0, data:0,leaves:1,height:1, children:[], size: 7881},
        {label: "NodeLinkTreeLayout", x:0,y:0, data:0,leaves:1,height:1, children:[], size: 12870},
        {label: "PieLayout", x:0,y:0, data:0,leaves:1,height:1, children:[], size: 2728},
        {label: "RadialTreeLayout", x:0,y:0, data:0,leaves:1,height:1, children:[], size: 12348},
        {label: "RandomLayout", x:0,y:0, data:0,leaves:1,height:1, children:[], size: 870},
        {label: "StackedAreaLayout", x:0,y:0, data:0,leaves:1,height:1, children:[], size: 9121},
        {label: "TreeMapLayout", x:0,y:0, data:0,leaves:1,height:1, children:[], size: 9191}
       ], x:0,y:0, data:0,leaves:15,height:2,
      },
      {label: "Operator", x:0,y:0, data:0,leaves:1,height:2, children:[], size: 2490},
      {label: "OperatorList", x:0,y:0, data:0,leaves:1,height:2, children:[], size: 5248},
      {label: "OperatorSequence", x:0,y:0, data:0,leaves:1,height:2, children:[], size: 4190},
      {label: "OperatorSwitch", x:0,y:0, data:0,leaves:1,height:2, children:[], size: 2581},
      {label: "SortOperator", x:0,y:0, data:0,leaves:1,height:2, children:[], size: 2023}
     ], x:0,y:0, data:0,leaves:70,height:3, 
    },
    {label: "Visualization", x:0,y:0, data:0,leaves:1,height:3, children:[], size: 16540}
   ], x:0,y:0, data:0,leaves:1,height:4, 
  }
 ], x:0,y:0, data:0,leaves:222,height:5,
}
    return root;
}
