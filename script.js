let containerStep1 = document.getElementById("containerStep1");
let containerStep2 = document.getElementById("containerStep2");
let containerStep3 = document.getElementById("containerStep3");
let containerStep4 = document.getElementById("containerStep4");
let circleStep1 = document.getElementById("circleStep1");
let circleStep2 = document.getElementById("circleStep2");
let circleStep3 = document.getElementById("circleStep3");
let circleStep4 = document.getElementById("circleStep4");
let nextStepBtn = document.getElementById("nextStepBtn");
let confirmBtn = document.getElementById("confirmBtn");
let nameInput = document.getElementById("nameInput");
let emailInput = document.getElementById("emailInput");
let phoneInput = document.getElementById("phoneInput");
let nameError = document.getElementById("nameError");
let emailError = document.getElementById("emailError");
let phoneError = document.getElementById("phoneError");
let infoTitle = document.getElementById("infoTitle");
let phoneInputValue = document.getElementById("phoneInput").value;
let infoDescription = document.getElementById("infoDescription");
let arcadeBox = document.getElementById("arcadeBox");
let advancedBox = document.getElementById("advancedBox");
let proBox = document.getElementById("proBox");
let monthText = document.getElementById("monthText");
let yearText = document.getElementById("yearText");
let toggleCircle = document.getElementById("toggleCircle");
let arcadeMoney = document.getElementById("arcadeMoney");
let advancedMoney = document.getElementById("advancedMoney");
let proMoney = document.getElementById("proMoney");
let planFrees = document.querySelectorAll(".plan-free");
let goBack = document.getElementById("goBack");
let addWrp1 = document.getElementById("addWrp1");
let addWrp2 = document.getElementById("addWrp2");
let addWrp3 = document.getElementById("addWrp3");
let checked1 = document.getElementById("checked1");
let checked2 = document.getElementById("checked2");
let checked3 = document.getElementById("checked3");
let plained1 = document.getElementById("plained1");
let plained2 = document.getElementById("plained2");
let plained3 = document.getElementById("plained3");
let sumAddPrice1 = document.getElementById("sumAddPrice1");
let sumAddPrice2 = document.getElementById("sumAddPrice2");
let sumAddPrice3 = document.getElementById("sumAddPrice3");
let boxShadowSum = document.getElementById("boxShadowSum");
let addPrice1 = document.getElementById("addPrice1");
let addPrice2 = document.getElementById("addPrice2");
let addPrice3 = document.getElementById("addPrice3");
let sumArcadePrice = document.getElementById("sumArcadePrice");
let sumAddWrp1 = document.getElementById("sumAddWrp1");
let sumAddWrp2 = document.getElementById("sumAddWrp2");
let sumAddWrp3 = document.getElementById("sumAddWrp3");
let sumTotalPrice = document.getElementById("sumTotalPrice");
let sumPlanText = document.getElementById("sumPlanText");
let bracketChanger = document.getElementById("bracketChanger");
let perMonth = document.getElementById("perMonth");

let arcadeBill = 90;
let advancedBill = 0;
let proBill = 0;
let calculateTotal = 0;
let addOnBill = 0;

let stepCount = 1;

let isArcade = true;
let isAdvanced = false;
let isPro = false;

let yearlyPlan = true;
let monthlyPlan = false;

let onlineService = false;
let largerStorage = false;
let customProfile = false;

let mainTitles = ["Personal info", "Select your plan", "Pick add-ons", "Finishing up"];
let mainDescs = ["Please provide your name, email address, and phone number.",
                "You have the option of monthly or yearly billing.",
                "Add-ons help enhance your gaming experience.",
                "Double-check everything looks OK before confirming"];

goBack.onclick = doNothing;

function doNothing() {
}

function changeBill() {
    stepCount = 2;
    goBack.onclick = goBackStep1;
    containerStep4.style.display = "none";
    containerStep2.style.display = "block";
    switchCircleStep(circleStep2);
    infoTitle.innerHTML = mainTitles[1];
    infoDescription.innerHTML = mainDescs[1];
    nextStepBtn.style.display = "block";
    confirmBtn.style.display = "none";
}

