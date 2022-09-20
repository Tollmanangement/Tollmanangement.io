var vehicle_array =[];
var tolldata =[];

window.onload = function(){
	show()

	//search option on vechile column
	var search_vechile = document.getElementById("search-vehicle");
search_vechile.onkeyup = function Filtervehicle() {
        // Declare variables
        var input, filter, table, tr, td, i;
        input = document.getElementById("search-vehicle");
        filter = input.value.toLowerCase();
        table = document.getElementById("order-table");
        tr = table.getElementsByTagName("tr");

        // Loop through all table rows, and hide those who don't match the search query
        for (i = 0; i < tr.length; i++) {
            td = tr[i].getElementsByTagName("td")[1];
          // change index to change your column search

            if (td) {
                if (td.innerHTML.toLowerCase().indexOf(filter) > -1) {
                    tr[i].style.display = "";
                } else {
                    tr[i].style.display = "none";
                }
            }
        }
    }

	//search option on toll page

	var search_toll = document.getElementById("search-toll");
	search_toll.onkeyup = function Filtertoll() {
        // Declare variables
        var input, filter, table, tr, td, i;
        input = document.getElementById("search-toll");
        filter = input.value.toLowerCase();
        table = document.getElementById("order-table-toll");
        tr = table.getElementsByTagName("tr");

        // Loop through all table rows, and hide those who don't match the search query
        for (i = 0; i < tr.length; i++) {
            td = tr[i].getElementsByTagName("td")[0];
          // change index to change your column search

            if (td) {
                if (td.innerHTML.toLowerCase().indexOf(filter) > -1) {
                    tr[i].style.display = "";
                } else {
                    tr[i].style.display = "none";
                }
            }
        }
    }


	//Dropdown filter based on onchange event
	var Drop_down = document.getElementById("tablefilter");
	Drop_down.onchange = function filter() {
        // Declare variables

        var input, filter, table, tr, td, i;
        input = document.getElementById("tablefilter");
        filter = input.value.toLowerCase();
        table = document.getElementById("order-table");
        tr = table.getElementsByTagName("tr");

        // Loop through all table rows, and hide those who don't match the search query
        for (i = 0; i < tr.length; i++) {
            td = tr[i].getElementsByTagName("td")[3];
          // change index to change your column search

            if (td) {
                if (td.innerHTML.toLowerCase().indexOf(filter) > -1) {
                    tr[i].style.display = "";
                } else {
                    tr[i].style.display = "none";
                }
            }
        }
    }
	
		
	

var ebModal = document.getElementById('addtollModal');
var ebBtn = document.getElementById("addtoll");
var ebSpan = document.getElementsByClassName("ebcf_close")[0];
ebBtn.onclick = function() {
    ebModal.style.display = "block";
}
ebSpan.onclick = function() {
    ebModal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == ebModal) {
        ebModal.style.display = "none";
    }
}

//Toll entry button for swap page

var ebModal2 = document.getElementById('addtollModal');
var ebBtn_2 = document.getElementById("addtoll-2");
var ebSpan2 = document.getElementsByClassName("ebcf_close")
ebBtn_2.onclick = function() {
    ebModal.style.display = "block";
}
ebSpan2.onclick = function() {
    ebModal2.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == ebModal2) {
        ebModal2.style.display = "none";
    }
}


var ebModal_vehc = document.getElementById('addvehicleModal');
var ebBtn_vehc = document.getElementById("addvehicle");
var ebSpan_vehc = document.getElementsByClassName("ebcf_close_vehc")[0];
ebBtn_vehc.onclick = function() {
    ebModal_vehc.style.display = "block";
}
ebSpan_vehc.onclick = function() {
    ebModal_vehc.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == ebModal_vehc) {
        ebModal_vehc.style.display = "none";
    }
}

// vehicle netry button for swap div
var ebModal_vehc2 = document.getElementById('addvehicleModal');
var ebBtn_vehc2 = document.getElementById("addvehicle2");
var ebSpan_vehc2 = document.getElementsByClassName("ebcf_close_vehc")[0];
ebBtn_vehc2.onclick = function() {
    ebModal_vehc2.style.display = "block";
}
ebSpan_vehc2.onclick = function() {
    ebModal_vehc2.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == ebModal_vehc2) {
        ebModal_vehc2.style.display = "none";
    }
}



