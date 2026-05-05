sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
], (Controller,MessageToast) => {
    "use strict";

    return Controller.extend("zov.controller.View1", {
        onInit() {
        },
        
        onCalc: function(oEvt){
            const oView = this.getView()

            const iB1 = parseInt(oView.byId("b1").getValue())
            const iB2 = parseInt(oView.byId("b2").getValue())
            const iB3 = parseInt(oView.byId("b3").getValue())
            const iB4 = parseInt(oView.byId("b4").getValue())

            let fResultado = 0 

            fResultado = (iB1 + iB2 + iB3 + iB4) / 4

            oView.byId("resultado").setValue(fResultado)

            if(isNaN(oView.byId("resultado").getValue())) {
                oView.byId("resultado").setValue("")
                
                oView.byId("b1").setValue("")
                oView.byId("b2").setValue("")
                oView.byId("b3").setValue("")
                oView.byId("b4").setValue("")

                MessageToast.show(`Preencha todas as notas corretamente!`)
            } else {
                MessageToast.show(`Resultado ${fResultado}`)
            }
            
            

        }
    });
});