function resetBills() {
    arcadeBill = 0;
    advancedBill = 0;
    proBill = 0;
}

function updateMonth() {
    //Step 2 Changes//
    arcadeMoney.innerHTML = "$9/mo";
    advancedMoney.innerHTML = "$12/mo";
    proMoney.innerHTML = "$15/mo";
    for(let i = 0; i < planFrees.length; i++) {
        planFrees[i].style.display = "none";
    }

    //Step 3 Changes//
    addPrice1.innerHTML = "+$1/mo";
    addPrice2.innerHTML = "+$2/mo";
    addPrice3.innerHTML = "+$2/mo";

    //Step 4 Changes//
    bracketChanger.innerHTML = "(Monthly)";
    perMonth.innerHTML = "(per month)";
    sumAddPrice1.innerHTML = "+$1/mo";
    sumAddPrice2.innerHTML = "+$2/mo";
    sumAddPrice3.innerHTML = "+$2/mo";
}

function updateYear() {
    //Step 2 Changes//
    arcadeMoney.innerHTML = "$90/yr";
    advancedMoney.innerHTML = "$120/yr";
    proMoney.innerHTML = "$150/yr";
    for(let i = 0; i < planFrees.length; i++) {
        planFrees[i].style.display = "block";
    }

    //Step 3 Changes//
    addPrice1.innerHTML = "+$10/yr";
    addPrice2.innerHTML = "+$20/yr";
    addPrice3.innerHTML = "+$20/yr";

    //Step 4 Changes//
    bracketChanger.innerHTML = "(Yearly)";
    perMonth.innerHTML = "(per year)";
    sumAddPrice1.innerHTML = "+$10/yr";
    sumAddPrice2.innerHTML = "+$20/yr";
    sumAddPrice3.innerHTML = "+$20/yr";
}
updateYear();

function updateText(text) {
    yearText.style.color = "hsl(231, 11%, 63%)";
    monthText.style.color = "hsl(231, 11%, 63%)";
    text.style.color = "hsl(214, 94%, 18%)";
}

function displayBoxColor(box) {
    isArcade = false;
    isAdvanced = false;
    isPro = false;
    resetBoxColor();
    box.style.backgroundColor = "hsl(230, 75%, 98%)";
    box.style.border = "1px solid hsl(243, 100%, 62%)";
}

function resetBoxColor() {
    arcadeBox.style.backgroundColor = "transparent";
    arcadeBox.style.border = "1px solid hsl(231, 11%, 63%)";
    advancedBox.style.backgroundColor = "";
    advancedBox.style.border = "";
    proBox.style.backgroundColor = "";
    proBox.style.border = "";
}

function goFinish() {
    containerStep4.style.display = "none";
    document.getElementById("titleDescWrapper").style.display = "none";
    document.getElementById("buttonContainer").style.display = "none";
    document.getElementById("finishContainer").style.display = "flex";
}

function goBackStep1() {
    stepCount--;
    goBack.onclick = doNothing;
    goBack.style.visibility = "hidden";
    containerStep1.style.display = "flex";
    containerStep2.style.display = "none";
    switchCircleStep(circleStep1);
    infoTitle.innerHTML = mainTitles[0];
    infoDescription.innerHTML = mainDescs[0];
};
function goBackStep2() {
    stepCount--;
    goBack.onclick = goBackStep1;
    console.log(stepCount);
    containerStep3.style.display = "none";
    containerStep2.style.display = "block";
    switchCircleStep(circleStep2);
    infoTitle.innerHTML = mainTitles[1];
    infoDescription.innerHTML = mainDescs[1];
};
function goBackStep3() {
    stepCount--;
    goBack.onclick = goBackStep2;
    containerStep3.style.display = "flex";
    containerStep4.style.display = "none";
    switchCircleStep(circleStep3);
    infoTitle.innerHTML = mainTitles[2];
    infoDescription.innerHTML = mainDescs[2];
    nextStepBtn.style.display = "block";
    confirmBtn.style.display = "none";
};