var swapdiv = document.getElementById("swap");
swapdiv.onclick = function SwapDivsWithClick() {
    var d1 = document.getElementById("tablepress-1");
    var d2 = document.getElementById("map-1");
    if (d2.style.display == "none") {
      d1.style.display = "none";
      d2.style.display = "block";
    } else {
      d1.style.display = "block";
      d2.style.display = "none";
    }
  }
  var swapdiv_back = document.getElementById("swap-back");
  swapdiv_back.onclick = function SwapDivsWithClick() {
      var d1 = document.getElementById("tablepress-1");
      var d2 = document.getElementById("map-1");
      if (d2.style.display == "none") {
        d1.style.display = "none";
        d2.style.display = "block";
      } else {
        d1.style.display = "block";
        d2.style.display = "none";
      }
    }
	function getdata()
	{
		var str1 = localStorage.getItem("tolldata")
		if(str1 !=null)
		{
			tolldata = JSON.parse(str1);
		}
    
	
	}
	function getdatave()
	{
		var str2 = localStorage.getItem("vehicle_array")
		if(str2 !=null)
		{
			vehicle_array = JSON.parse(str2);
		}
		

	}
	function show()
	{
		//getting data from localstorage for tollgate data
        getdatave();
		getdata();

		var table_toll = document.getElementById("order-table-toll");
		var rowcount= (table_toll.rows.length);
		while(--rowcount){
			table_toll.deleteRow(rowcount)
	
		}
	
		for(var i=0;i<tolldata.length;i++)
		{ 
		var row = table_toll.insertRow();
		var name = row.insertCell(0);
		var toll_car_jeep_van = row.insertCell(1);
		var toll_lcv= row.insertCell(2);
		var toll_TRUCK_BUS = row.insertCell(3);
		var toll_Heavy_VEHICLE = row.insertCell(4);
		name.innerHTML =tolldata[i].name;
		toll_car_jeep_van.innerHTML =tolldata[i].f_select_sin+"/"+ tolldata[i].f_select_return;
		toll_lcv.innerHTML = tolldata[i].s_select_sin +"/"+ tolldata[i].s_select_return;
		toll_TRUCK_BUS.innerHTML = tolldata[i].t_select_sin+"/"+tolldata[i].t_select_return;
		toll_Heavy_VEHICLE.innerHTML = tolldata[i].fo_select_sin+"/"+ tolldata[i].fo_select_return;
		}
		

		//getting data from local storage for vehicle entry
		
		
		var table_vehicle = document.getElementById("order-table");
		var rowcount_2= (table_vehicle.rows.length);
		while(--rowcount_2){
			table_vehicle.deleteRow(rowcount_2)
	
		}
		

		for(var j=0;j<vehicle_array.length;j++)
		{ 
		var row_veh = table_vehicle.insertRow();
		var type = row_veh.insertCell(0);
		var number = row_veh.insertCell(1);
		var date_time= row_veh.insertCell(2);
		var toll_name = row_veh.insertCell(3);
		var traiff = row_veh.insertCell(4);
		
		type.innerHTML =vehicle_array[j].vehicle;
		number.innerHTML =vehicle_array[j].vehiclenum;
		date_time.innerHTML = vehicle_array[j].date;
		toll_name.innerHTML = vehicle_array[j].tollname;
		traiff.innerHTML = vehicle_array[j].tariff;
		}
		

	}
	var toll_insert = document.getElementById("toll-insert");
	
	toll_insert.onclick = function tinsert()
	{ 
		getdata();
		tolldata.push({name:document.getElementById("toll-name").value,
		f_select_sin :document.getElementById("f-select-sin").value,
		f_select_return :document.getElementById("f-select-return").value,
		s_select_sin :document.getElementById("s-select-sin").value,
		s_select_return :document.getElementById("s-select-return").value,
		t_select_sin :document.getElementById("t-select-sin").value,
		t_select_return :document.getElementById("t-select-return").value,
		fo_select_sin :document.getElementById("fo-select-sin").value,
		fo_select_return :document.getElementById("fo-select-return").value,

	})
	
	localStorage.setItem("tolldata",JSON.stringify(tolldata));
	show();
	}
	//Adding vehicle data to local strorage

	var vehicle_insert = document.getElementById("btn-veh");
	
	vehicle_insert.onclick = function vinsert()
	{  
		getdatave();
		show();
		var today = new Date()
		var date = today.getDate() + '/' +(today.getMonth()+1) +'/'+ today.getFullYear();
		var time = today.getHours() + ":"+today.getMinutes()+":"+today.getSeconds();
		var datetime=date + ", " + time;
		
		
		vehicle_array.push({
		tollname :document.getElementById("tollname").value,
		vehicle :document.getElementById("vehicle-type").value,
		vehiclenum :document.getElementById("vehicle-number").value,
		date:datetime,
		tariff :document.getElementById("toll-tariff-ins").value

	})
	localStorage.setItem("vehicle_array",JSON.stringify(vehicle_array));
	show();
	
	}
	


}



