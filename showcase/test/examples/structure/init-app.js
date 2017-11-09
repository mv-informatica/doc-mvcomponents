define(["require", "exports", "mv-workspace", "mv-hosp/css/mv-hosp.old.css!", "mv-basico/css/mv-basico.old.css!", "./area-manager/area-manager"], function (require, exports, mv_workspace_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    mv_workspace_1.workspaceDispatch.onRegisterArea.emit({
        name: "showcase-area",
        path: "examples/structure/areas/showcase-area"
    });
    mv_workspace_1.workspaceDispatch.onChangeArea.emit({
        name: "showcase-area",
        params: {}
    });
});