function goStep1() {
    containerStep1.style.display = "flex";
    containerStep2.style.display = "none";
    switchCircleStep(circleStep1);
    infoTitle.innerHTML = mainTitles[0];
    infoDescription.innerHTML = mainDescs[0];
};
function goStep2() {
    goBack.style.visibility = "visible";
    containerStep1.style.display = "none";
    containerStep2.style.display = "block";
    switchCircleStep(circleStep2);
    infoTitle.innerHTML = mainTitles[1];
    infoDescription.innerHTML = mainDescs[1];
};
function goStep3() {
    containerStep2.style.display = "none";
    containerStep3.style.display = "block";
    switchCircleStep(circleStep3);
    infoTitle.innerHTML = mainTitles[2];
    infoDescription.innerHTML = mainDescs[2];
};
function goStep4() {
    containerStep3.style.display = "none";
    containerStep4.style.display = "block";
    switchCircleStep(circleStep4);
    infoTitle.innerHTML = mainTitles[3];
    infoDescription.innerHTML = mainDescs[3];
    nextStepBtn.style.display = "none";
    confirmBtn.style.display = "block";

    if(monthlyPlan){
        calculateTotal = (arcadeBill + advancedBill + proBill + addOnBill) * 0.1;
        sumTotalPrice.innerHTML = `$${calculateTotal}/yr`;
        switch(true) {
            case isArcade:
                sumTotalPrice.innerHTML = `$${calculateTotal}/mo`;
                sumArcadePrice.innerHTML = "$9/mo";
                break;
            case isAdvanced:
                sumTotalPrice.innerHTML = `$${calculateTotal}/mo`;
                sumArcadePrice.innerHTML = "$12/mo";
                break;
            case isPro:
                sumTotalPrice.innerHTML = `$${calculateTotal}/mo`;
                sumArcadePrice.innerHTML = "$15/mo";
                break;
        }
    } else if(yearlyPlan){
        calculateTotal = (arcadeBill + advancedBill + proBill + addOnBill);
        sumTotalPrice.innerHTML = `$${calculateTotal}/yr`;
        switch(true) {
            case isArcade:
                sumArcadePrice.innerHTML = "$90/yr";
                break;
            case isAdvanced:
                sumArcadePrice.innerHTML = "$120/yr";
                break;
            case isPro:
                sumArcadePrice.innerHTML = "$150/yr";
                break;
        }
    }
};

function switchCircleStep(circle) {
    circleStep1.style.backgroundColor = "transparent";
    circleStep1.style.border = "1px solid white";
    circleStep1.style.color = "white";
    circleStep2.style.backgroundColor = "";
    circleStep2.style.border = "";
    circleStep2.style.color = "";
    circleStep3.style.backgroundColor = "";
    circleStep3.style.border = "";
    circleStep3.style.color = "";
    circleStep4.style.backgroundColor = "";
    circleStep4.style.border = "";
    circleStep4.style.color = "";

    circle.style.backgroundColor = "hsl(206, 94%, 87%)";
    circle.style.border = "hsl(206, 94%, 87%)"; 
    circle.style.color = "hsl(243, 100%, 62%)";
}

function resetErrors() {
    nameError.style.opacity = "";
    nameInput.style.border = "";
    emailError.style.opacity = "";
    emailInput.style.border = "";
    phoneError.style.opacity = "";
    phoneInput.style.border = "";
}

function nextStep() {
    if(nameInput.value.length < 1) {
        nameError.style.opacity = "1";
        nameInput.style.border = "1px solid red";
    }
    if(emailInput.value.length < 1) {
        emailError.style.opacity = "1"; 
        emailInput.style.border = "1px solid red";
    }
    if(phoneInput.value.length < 1) {
        phoneError.style.opacity = "1";
        phoneInput.style.border = "1px solid red";
    }

    if(nameInput.value.length > 0 && emailInput.value.length > 0 && phoneInput.value.length > 0) {
    resetErrors();
    stepCount++;
    console.log(stepCount);
    if(stepCount === 1){        // = on FIRST STEP!
        goBack.onclick = doNothing;
        switchCircleStep(circleStep1);
    } else if(stepCount === 2){     // = on SECOND STEP!
        goBack.onclick = goBackStep1;
        switchCircleStep(circleStep2);
        goStep2();
    } else if(stepCount === 3){        // = on THIRD STEP!
        goBack.onclick = goBackStep2;
        switchCircleStep(circleStep3);
        goStep3();
    } else if(stepCount === 4){          // = on FOURTH STEP!
        goBack.onclick = goBackStep3;
        switchCircleStep(circleStep4);
        goStep4();
    }
}
};

