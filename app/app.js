function init() {
    // document.getElementById('total-cost-input').attributes['disabled'] = 'disabled';
}

function validate() {
    var errors = [];
    var initialUnitCostInput = document.getElementById('initial-unit-cost-input');
    var taxRateInput = document.getElementById('tax-rate-input');
    var weightInput = document.getElementById('weight-input');
    var quantityInput = document.getElementById('quantity-input');
    
    if(!initialUnitCostInput.checkValidity()) {
        errors.push(createErrorObject(initialUnitCostInput));
    }
    
    if(!taxRateInput.checkValidity()) {
        errors.push(createErrorObject(taxRateInput));
    }
    
    if(!weightInput.checkValidity()) {
        errors.push(createErrorObject(weightInput));
    }
    
    if(!quantityInput.checkValidity()) {
        errors.push(createErrorObject(quantityInput));
    }
    
    return errors;
}

function createErrorObject(inputObj) {
    return {
        'input': inputObj.id,
        'message': inputObj.validationMessage
    };
}

function onCalculateButton(e) {
    var errors = validate();

    if(errors != null && errors.length > 0) {
        var message = '';
        errors.forEach(error => {
            message += error.message + '\n';
        });
        alert(message);
        return;
    }
    
    doCalculation();
}

function doCalculation() {
    var initialUnitCostInput = document.getElementById('initial-unit-cost-input');
    var taxRateInput = document.getElementById('tax-rate-input');
    var weightInput = document.getElementById('weight-input');
    var quantityInput = document.getElementById('quantity-input');
    var totalCostInput = document.getElementById('total-cost-input');
    var shipDateInput = document.getElementById('ship-date-input');

    const shipmentCostPerOunce = 0.05;
        
    var unitaryShipCost = weightInput.value * shipmentCostPerOunce;
    var subTotalCost = initialUnitCostInput.value * quantityInput.value + unitaryShipCost;
    var totalCost = subTotalCost * (1 + taxRateInput.value);

    totalCostInput.value = totalCost;
}