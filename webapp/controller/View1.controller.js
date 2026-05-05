sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
], function (Controller, MessageToast) {
    "use strict";

    return Controller.extend("zov.controller.View1", {

        onInit: function () {
        },

        onClick: function () {
            const oView = this.getView();

            ["b1", "b2", "b3", "b4", "resultado"].forEach(id => {
                oView.byId(id).setValue("");
            });

            const oStatus = oView.byId("status");
            oStatus.setVisible(false);
            oStatus.setText("");
            oStatus.setState("None");
        },

        onCalc: function () {
            const oView = this.getView();

            const iB1 = parseFloat(oView.byId("b1").getValue());
            const iB2 = parseFloat(oView.byId("b2").getValue());
            const iB3 = parseFloat(oView.byId("b3").getValue());
            const iB4 = parseFloat(oView.byId("b4").getValue());

            if (isNaN(iB1) || isNaN(iB2) || isNaN(iB3) || isNaN(iB4)) {
                MessageToast.show("Preencha todas as notas corretamente!");
                return;
            }

            const fResultado = (iB1 + iB2 + iB3 + iB4) / 4;

            oView.byId("resultado").setValue(fResultado.toFixed(2));

            MessageToast.show("Resultado: " + fResultado.toFixed(2));

            const status = this.getView().byId("status");

            status.setVisible(true)

            if (fResultado >= 6) {
                status.setText("Aprovado");
                status.setState("Success");
            } else {
                status.setText("Reprovad");
                status.setState("Error");
            }
        }

    });
});