window.onload = function () {
 var localStorageKeyName = 'data';
 
CargarDatosIndex();


            function CargarDatosIndex() {
                var users = [],
                    dataInLocalStorage = localStorage.getItem(localStorageKeyName),
                    tbbody = document.querySelector("#tbl tbody");
                    

                if (dataInLocalStorage !== null) {
                    users = JSON.parse(dataInLocalStorage);
                }

                // Draw TR from TBODY
                tbbody.innerHTML = '';

                users.forEach(function (x, i) {
                    var tr = document.createElement("tr"),
                        tdNombre = document.createElement("td"),
                        tdMatricula = document.createElement("td"),
                        tdNota1 = document.createElement("td"),
                        tdNota2 = document.createElement("td"),
                        tdNota3 = document.createElement("td"),
                        tdNota4 = document.createElement("td"),
                        tdPromedio = document.createElement("td"),
                        tdEq = document.createElement("td");

                    tdNombre.innerHTML = x.nombre;
                    tdMatricula.innerHTML = x.matricula;
                    tdNota1.innerHTML = x.n1;
                    tdNota2.innerHTML = x.n2;
                    tdNota3.innerHTML = x.n3;
                    tdNota4.innerHTML = x.n4;
                    tdPromedio.innerHTML = x.promedio;
                    tdEq.innerHTML = x.eq;

                    tr.appendChild(tdNombre);
                    tr.appendChild(tdMatricula);
                    tr.appendChild(tdNota1);
                    tr.appendChild(tdNota2);
                    tr.appendChild(tdNota3);
                    tr.appendChild(tdNota4);
                    tr.appendChild(tdPromedio);
                    tr.appendChild(tdEq);


                    tbbody.appendChild(tr);
                });
            }
    }