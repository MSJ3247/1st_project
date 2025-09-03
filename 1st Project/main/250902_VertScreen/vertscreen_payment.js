    const methods = document.querySelectorAll('input[name="paymethod"]');
    const cardForm = document.querySelector('.card-form');
    const bankForm = document.querySelector('.bank-form');
    const btnPay = document.querySelector('.btn-pay');


    methods.forEach(method => {
     method.addEventListener('change', () => {
    if(method.value === 'card') {
      cardForm.style.display = 'block';
      bankForm.style.display = 'none';
    } else {
      cardForm.style.display = 'none';
      bankForm.style.display = 'block';
    }
    });
    });

    btnPay.addEventListener('click', (e) => {
    e.preventDefault(); // 실제 링크 이동 막기
    const selectedMethod = document.querySelector('input[name="paymethod"]:checked').value;

    let missingFields = [];
    

    if(selectedMethod === 'card') {
        const cardNumber = cardForm.querySelector('input[placeholder="카드 번호"]').value.trim();
        const expiry = cardForm.querySelector('input[placeholder="유효기간(MM/YY)"]').value.trim();
        const cvc = cardForm.querySelector('input[placeholder="CVC"]').value.trim();

        if(!cardNumber) missingFields.push("카드 번호");
        if(!expiry) missingFields.push("유효기간");
        if(!cvc) missingFields.push("CVC");

    } else {
        const bankName = bankForm.querySelector('input[placeholder="은행명"]').value.trim();
        const accountNumber = bankForm.querySelector('input[placeholder="계좌번호"]').value.trim();
        const depositor = bankForm.querySelector('input[placeholder="예금주"]').value.trim();

        if(!bankName) missingFields.push("은행명");
        if(!accountNumber) missingFields.push("계좌번호");
        if(!depositor) missingFields.push("예금주");
    }

    if(missingFields.length > 0) {
        alert("다음 항목이 입력되지 않았습니다: " + missingFields.join(", "));
    } else {
        alert("결제가 완료되었습니다");
        window.location.href = "./vertscreen_main.html";
    }
    });