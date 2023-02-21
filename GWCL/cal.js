  $('#calculate-btn').click(function() {
    var meter_cube_of_water = $('#meter_cube_of_water').val();
    var bill_type = $('#bill-type').val();
    if (bill_type == 'domestic') {
      if (meter_cube_of_water <= 5) {
        var approved_rate = 3.22;
      } else {
        var approved_rate = 5.48;
      }
    } else if (bill_type == 'commercial') {
      var approved_rate = 9.0298;
    } else if (bill_type == 'industrial') {
      if (meter_cube_of_water <= 40) {
        var approved_rate = 10.8768;
      } else {
        var approved_rate = 0;
        // Set approved rate to 0 for meter cube of water greater than 40
        // Alternatively, you can add additional approved rates for larger meter cube ranges
      }
    }
    var water_charge = meter_cube_of_water * approved_rate;
    var fire_fighting_fee = water_charge * 0.01;
    var rural_water_fee = water_charge * 0.02;
    var total_bill_amount = water_charge + fire_fighting_fee + rural_water_fee;
    $('#result').html('Total Bill Amount: GH₵' + total_bill_amount.toFixed(2));
  });