arcadeBox.addEventListener("click", () => {
    if(!isArcade){
    displayBoxColor(arcadeBox);
    resetBills();
    arcadeBill = 90;
    sumPlanText.innerHTML = "Arcade";               //ARCADE//
    isArcade = true;
    }
});
advancedBox.addEventListener("click", () => {
    if(!isAdvanced){
        displayBoxColor(advancedBox);
        resetBills();
        advancedBill = 120;
        sumPlanText.innerHTML = "Advacned";
        isAdvanced = true;
        }
});
proBox.addEventListener("click", () => {
    if(!isPro){
        displayBoxColor(proBox);
        resetBills();
        proBill = 150;
        sumPlanText.innerHTML = "Pro";
        isPro = true;
        }
});

function togglePlan() { 
    if(yearlyPlan){ // switch monthly
        toggleCircle.style.marginRight = "23px";
        monthlyPlan = true;
        yearlyPlan = false;
        updateText(monthText);
        updateMonth();
    } else if(monthlyPlan) { // switch yearly
        toggleCircle.style.marginRight = "";
        monthlyPlan = false;
        yearlyPlan = true;
        updateText(yearText);
        updateYear();
    }
};

function colorAddOn(addOnWrp, checkBox, plainBox, wrapper) {
    addOnWrp.style.backgroundColor = "hsl(230, 75%, 98%)";
    addOnWrp.style.border = "1px solid hsl(243, 100%, 62%)";
    checkBox.style.opacity = "1";
    plainBox.style.backgroundColor = "hsl(243, 100%, 62%)";
    plainBox.style.border = "1px solid transparent";
    wrapper.style.display = "flex";
    boxShadowSum.style.display = "flex";
};
function delAddOn(addOnWrp, checkBox, plainBox, wrapper) {
    addOnWrp.style.backgroundColor = "";
    addOnWrp.style.border = "";
    checkBox.style.opacity = "";
    plainBox.style.backgroundColor = "";
    plainBox.style.border = "";
    wrapper.style.display = "none";

    if(!onlineService && !largerStorage && !customProfile) {
        boxShadowSum.style.display = "none";
    }
};

addWrp1.addEventListener("click", function() {
    if(!onlineService){
        colorAddOn(addWrp1, checked1, plained1, sumAddWrp1);
        addOnBill = addOnBill + 10;
        onlineService = true;
    } else{
        delAddOn(addWrp1, checked1, plained1, sumAddWrp1);
        addOnBill = addOnBill - 10;
        onlineService = false;
    }
});

addWrp2.addEventListener("click", function() {
    if(!largerStorage){
        colorAddOn(addWrp2, checked2, plained2, sumAddWrp2);
        addOnBill = addOnBill + 20;
        largerStorage = true;
    } else{
        delAddOn(addWrp2, checked2, plained2, sumAddWrp2);
        addOnBill = addOnBill - 20;
        largerStorage = false;
    }
});

addWrp3.addEventListener("click", function() {
    if(!customProfile){
        colorAddOn(addWrp3, checked3, plained3, sumAddWrp3);
        addOnBill = addOnBill + 20;
        customProfile = true;
    } else{
        delAddOn(addWrp3, checked3, plained3, sumAddWrp3);
        addOnBill = addOnBill - 20;
        customProfile = false;
    }
});

phoneInput.addEventListener("input", function() {
    phoneInput.value = phoneInput.value.replace(/\D/g, '');
});