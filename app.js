$(document).ready(function () {
    $.getJSON('data.json', function (dataObj) {
        var wells = dataObj.result.records;
        var selectedWell;
        
        //Create an array based on chosen properties
        function pluckData(array, property){
            var newArr = array.map(function(obj){
                return obj[property];
            });
            return(newArr);
        }
        
        //Create an array of well names
        var wellNames = pluckData(wells, 'well_name');
        console.log(wellNames);
        
        //Update html options from the chosen array
        function updateOptions (array){
            var optionView;
            optionView += '<option>SELECT WELL</option>';
            array.forEach(function(item){
                optionView += '<option>' + item + '</option>';
            });
            return optionView;
        }
        
        //update options with well names
        var wellOptions = updateOptions(wellNames);
        $("#wellName").html(wellOptions);
        
        //find well object by well name
        function findWell(well) {
            return well.well_name === selectedWell;
        }
        
        //use selected well object to ouput to the page
        function updateWell() {
            var output = "";
            selectedWell = $("option:selected").val();
            var selectedWellObj = wells.find(findWell);

            //build and format output
            var buildOutput = function () {
                var keys = Object.keys(selectedWellObj);

                keys.forEach(function (key) {
                    var value = selectedWellObj[key];
                    output += '<li><span class="key">' + key.toUpperCase(key).replace(/_/g, " ") + '</span> : <span class="value">' + value + '</span></li>';
                });
                
                //display output
                $(".records-container").html(output);
            }
            buildOutput();
        }

        $("button").click(function () {
            if ($("option:selected").val() === 'SELECT WELL') {
                var output = "";
                $(".records-container").html(output);
            } else {
                updateWell();
            }
        });
    });
});
