/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from '@angular/core';
import * as import1 from '../../../../components/algorithms/graph/vertex';
import * as import2 from '../../../../components/algorithms/graph/edge-service';
const styles_Vertex:any[] = ([] as any[]);
export const RenderType_Vertex:import0.RendererTypeV2 = import0.ɵcreateRendererTypeV2({
  encapsulation: 2,
  styles: styles_Vertex,
  data: {animation: ([] as any[])}
}
);
export function View_Vertex_0():import0.ɵViewDefinition {
  return import0.ɵviewDef(0,[
    import0.ɵqueryDef(20480,1,{element: 0}),
    import0.ɵelementDef(0,[
      [
        1,
        0
      ]
      ,
      [
        'vertex',
        1
      ]

    ]
      ,(null as any),2,'div',[[
        'class',
        'vertex'
      ]
      ],(null as any),[[
        (null as any),
        'click'
      ]
    ],(view,eventName,$event) => {
      var allowDefault:boolean = true;
      var comp:import1.Vertex = view.component;
      if (('click' === eventName)) {
        const pd_0:any = ((<any>comp.setCoordinates()) !== false);
        allowDefault = (pd_0 && allowDefault);
      }
      return allowDefault;
    },(null as any),(null as any)),
      import0.ɵelementDef(0,(null as any),(null as any),1,'span',[[
        'class',
        'vertex-text'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any)),
    import0.ɵtextDef((null as any),[
      '',
      ''
    ]
    )
  ]
  ,(null as any),(check,view) => {
    var comp:import1.Vertex = view.component;
    const currVal_0:any = comp.value;
    check(view,3,0,currVal_0);
  });
}
const RenderType_Vertex_Host:import0.RendererTypeV2 = import0.ɵcreateRendererTypeV2({
  encapsulation: 2,
  styles: ([] as any[]),
  data: {animation: ([] as any[])}
}
);
function View_Vertex_Host_0():import0.ɵViewDefinition {
  return import0.ɵviewDef(0,[
    import0.ɵelementDef(256,(null as any),(null as any),1,'vertex',([] as any[]),(null as any),(null as any),(null as any),View_Vertex_0,RenderType_Vertex),
    import0.ɵdirectiveDef(1024,(null as any),0,import1.Vertex,[
      import2.EdgeService,
      import0.ViewContainerRef
    ]
    ,(null as any),(null as any))
  ]
  ,(null as any),(null as any));
}
export const VertexNgFactory:import0.ComponentFactory<import1.Vertex> = import0.ɵcreateComponentFactory('vertex',import1.Vertex,View_Vertex_Host_0);