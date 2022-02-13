window.onload = function () {
            var localStorageKeyName = 'data';
            var localStorageKeya1 = 'a1';
            var localStorageKeyb2 = 'b2';
            var localStorageKeyc3 = 'c3';
            var localStorageKeyf4 = 'f4';

            CargarDatosAgregar();

            document.querySelector("#btn-add").addEventListener('click', function () {
                var nombre = document.getElementById("nombre");
                    matricula = document.getElementById("matricula");
                    n1 = document.getElementById("n1");
                    n2 = document.getElementById("n2");
                    n3 = document.getElementById("n3");
                    n4 = document.getElementById("n4");
                    calcular = (parseFloat(n1.value)+parseFloat(n2.value)
                        +parseFloat(n3.value)+parseFloat(n4.value));
                    promedio = calcular / 4;
                    eq = "";

                 if (promedio >= 90)
                {
                    eq = 'A';
                }
                else
                {
                    if (promedio >= 80 && promedio <= 89)
                    {
                        eq = 'B';
                    }
                    else
                    {
                        if (promedio >= 70 && promedio <= 79)
                        {
                            eq = 'C';
                        }
                            else
                            {
                                eq = 'F';
                            }
                        
                    }
                }

                var va1=0;
                var va2=0;
                var va3=0;
                var va4=0;


    if (eq == "A"){
        va1++;
        localStorage.setItem(localStorageKeya1, JSON.stringify(va1));
        }else if (eq == "B"){
            va2++;
            localStorage.setItem(localStorageKeyb2, JSON.stringify(va2));

                }else if (eq == "C"){
                     va3++;
                localStorage.setItem(localStorageKeyc3, JSON.stringify(va3));

                    } else{
                        va4++;     
                    localStorage.setItem(localStorageKeyf4, JSON.stringify(va4));
                    

        } 

    


                // Validate
                if (nombre.value.length === 0 || matricula.value.length === 0 || !parseInt(n1.value) || !parseInt(n2.value) 
                    || !parseInt(n3.value) || !parseInt(n4.value))  return;

                var user = {
                    nombre: nombre.value,
                    matricula: matricula.value,
                    n1: n1.value,
                    n2: n2.value,
                    n3: n3.value,
                    n4: n4.value,
                    promedio: promedio,
                    eq: eq

                };

                // Clean data
                nombre.value = '';
                matricula.value = '';
                n1.value = '';
                n2.value = '';
                n3.value = '';
                n4.value = '';
                promedio = '';
                eq = '';

                // Append to my localStorage
                appendObjectToLocalStorage(user);
            })

            function appendObjectToLocalStorage(obj) {
                var users = [],
                    dataInLocalStorage = localStorage.getItem(localStorageKeyName);

                if (dataInLocalStorage !== null) {
                    users = JSON.parse(dataInLocalStorage);
                }

                users.push(obj);

                localStorage.setItem(localStorageKeyName, JSON.stringify(users));

                CargarDatosAgregar();
            }

            function CargarDatosAgregar() {
                var users = [],
                    dataInLocalStorage = localStorage.getItem(localStorageKeyName),
                    gridBody = document.querySelector("#grid tbody");


                if (dataInLocalStorage !== null) {
                    users = JSON.parse(dataInLocalStorage);
                }

                // Draw TR from TBODY
                gridBody.innerHTML = '';

                users.forEach(function (x, i) {
                    var tr = document.createElement("tr"),
                        tdNombre = document.createElement("td"),
                        tdMatricula = document.createElement("td"),
                        tdNota1 = document.createElement("td"),
                        tdNota2 = document.createElement("td"),
                        tdNota3 = document.createElement("td"),
                        tdNota4 = document.createElement("td"),
                        tdPromedio = document.createElement("td"),
                        tdEq = document.createElement("td"),
                        tdEliminar = document.createElement("td"),
                        btnEliminar = document.createElement("button");

                    tdNombre.innerHTML = x.nombre;
                    tdMatricula.innerHTML = x.matricula;
                    tdNota1.innerHTML = x.n1;
                    tdNota2.innerHTML = x.n2;
                    tdNota3.innerHTML = x.n3;
                    tdNota4.innerHTML = x.n4;
                    tdPromedio.innerHTML = x.promedio;
                    tdEq.innerHTML = x.eq;
                    eq = x.eq;
                    btnEliminar.textContent = 'Eliminar';
                    btnEliminar.className = 'btn btn-xs btn-danger';
                    btnEliminar.addEventListener('click', function(){
                        removeFromLocalStorage(i);
                    });

                    tdEliminar.appendChild(btnEliminar);

                    tr.appendChild(tdNombre);
                    tr.appendChild(tdMatricula);
                    tr.appendChild(tdNota1);
                    tr.appendChild(tdNota2);
                    tr.appendChild(tdNota3);
                    tr.appendChild(tdNota4);
                    tr.appendChild(tdPromedio);
                    tr.appendChild(tdEq);
                    tr.appendChild(tdEliminar);


                    gridBody.appendChild(tr);
                });
            }


            function removeFromLocalStorage(index){
                var users = [],
                    dataInLocalStorage = localStorage.getItem(localStorageKeyName);

                users = JSON.parse(dataInLocalStorage);

                users.splice(index, 1);

                localStorage.setItem(localStorageKeyName, JSON.stringify(users));

                CargarDatosAgregar();
            }
        }