document.addEventListener("alpine:init", () => {
    Alpine.data("creditCard", () => ({
        init() {
            console.log('Component mounted');

        },
        format() {
            if (this.cardNumber.length > 18) {
                return;
            }
            this.cardNumber = this.cardNumber.replace(/\W/gi, '').replace(/(.{4})/g, '$1');

        },
        get isValid() {
            if (this.cardholder.length < 5) {
                return false;
            }
            if (this.cardNumber === '') {
                return false;
            }
            if (this.expired.month === '' && this.expired.year === '') {
                return false;
            }
            if (this.securityCode.length !== 3) {
                return false;
            }
            return true;
        },
        onSubmit() {
            alert(`You did it ${this.cardholder}.`);
        },
        cardholder: '',
        cardNumber: '',
        expired: {
            month: '',
            year: '',
        },
        securityCode: '',
        card: 'front',  
    }));
});
